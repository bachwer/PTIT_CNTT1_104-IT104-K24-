// Hàm delay trả về Promise resolve sau ms mili giây
function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


async function runTasks() {
    await delay(1000);
    console.log("Task 1 done");

    await delay(2000);
    console.log("Task 2 done");

    await delay(1500);
    console.log("Task 3 done");

    console.log("All sequential tasks done!");
}

// ==========================
// 2. Xử lý song song (Promise.all)
// ==========================
function taskA(): Promise<void> {
    return delay(1000).then(() => console.log("Task A done"));
}

function taskB(): Promise<void> {
    return delay(1500).then(() => console.log("Task B done"));
}

async function parallelTasks() {
    await Promise.all([taskA(), taskB()]);
    console.log("All parallel tasks done!");
}

// ==========================
// 3. Bắt lỗi bất đồng bộ (try/catch)
// ==========================
function fetchData(): Promise<{ data: string }> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve({ data: "Success!" });
            } else {
                reject(new Error("Network Error!"));
            }
        }, 1000);
    });
}

async function handleData() {
    try {
        const result = await fetchData();
        console.log("Fetch result:", result);
    } catch (err) {
        console.error("Error:", (err as Error).message);
    }
}


(async () => {
    console.log(">>> Run sequential tasks");
    await runTasks();

    console.log("\n>>> Run parallel tasks");
    await parallelTasks();

    console.log("\n>>> Handle fetchData with error handling");
    await handleData();
})();
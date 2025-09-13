// @ts-ignore
import promptSync from "prompt-sync";

const prompt = promptSync();



type callBack = (notification:string) => void;
function addTask<T>(task: T[], callBack: callBack){
    try{
        const newTask = prompt("Enter new task: ");

        if (!newTask || newTask.trim() === "") {
            callBack("Failed to add task");
            return;
        }

        task.push(newTask as unknown as T);
        callBack("Task added successfully!")

    } catch (err) {
        console.error("Error adding task:", (err as Error).message);
        callBack("Failed to add task");
    }
}

function deleteTask<T>(tasks: T[], callBack: callBack): T[] {
    try {
        if (tasks.length === 0) {
            callBack("Task list is empty!");
            return tasks;
        }

        const task = prompt("Enter task to delete: ");
        const newTasks = tasks.filter((a) => a !== (task as unknown as T));

        if (newTasks.length === tasks.length) {
            callBack("Task not found!");
        } else {
            callBack("Task deleted successfully!");
        }

        return newTasks;
    } catch (err) {
        console.error("Error deleting task:", (err as Error).message);
        callBack("Failed to delete task");
        return tasks;
    }
}

function showAll<T>(Task: T[], callBack: callBack){
    if(Task.length === 0){
        callBack("Task is empty !");
        return;
    }

    Task.forEach((e,i) => {
        console.log(`Task ${i}: ${e}`);
    })
    callBack("Done !");
}








const ShowNotification = (Notification:string) => {
    console.log(Notification);
}


function main(){
    let Task: string[] = [];
    let menu: string;
    do{
        console.log("1. Add task");
        console.log("2. Delete task")
        console.log("3. Show all task")

        menu = prompt("Enter your Number: ");
        switch (menu){
            case "1":
                addTask(Task,ShowNotification);
                break;
            case "2":
                Task = deleteTask(Task,ShowNotification);
                break;
            case "3":
                showAll(Task,ShowNotification);
                break

            default:
                console.log("invalid!!");
        }

    }while ( menu != "4")

}

main();









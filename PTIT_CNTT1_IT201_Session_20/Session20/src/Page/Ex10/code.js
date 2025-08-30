function randomStr(len = 5) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return Array.from({ length: len }, () =>
        chars[Math.floor(Math.random() * chars.length)]
    ).join("");
}

const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6dGZybnRweXpyemdtcm9keWVuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTEzOTEwMiwiZXhwIjoyMDcwNzE1MTAyfQ.OJO0K4fIXD0N22HfO7vJW91nVjIQWuwhwYfJpfY7xEU";

const arr = key.split("").map((ch, idx) => {
    const rand = randomStr(4);
    // Đưa ký tự thật vào đúng vị trí idx (n-1 + 1 = idx)
    const pos = idx % rand.length; // để đảm bảo không out of range
    return rand.slice(0, pos) + ch + rand.slice(pos);
});

const codesObject = { codes: arr };

console.log(JSON.stringify(codesObject, null, 2));
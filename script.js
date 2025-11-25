// --- Example 1: Jump ---
let jumpHeight = 0;
document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        jumpHeight++;
        console.log("Jump count:", jumpHeight);
    }
});

// --- Example 2: Left & Right ---
let position = 0;
document.addEventListener("keydown", (e) => {
    if (["ArrowLeft", "KeyA"].includes(e.code)) {
        position--;
        console.log("Moved Left:", position);
    }
    if (["ArrowRight", "KeyD"].includes(e.code)) {
        position++;
        console.log("Moved Right:", position);
    }
});

// --- Example 3: Click counter ---
let clickCount = 0;
document.addEventListener("click", () => {
    clickCount++;
    console.log("Click Count:", clickCount);
});

//--------------------------------------
// Example 1: JUMP
//--------------------------------------
const jumpCanvas = document.getElementById("jumpCanvas");
const jctx = jumpCanvas.getContext("2d");

let y = 110;
let velocity = 0;
let gravity = 1;
let jumping = false;

function drawJumpCharacter() {
    jctx.clearRect(0, 0, jumpCanvas.width, jumpCanvas.height);

    // Stick figure
    jctx.beginPath();
    jctx.arc(100, y - 30, 15, 0, Math.PI * 2); 
    jctx.moveTo(100, y - 15);
    jctx.lineTo(100, y + 20);
    jctx.stroke();

    velocity += gravity;
    y += velocity;

    if (y > 110) {
        y = 110;
        velocity = 0;
        jumping = false;
    }

    requestAnimationFrame(drawJumpCharacter);
}

document.addEventListener("keydown", (e) => {
    if (e.code === "Space" && !jumping) {
        velocity = -15;
        jumping = true;
    }
});
drawJumpCharacter();

//--------------------------------------
// Example 2: MOVE LEFT / RIGHT
//--------------------------------------
const moveCanvas = document.getElementById("moveCanvas");
const mctx = moveCanvas.getContext("2d");

let x = 100;

function drawMoveCharacter() {
    mctx.clearRect(0, 0, moveCanvas.width, moveCanvas.height);

    mctx.beginPath();
    mctx.arc(x, 70, 15, 0, Math.PI * 2);
    mctx.moveTo(x, 85);
    mctx.lineTo(x, 120);
    mctx.stroke();

    requestAnimationFrame(drawMoveCharacter);
}

document.addEventListener("keydown", (e) => {
    if (["ArrowLeft", "KeyA"].includes(e.code)) x -= 5;
    if (["ArrowRight", "KeyD"].includes(e.code)) x += 5;

    x = Math.max(20, Math.min(180, x)); // Keep inside canvas
});
drawMoveCharacter();

//--------------------------------------
// Example 3: CLICK COUNTER
//--------------------------------------
const clickBox = document.getElementById("clickBox");
let counter = 0;

clickBox.addEventListener("click", () => {
    counter++;
    clickBox.textContent = counter;
});

//--------------------------------------
// CONTACT FORM VALIDATION
//--------------------------------------
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const formMessage = document.getElementById("formMessage");

        if (name.length < 2) {
            formMessage.textContent = "Name must be at least 2 characters.";
            formMessage.style.color = "red";
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            formMessage.textContent = "Please enter a valid email.";
            formMessage.style.color = "red";
            return;
        }

        if (message.length < 5) {
            formMessage.textContent = "Message must be at least 5 characters.";
            formMessage.style.color = "red";
            return;
        }

        formMessage.textContent = "Form submitted successfully!";
        formMessage.style.color = "green";

        contactForm.reset();
    });
}

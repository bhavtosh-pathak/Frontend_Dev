<!DOCTYPE html>
<html>
<head>
    <title>Live Character Counter</title>
    <style>
        #counter {
            font-size: 18px;
            font-weight: bold;
            margin-top: 8px;
        }
    </style>
</head>
<body>

<h2>Live Character Counter</h2>

<textarea id="textBox" rows="5" cols="40" placeholder="Start typing..."></textarea>
<div id="counter">100 characters left</div>
<br>
<button id="resetBtn">Reset</button>

<script>
const textBox = document.getElementById("textBox");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("resetBtn");

const MAX = 100;


function updateCounter() {
    let remaining = MAX - textBox.value.length;

    counter.textContent = `${remaining} characters left`;

    if (remaining <= 0) {
        counter.style.color = "red";
    } else if (remaining <= 20) {
        counter.style.color = "orange";
    } else {
        counter.style.color = "black";
    }
}


textBox.addEventListener("keydown", (e) => {
    if (textBox.value.length >= MAX && e.key !== "Backspace" && e.key !== "Delete") {
        e.preventDefault();
    }
});

textBox.addEventListener("input", updateCounter);


resetBtn.addEventListener("click", () => {
    textBox.value = "";
    counter.textContent = `${MAX} characters left`;
    counter.style.color = "black";
});
</script>

</body>
</html>

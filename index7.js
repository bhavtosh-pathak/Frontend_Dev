<!DOCTYPE html>
<html>
<head>
    <title>Mouse Tracker</title>
    <style>
        #box {
            width: 400px;
            height: 400px;
            border: 2px solid black;
            margin-top: 20px;
            position: relative;
        }

        .dot {
            width: 8px;
            height: 8px;
            background: red;
            border-radius: 50%;
            position: absolute;
            transform: translate(-50%, -50%);
        }

        #coords {
            margin-top: 10px;
            font-size: 18px;
            font-weight: bold;
        }
    </style>
</head>
<body>

<h2>Mouse Path & Coordinate Logger</h2>

<div id="box"></div>

<div id="coords">X: 0 , Y: 0</div>

<script>
const box = document.getElementById("box");
const coords = document.getElementById("coords");

box.addEventListener("mousemove", (e) => {
    coords.textContent = `X: ${e.clientX} , Y: ${e.clientY}`;
});


box.addEventListener("dblclick", (e) => {
    const rect = box.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    let dot = document.createElement("div");
    dot.classList.add("dot");
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;

    box.appendChild(dot);
});
</script>

</body>
</html>

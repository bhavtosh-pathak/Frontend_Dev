<!DOCTYPE html>
<html>
<head>
    <title>Multi-Step Form</title>
    <style>
        .step {
            display: none;
            margin-top: 15px;
        }
        .active {
            display: block;
        }
        #summaryBox {
            background: #f2f2f2;
            padding: 15px;
            margin-top: 20px;
        }
        input {
            margin: 5px 0;
            padding: 6px;
        }
    </style>
</head>
<body>

<h2>3-Step Form</h2>


<div id="step1" class="step active">
    <h3>Step 1: Enter Name</h3>
    <input type="text" id="name" placeholder="Name">
    <br><br>
    <button id="next1">Next</button>
</div>


<div id="step2" class="step">
    <h3>Step 2: Enter Email</h3>
    <input type="text" id="email" placeholder="Email">
    <br><br>
    <button id="back1">Back</button>
    <button id="next2">Next</button>
</div>


<div id="step3" class="step">
    <h3>Step 3: Enter Password</h3>
    <input type="password" id="password" placeholder="Password (min 6 chars)">
    <br><br>
    <button id="back2">Back</button>
    <button id="finish">Finish</button>
</div>


<div id="summary" class="step">
    <h3>Form Summary</h3>
    <div id="summaryBox"></div>
</div>

<script>
let currentStep = 1;

function showStep(num) {
    document.querySelectorAll(".step").forEach(s => s.classList.remove("active"));
    document.getElementById(`step${num}`).classList.add("active");
    currentStep = num;
}


function validateName() {
    let name = document.getElementById("name").value.trim();
    return /^[A-Za-z ]+$/.test(name);
}

function validateEmail() {
    let email = document.getElementById("email").value.trim();
    return /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email);
}

function validatePassword() {
    let pass = document.getElementById("password").value;
    return pass.length >= 6;
}


document.getElementById("next1").addEventListener("click", () => {
    if (!validateName()) return alert("Enter a valid name!");
    showStep(2);
});

document.getElementById("back1").addEventListener("click", () => showStep(1));

document.getElementById("next2").addEventListener("click", () => {
    if (!validateEmail()) return alert("Enter a valid email!");
    showStep(3);
});

document.getElementById("back2").addEventListener("click", () => showStep(2));


document.getElementById("finish").addEventListener("click", () => {
    if (!validatePassword()) {
        return alert("Password must be at least 6 characters");
    }

  
    const summaryBox = document.getElementById("summaryBox");
    summaryBox.innerHTML = `
        <p><strong>Name:</strong> ${document.getElementById("name").value}</p>
        <p><strong>Email:</strong> ${document.getElementById("email").value}</p>
        <p><strong>Password:</strong> ${document.getElementById("password").value}</p>
    `;
    showStep("summary");
});
</script>

</body>
</html>

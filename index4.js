// html and css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume Builder</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }

        form {
            width: 400px;
            padding: 20px;
            border: 1px solid #888;
            border-radius: 10px;
        }

        input, textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 5px;
            border: 2px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
        }

        .error {
            color: red;
            font-size: 14px;
            margin-bottom: 10px;
        }

        .error-border {
            border-color: red !important;
        }

        .success-border {
            border-color: green !important;
        }

        #result {
            margin-top: 20px;
            padding: 15px;
            background: #f2f2f2;
            border-radius: 10px;
            white-space: pre-wrap;
            font-family: "Courier New", monospace;
            display: none;
        }
    </style>
</head>
<body>

    <h2>Resume Builder</h2>

    <form id="resumeForm">

        <label>Name:</label>
        <input type="text" id="name">

        <label>Email:</label>
        <input type="text" id="email">
        <p class="error" id="emailErr"></p>

        <label>Skills (comma separated):</label>
        <textarea id="skills"></textarea>

        <label>GitHub URL:</label>
        <input type="text" id="github">
        <p class="error" id="gitErr"></p>

        <label>LinkedIn URL:</label>
        <input type="text" id="linkedin">
        <p class="error" id="lnErr"></p>

        <button type="submit">Generate Resume</button>
    </form>

    <div id="result"></div>

    <script src="script.js"></script>

</body>
</html>
// js file
document.getElementById("resumeForm").addEventListener("submit", function (e) {
    e.preventDefault();
    validateResume();
});

function validateResume() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email");
    let skills = document.getElementById("skills").value;
    let github = document.getElementById("github");
    let linkedin = document.getElementById("linkedin");

    let emailErr = document.getElementById("emailErr");
    let gitErr = document.getElementById("gitErr");
    let lnErr = document.getElementById("lnErr");

    let valid = true;

 
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    let urlPattern = /^https:\/\//;

    
    if (!emailPattern.test(email.value)) {
        setError(email, emailErr, "Enter a valid email address");
        valid = false;
    } else {
        setSuccess(email, emailErr);
    }

    if (!urlPattern.test(github.value)) {
        setError(github, gitErr, "GitHub URL must start with https://");
        valid = false;
    } else {
        setSuccess(github, gitErr);
    }


    if (!urlPattern.test(linkedin.value)) {
        setError(linkedin, lnErr, "LinkedIn URL must start with https://");
        valid = false;
    } else {
        setSuccess(linkedin, lnErr);
    }

    
    if (valid) {
        let resume = {
            name: name,
            email: email.value,
            skills: skills.split(",").map(s => s.trim()),
            github: github.value,
            linkedin: linkedin.value
        };

        displayJSON(resume);
    }
}

function setError(input, errField, message) {
    input.classList.add("error-border");
    input.classList.remove("success-border");
    errField.textContent = message;
}

function setSuccess(input, errField) {
    input.classList.remove("error-border");
    input.classList.add("success-border");
    errField.textContent = "";
}

function displayJSON(data) {
    let resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.textContent = JSON.stringify(data, null, 4); 
}



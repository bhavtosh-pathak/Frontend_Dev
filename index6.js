let user = { 
    name: "Akash", 
    email: "akash@mail.com", 
    age: 21 
};

<!DOCTYPE html>
<html>
<head>
    <title>Edit User Object</title>
</head>
<body>

<h2>Edit User Details</h2>

<form id="userForm">
    <label>Name:</label><br>
    <input type="text" id="name" value="Akash"><br><br>

    <label>Email:</label><br>
    <input type="email" id="email" value="akash@mail.com"><br><br>

    <label>Age:</label><br>
    <input type="number" id="age" value="21"><br><br>

    <button type="submit">Update</button>
</form>

<h3>Updated User Object:</h3>
<pre id="output"></pre>

<script>
let user = { 
    name: "Akash", 
    email: "akash@mail.com", 
    age: 21 
};

const output = document.getElementById("output");
output.textContent = JSON.stringify(user, null, 2);

document.getElementById("userForm").addEventListener("submit", function(e) {
    e.preventDefault();

    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value;
    user.age = Number(document.getElementById("age").value);

    output.textContent = JSON.stringify(user, null, 2);
});
</script>

</body>
</html>

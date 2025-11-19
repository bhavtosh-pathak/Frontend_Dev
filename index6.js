<!DOCTYPE html>
<html>
<head>
    <title>Real-Time Table Filter</title>
    <style>
        table {
            width: 350px;
            border-collapse: collapse;
            margin-top: 10px;
        }
        th, td {
            border: 1px solid #333;
            padding: 8px;
            text-align: left;
        }
        #noResult {
            margin-top: 10px;
            font-weight: bold;
            color: red;
            display: none;
        }
    </style>
</head>
<body>

<h2>Student Table Filter</h2>

<input type="text" id="searchBox" placeholder="Search students...">

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Branch</th>
            <th>CGPA</th>
        </tr>
    </thead>
    <tbody id="tableBody">
        <tr><td>Akash</td><td>CSE</td><td>8.7</td></tr>
        <tr><td>Bhavya</td><td>ECE</td><td>9.1</td></tr>
        <tr><td>Kritika</td><td>IT</td><td>8.5</td></tr>
        <tr><td>Dev</td><td>ME</td><td>7.9</td></tr>
        <tr><td>Rohit</td><td>CSE</td><td>8.2</td></tr>
    </tbody>
</table>

<div id="noResult">No results found</div>

<script>
const searchBox = document.getElementById("searchBox");
const rows = document.querySelectorAll("#tableBody tr");
const noResult = document.getElementById("noResult");

searchBox.addEventListener("input", () => {
    let query = searchBox.value.toLowerCase();
    let found = false;

    rows.forEach(row => {
        let rowText = row.textContent.toLowerCase();

        if (rowText.includes(query)) {
            row.style.display = "";
            found = true;
        } else {
            row.style.display = "none";
        }
    });

    noResult.style.display = found ? "none" : "block";
});
</script>

</body>
</html>

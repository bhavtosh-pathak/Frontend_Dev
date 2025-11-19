<!DOCTYPE html>
<html>
<head>
    <title>Product List Manager</title>
    <style>
        ul { padding: 0; }
        li { 
            list-style: none; 
            padding: 8px; 
            background: #f2f2f2; 
            margin: 5px 0; 
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .edit-input {
            width: 60%;
        }
    </style>
</head>
<body>

<h2>Product List Manager</h2>

<input type="text" id="productInput" placeholder="Enter product name">
<button id="addBtn">Add Product</button>

<ul id="productList"></ul>

<script>
const productInput = document.getElementById("productInput");
const productList = document.getElementById("productList");
let currentlyEditing = null;


document.getElementById("addBtn").addEventListener("click", () => {
    const name = productInput.value.trim();
    if (!name) return alert("Enter a product name!");
    
    const li = document.createElement("li");
    li.innerHTML = `
        <span class="product-name">${name}</span>
        <div>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    `;
    productList.appendChild(li);
    productInput.value = "";
});


productList.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;

  
    if (e.target.classList.contains("delete")) {
        li.remove();
    }

   
    if (e.target.classList.contains("edit")) {
        startEditing(li);
    }
});


function startEditing(li) {
    if (currentlyEditing) saveEdit(currentlyEditing);

    currentlyEditing = li;
    const nameSpan = li.querySelector(".product-name");
    const currentText = nameSpan.textContent;

    li.innerHTML = `
        <input type="text" class="edit-input" value="${currentText}">
        <button class="save">Save</button>
    `;
}


function saveEdit(li) {
    const input = li.querySelector(".edit-input");
    if (!input) return;

    const updatedName = input.value.trim();
    li.innerHTML = `
        <span class="product-name">${updatedName}</span>
        <div>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    `;
    currentlyEditing = null;
}

document.addEventListener("click", (e) => {
    if (!currentlyEditing) return;

    const isInside = currentlyEditing.contains(e.target);

    if (!isInside) {
        saveEdit(currentlyEditing);
    }
});
</script>

</body>
</html>

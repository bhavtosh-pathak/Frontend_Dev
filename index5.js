<!DOCTYPE html>
<html>
<head>
    <title>Image Gallery with Modal</title>
    <style>
        .gallery {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            width: 300px;
        }

        .gallery img {
            width: 100%;
            cursor: pointer;
            border-radius: 6px;
        }

        
        #modal {
            display: none;
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: rgba(0,0,0,0.8);
            justify-content: center;
            align-items: center;
        }

        #modalContent {
            background: #fff;
            padding: 10px;
            border-radius: 8px;
        }

        #modalContent img {
            width: 400px;
            border-radius: 6px;
        }
    </style>
</head>
<body>

<h2>Image Gallery</h2>

<div class="gallery">
    <img src="https://picsum.photos/id/1010/200" alt="">
    <img src="https://picsum.photos/id/1011/200" alt="">
    <img src="https://picsum.photos/id/1012/200" alt="">
    <img src="https://picsum.photos/id/1013/200" alt="">
    <img src="https://picsum.photos/id/1014/200" alt="">
    <img src="https://picsum.photos/id/1015/200" alt="">
</div>


<div id="modal">
    <div id="modalContent">
        <img id="modalImg" src="" alt="">
    </div>
</div>

<script>
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalContent = document.getElementById("modalContent");


document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src.replace("/200", "/600"); 
    });
});


modal.addEventListener("click", () => {
    modal.style.display = "none";
});


modalContent.addEventListener("click", (e) => {
    e.stopPropagation();
});
</script>

</body>
</html>

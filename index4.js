<!DOCTYPE html>
<html>
<head>
    <title>Theme Switcher</title>
    <style>
        body[data-theme="light"] {
            background: #ffffff;
            color: #000;
        }
        body[data-theme="dark"] {
            background: #121212;
            color: #fff;
        }
        body[data-theme="blue"] {
            background: #001f3f;
            color: #fff;
        }

        button {
            padding: 8px 14px;
            margin: 10px 5px;
            cursor: pointer;
        }
    </style>
</head>
<body data-theme="light">

<h2>Theme Switcher</h2>

<button onclick="changeTheme('light')">Light Theme</button>
<button onclick="changeTheme('dark')">Dark Theme</button>
<button onclick="changeTheme('blue')">Blue Theme</button>

<script>
function changeTheme(themeName) {
  
    document.body.setAttribute("data-theme", themeName);


    document.body.setAttribute("class", themeName);
}
</script>

</body>
</html>

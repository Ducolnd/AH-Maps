<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/style.css'); ?>">
    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Heebo:400,700&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <title><?= esc($title)?></title>
</head>
<body onresize="resizeDiv();" onload="setup(); resizeDiv();">
    <div class="container">
        <div class="topBox">
            <button id="prev" onclick="prev()">Vorig <br><span class="smaller">product</span></button>
            <h1 id="product"></h1>
            <button id="next" onclick="next()">Volgend <br><span class="smaller">product</span></button>
        </div>

        <div id="middleBox">
            <div id="plane">
            </div>
        </div>

        <div id="heightItem" class="bottomBox">
            <div class="textBox">
                <h1 id="bonus"></h1>
                <h1>Product naam:</h1>
                <p id="productName"></p>
                <h1>Locatie product</h1>
                <p id="productLocation"></p>
                <h1>Beschrijving</h1>
                <p id="productDescription"></p>
            </div>
            <div class="rightImg">
                <img id="productImage" alt="wasa">
                <img id="shelfImage" src="../static/schap.jpg" alt="wasa">
            </div>
        </div>
    </div>

    <div class="bottomNav">
        <div class="centered">
            <img src="<?php echo base_url('assets/img/logo.svg')?>" alt="logo">
            <a href="home.html">Home</a>
            <a href="#" class="active">Kaart</a>
            <a href="boodschappenlijst.html">Boodschappenlijst</a>
        </div>
    </div>

    <script src="<?php echo base_url('assets/js/main.js'); ?>"></script>
    <script src="<?php echo base_url('assets/js/plane.js'); ?>"></script>
</body>
</html>
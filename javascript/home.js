function displayInfo(index) {
    var monsterDiv = document.getElementsByClassName("monster-info")[index];
    var monsterImage = monsterDiv.getElementsByClassName("monster-img")[0];
    var monsterInfo = monsterDiv.getElementsByClassName("monster-text")[0];
    monsterImage.style.opacity = "0.2";
    monsterInfo.style.visibility = "visible";
}

function displayImage(index) {
    var monsterDiv = document.getElementsByClassName("monster-info")[index];
    var monsterImage = monsterDiv.getElementsByClassName("monster-img")[0];
    var monsterInfo = monsterDiv.getElementsByClassName("monster-text")[0];
    monsterImage.style.opacity = "1";
    monsterInfo.style.visibility = "hidden";
}
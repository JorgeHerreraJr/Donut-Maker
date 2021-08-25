

let donuts = 0;
let multipliers = 0;
let autoClickers = 0;
let valueOfClick = 1;
let valueEverySecond = 0;
let costOfMultiplier = 10;
let costOfAutoClicker = 100;
let modal = document.getElementById("myModal");
let btn = document.getElementById("modal-open");
let span = document.getElementsByClassName("modal-close")[0];
let resetGame = document.getElementById("reset");

document.getElementById("clickcost").innerText = Math.floor(costOfMultiplier);
document.getElementById("secondcost").innerText = Math.floor(costOfAutoClicker);

document.getElementById("background-audio").volume = 0.4;

//Modal
btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

resetGame.onclick = function () {
    location.reload();
}

//Adds One Per Click
function add() {
    donuts += valueOfClick;
    document.getElementById("donuts").innerText = (donuts).toFixed(1);

}

function upgradePerClick() {
    if (donuts < costOfMultiplier) {
        return;
    } else {
        valueOfClick += 0;
        donuts -= costOfMultiplier;
        multipliers++
        costOfMultiplier *= 1.1;
        valueOfClick = valueOfClick * 1.2;
        document.getElementById("donuts").innerText = (donuts).toFixed(1);
        document.getElementById("multipliers").innerText = Math.round(multipliers);
        document.getElementById("clickcost").innerText = Math.round(costOfMultiplier);
    }
}

//Purchases The Auto Clicker
document.querySelector('.buttons__donutClicker').addEventListener('click', () => {
    if (donuts < costOfAutoClicker) {
        return;
    } else {
        donuts -= costOfAutoClicker;
        autoClickers++
        costOfAutoClicker *= 1.1;
        
        document.getElementById("donuts").innerText = (donuts).toFixed(1);
        document.getElementById("secondcost").innerText = Math.round(costOfAutoClicker);
        document.getElementById("auto-clickers").innerText = Math.round(autoClickers);

    }

    setInterval(function () {
        donuts += valueEverySecond;
        donuts += valueOfClick
        document.getElementById("donuts").innerText = (donuts).toFixed(1);
    }, 1000);

})




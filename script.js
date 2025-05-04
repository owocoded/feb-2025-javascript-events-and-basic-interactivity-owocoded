document.getElementById("btn").addEventListener("click", function () {
    this.textContent = "Clicked!";
    this.classList.toggle("animated");
});

document.getElementById("btn").addEventListener("dblclick", function () {
    alert("Thank you PLP for this scholarship");
});

document.getElementById("btn").addEventListener("mouseover", function () {
    this.style.background = "red";
});

document.getElementById("btn").addEventListener("mouseout", function () {
    this.style.background = "steelblue";
});

document.addEventListener("keypress", function (e) {
    alert("Key pressed: " + e.key);
});

function showTab(tabId) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}

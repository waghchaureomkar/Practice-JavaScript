const crsr = document.querySelector("#cursor");
document.addEventListener("mousemove", (e) => {
    console.log("ee", e.x);
    crsr.style.left = e.x - 15 + "px";
    crsr.style.top = e.y - 15 + "px";
});

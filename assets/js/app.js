// for navbar

let menuicon = document.querySelector(".menuicon");
let lg_view = document.querySelector(".lg_view");
let body = document.body;
let first_line = document.querySelector(".first_line")
let second_line = document.querySelector(".second_line")
let third_line = document.querySelector(".third_line")
let nav_link = document.querySelectorAll(".nav_link");

// we are going to use this function to make cross whenever the navmenu is clicked

function cross() {
    second_line.style.display = "none";
    first_line.style.transform = "rotate(45deg)";
    first_line.style.top = "13px";
    first_line.style.left = "2px";
    first_line.classList.add("position-relative");
    third_line.style.transform = "rotate(-45deg)";
    third_line.style.top = "-12px";
    third_line.classList.add("position-relative");
}

// we are going to use this function to remove the cross again when the menuicon is clicked

function remove_cross() {
    second_line.style.display = "block";
    first_line.style.transform = "rotate(0deg)";
    first_line.classList.remove("position-relative");
    third_line.style.transform = "rotate(0deg)";
    third_line.classList.remove("position-relative");
}

menuicon.addEventListener("click", () => {
    lg_view.classList.toggle("show");
    nav_link.forEach(other => {
        other.addEventListener("click", () => {
            lg_view.classList.remove("show");
            body.style.overflow = "auto";
            remove_cross();
        });
    });
    if (lg_view.classList.contains("show")) {
        body.style.overflow = "hidden";
        cross();
    } else {
        body.style.overflow = "auto";
        remove_cross();
    }
});
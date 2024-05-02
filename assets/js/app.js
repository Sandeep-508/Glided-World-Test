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


// accoridon

let accordion_item = document.querySelectorAll(".accoridon_items");
let accordion_item_1 = document.querySelector(".accoridon_items");
let svg_icon = document.querySelector(".svg_icon");
let disp_text = document.querySelector(".disp_text");
disp_text.style.display = "flex";
svg_icon.style.transform = "rotate(180deg)";
accordion_item_1.classList.add("brdr_thick");

accordion_item.forEach(otherElement => {
    let svg_icon = otherElement.querySelector(".svg_icon");
    let disp_text = otherElement.querySelector(".disp_text");
    let fw_change = otherElement.querySelector(".active_change");
    let clickBtn = otherElement.querySelector(".click_btn");
    clickBtn.addEventListener("click", () => {
        accordion_item.forEach(itm => {
            if (itm !== otherElement) {
                itm.classList.remove("brdr_thick");
                fw_change.classList.remove("fw-medium");
                let svg_icon = itm.querySelector(".svg_icon");
                let disp_text = itm.querySelector(".disp_text");
                disp_text.style.display = "none";
                svg_icon.style.transform = "rotate(0deg)";

            }
        });
        let text_prop = window.getComputedStyle(disp_text).display;
        if (text_prop === "none") {
            otherElement.classList.add("brdr_thick");
            fw_change.classList.add("fw-medium");
            disp_text.style.display = "flex";
            svg_icon.style.transform = "rotate(180deg)";
        } else {
            otherElement.classList.remove("brdr_thick");
            fw_change.classList.remove("fw-medium");
            disp_text.style.display = "none";
            svg_icon.style.transform = "rotate(0deg)";
        }
    });

});


// progress

window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

// scroll to top

let scroll_btn = document.querySelector(".scroll_top");
let scroll_pt = 200;

scroll_btn.classList.add("d-none");
window.addEventListener("scroll", () => {
    if (window.scrollY > scroll_pt) {
        scroll_btn.classList.remove("d-none");
    } else {
        scroll_btn.classList.add("d-none");
    }
    scroll_btn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});


// AOS Animation

AOS.init({
    once: true,
    duration: 1200,
});


// preloader

let preloader = document.querySelector(".loading_screen");
body.style.overflow = "hidden";
setTimeout(() => {
    body.style.overflow = "auto";
    preloader.classList.add("-top_105");
}, 3000);
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
const value = document.querySelectorAll(".value");
const dvalue = document.querySelectorAll(".dvalue");
const body = document.querySelector("body");
const header = document.querySelector("header");
const toggler = document.getElementById("toggle-button");
const ball = document.getElementById("ball")
const cards = document.querySelectorAll(".card")

function toggle () {
    //test for present theme
    if (!h3.classList.contains("dark")) {
        // h2 and h3 changes white
        h2.classList.add("dark");
        h3.classList.add("dark");

        // .value and .dvalue changes white
        Array.from(value).forEach(i => {
            i.classList.add("dark");
        });
        Array.from(dvalue).forEach(element => {
            element.classList.add("dark")            
        });

        // toggle botton changes dark
        toggler.classList.add("dark");

        // body background changes dark
        body.classList.add("dark");

        // header background changes darker
        header.classList.add("dark");

        // cards background changes darkest
        Array.from(cards).forEach(i => i.classList.add("dark"));

        // change ball to dark theme
        ball.classList.add("dark");

    } else {
        // h2 and h3 returns light theme
        h2.classList.remove("dark");
        h3.classList.remove("dark");

        // .value and .dvalue returns light theme
        Array.from(value).forEach(i => {
            i.classList.remove("dark");
        });
        Array.from(dvalue).forEach(element => {
            element.classList.remove("dark")            
        });

        // toggle botton returns light theme
        toggler.classList.remove("dark");

        // body background returns light theme
        body.classList.remove("dark");

        // header background returns light theme
        header.classList.remove("dark");

        // cards background returns light theme
        Array.from(cards).forEach(i => i.classList.remove("dark"));

        // change ball returns light theme
        ball.classList.remove("dark");
    }


}


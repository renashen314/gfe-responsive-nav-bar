// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.

const hamburger = document.querySelector("#menu-btn")
const mobileMenu = document.querySelector("#mobile-menu")
const shoppingBag = document.querySelector("#shopping-bag")
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');

hamburger.addEventListener("click", () => {
    if(mobileMenu.classList.contains("hidden")){
        mobileMenu.classList.remove("hidden")
        mobileMenu.classList.add("slide-in-right")
        mobileMenu.classList.remove("slide-out-right")
    } else {
        mobileMenu.classList.remove("slide-in-right")
        mobileMenu.classList.add("slide-out-right")
        setTimeout(()=> {
            mobileMenu.classList.add("hidden")
        }, 500)
    }
    shoppingBag.classList.toggle("hidden")
    // Toggle transformation to create "X" shape
    bar1.classList.toggle('top-bar-rotate');
    // bar1.classList.toggle('translate-y-2');
    bar2.classList.toggle('opacity-0');
    bar3.classList.toggle('bottom-bar-rotate');
    // bar3.classList.toggle('-translate-y-2');
})
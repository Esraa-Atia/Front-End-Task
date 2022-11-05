/**** header menu ****/ 
function headerMenue(){
    const menu = document.querySelector(".js-header-menu");
    const backdrop = document.querySelector(".js-header-backdrop");
    menuCollapseBreakpoint = 991;

    function toggleMenu(){
        menu.classList.toggle("open");
        backdrop.classList.toggle("active");
        document.body.classList.toggle("overflow-hidden");
    }

    //close the menu by clicking outside of it
    backdrop.addEventListener("click", toggleMenu);

    document.querySelectorAll(".js-header-menu-toggle").forEach((item) => {
        item.addEventListener("click", toggleMenu);
    })

    function collapse(){
        menu.querySelector(".active .js-sub-menu").removeAttribute("style");
        menu.querySelector(".active").classList.remove("active");
    }

    menu.addEventListener("click", (event) => {
        const { target } = event;

        if(target.classList.contains("js-toggle-sub-menu") &&  window.innerWidth <= menuCollapseBreakpoint) {
            //prevent default anchor click behavior
            event.preventDefault();

            // if mennu item already expanded, collapse it and exit
            if(target.parentElement.classList.contains("active")){
                collapse();
                return;
            }

            //collaps the other expanded menu-item if exists
            if(menu.querySelector(".active")){
                collapse();
            };

            // expand new menu-item
            target.parentElement.classList.add("active");
            target.nextElementSibling.style.maxHeight = 
            target.nextElementSibling.scrollHeight + "px";
        }
    })
}
headerMenue();


/**** Suites ******/
const suitesContainer = [...document.querySelectorAll('.suites-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

suitesContainer.forEach((item, i), () => {
    let containerDim = item.getBoundingClientRect();
    let containerWidth = containerDim.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollRight += containerWidth;
    });
})
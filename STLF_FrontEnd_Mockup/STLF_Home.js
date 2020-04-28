
function add(width) {
    if (width <= 1440 && !document.querySelector('.my-responsive-menu')) {
        let mynav = document.querySelector('.main-content-navbar');
        let myhtml = `<div class="my-responsive-menu">
                    <a>Total</a>
                    <a>EZ</a>
                    <a>CZ</a>
                    <a>WZ</a>
                    <a>Railways</a>
                        </div>`;
        mynav.insertAdjacentHTML('beforeend', myhtml);
    }
    else if (window.innerWidth > 1440) {
        let mynav = document.querySelector('.my-responsive-menu');
        mynav.remove();
    }
}
window.addEventListener('resize', () => {
    if (window.innerWidth <= 1440 && !document.querySelector('.my-responsive-menu')) {
        let mynav = document.querySelector('.main-content-navbar');
        let myhtml = `<div class="my-responsive-menu">
                    <a>Total</a>
                    <a>EZ</a>
                    <a>CZ</a>
                    <a>WZ</a>
                    <a>Railways</a>
                        </div>`;
        mynav.insertAdjacentHTML('beforeend', myhtml);
    }
    else if (window.innerWidth > 1440) {
        let mynav = document.querySelector('.my-responsive-menu');
        mynav.remove();
    }
})




$(document).ready(function () {
    const width = window.innerWidth;
    add(width);
});

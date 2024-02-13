// Get the div element
const divElement = document.getElementsByClassName('customScroll')[0];

const scrollbarElement = document.createElement('div');
scrollbarElement.classList.add('customScrollBar');

divElement.appendChild(scrollbarElement);
divElement.addEventListener('scroll', updateScrollbar);
window.addEventListener('resize', updateScrollbar);

var fadeTimer = setTimeout(() => {
    scrollbarElement.style.width = '3px';
}, 3500);

function updateScrollbar() {

    const scrollbarHeight = (divElement.clientHeight / divElement.scrollHeight) * (divElement.clientHeight / window.innerHeight) * 100;
    const scrollPercentage = (divElement.scrollTop / divElement.scrollHeight) * (divElement.clientHeight / window.innerHeight) * 100;

    scrollbarElement.style.top = `${scrollPercentage}%`;
    scrollbarElement.style.height = `${scrollbarHeight}%`;

    if (scrollbarHeight >= (divElement.clientHeight / window.innerHeight) * 100) {
        // scrollbarElement.style.display = 'none';
        scrollbarElement.style.width = '0px';
        scrollbarElement.style.height = '0px';
        scrollbarElement.style.background = 'transparent';
    }
    else {
        fadeTimer = setTimeout(() => {
            scrollbarElement.style.width = '3px';
        }, 3500);
        // scrollbarElement.style.display = 'block';
        scrollbarElement.style.width = '10px';
        scrollbarElement.style.background = '#9e9e9e';
    }

}
// Create a custom scrollbar element

// Function to update the scrollbar position and size

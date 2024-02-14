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

    //const scrollbarHeight = (divElement.clientHeight / divElement.scrollHeight) * (divElement.clientHeight / window.innerHeight) * 100;
    const scrollPercentage = (divElement.scrollTop / (divElement.scrollHeight - divElement.clientHeight)) * (divElement.clientHeight / window.innerHeight) * 87;//(divElement.scrollTop / divElement.scrollHeight) * (divElement.clientHeight / window.innerHeight) * 100;

    scrollbarElement.style.top = `${scrollPercentage + 1}%`;
    scrollbarElement.style.height = `10%`;//`${scrollbarHeight}%`;

    if (divElement.clientHeight >= divElement.scrollHeight) {
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

scrollbarElement.addEventListener('mouseover', (e) => {
    clearTimeout(fadeTimer);
    scrollbarElement.style.width = '10px';
});

scrollbarElement.addEventListener('mouseout', (e) => {
    fadeTimer = setTimeout(() => {
        scrollbarElement.style.width = '3px';
    }, 3500);
});

// scrollbarElement.addEventListener('ondrag', (e) => {
//     e.preventDefault();
//     const scrollPercentage = (e.clientY / window.innerHeight) * 100;
//     divElement.scrollTop = (divElement.clientHeight / e.clientY) * divElement.scrollHeight;
//     updateScrollbar();
// });

scrollbarElement.addEventListener('mousedown', function (e) {
    // set mouse state to true 
    mousedown = true;
    // subtract offset 
    // x = div.offsetLeft - e.clientX;
    // y = div.offsetTop - e.clientY;
    e.preventDefault(); // prevent browser's default drag behavior 
}, true);

// div event mouseup 
document.addEventListener('mouseup', function (e) { // Notice the change here 
    // set mouse state to false 
    mousedown = false;
}, true);

// element mousemove to stop 
document.addEventListener('mousemove', function (e) {
    // Is mouse pressed? 
    if (mousedown) {
        e.preventDefault();
        const scrollPercentage = e.clientY / (0.87 * divElement.clientHeight);
        divElement.scrollTop = scrollPercentage * (divElement.scrollHeight - divElement.clientHeight);// * (divElement.clientHeight / window.innerHeight);
        // divElement.scrollTop = (divElement.clientHeight / e.clientY) * divElement.scrollHeight;

    }
}, true)

// Create a custom scrollbar element

// Function to update the scrollbar position and size

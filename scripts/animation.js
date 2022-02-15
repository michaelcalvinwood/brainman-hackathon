//assign hover events to all photos
let currentHover = null;
let photos = document.querySelectorAll(".genres__title-container");

for (let i = 0; i < photos.length; ++i) {
    photos[i].addEventListener('mouseover', slideIt);
}

// assign mouseout to gallery so that all images return to original position when the mouse is moved outside the gallery area
photos = document.querySelector(".genres__cards");
photos.addEventListener("mouseleave", returnIt);

/*
 * slide the hovered image
*/
function slideIt (e) {
    let target = e.target;
    // return previous image back to original position
    if (target.classList.contains('genres__title')) {
        target = target.parentElement;
    }
    if (target.classList.contains('genres__image')) {
        target = target.parentElement;
    }

    if (currentHover === target) return;

    console.log ('slideIt', currentHover, target);

    if (currentHover !== null) {
        currentHover.classList.remove('genres__title-container--slide');
    }

    // slide the current photo into position
    target.classList.add('genres__title-container--slide');
    currentHover = target;
    
    e.stopPropagation();
    return false;
}

/*
 * Return any currently slid photo back into place.
*/
function returnIt () {
    if (currentHover !== null) currentHover.classList.remove('genres__title-container--slide');
    currentHover = null;
}
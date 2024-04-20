const reveal = document.querySelector('.reveal');

function isVicible(elem) {
    const { top, bottom } = elem.getBoundingClientRect();

    if (bottom < 0) {
        return false;
    }

    if (top > window.innerHeight) {
        return false;
    }

    return true;
}

setInterval(() => {
    console.log(isVicible(reveal));
    if (isVicible(reveal) === true) {
        reveal.classList.add('reveal_active');
    }
    
    if (isVicible(reveal) === false) {
        reveal.classList.remove('reveal_active');
    }
    
}, 1000)



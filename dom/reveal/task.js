const reveals = Array.from(document.getElementsByClassName('reveal'));

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

document.addEventListener('scroll', () => {
    reveals.forEach((elem) => {
        if (isVicible(elem) === true) {
            elem.classList.add('reveal_active');
        }
        
        if (isVicible(elem) === false) {
            elem.classList.remove('reveal_active');
        }
    })
})

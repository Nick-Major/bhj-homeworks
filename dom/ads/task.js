const rotators = Array.from(document.getElementsByClassName('rotator__case'));

function isActive(element) {
    const hasActive = element.classList.contains('rotator__case_active');

    return hasActive;
}

function changeClass(arr) {
    let foundValue = arr.find(isActive);
    let foundValueIndex = arr.indexOf(foundValue);
    const arraysLength = arr.length;
    if (arraysLength - 1 === foundValueIndex) {
        foundValue.classList.remove('rotator__case_active');
        arr[0].classList.add('rotator__case_active');
    } else {
        foundValue.classList.remove('rotator__case_active');
        arr[foundValueIndex + 1].classList.add('rotator__case_active');
    }
}


setInterval(() => {
    changeClass(rotators);
}, 1000)
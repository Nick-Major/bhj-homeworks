const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContent = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach((elem, i) => {
    elem.addEventListener('click', () => {
        elem.classList.add('tab_active');
        let isActive = i;
        for (let i = 0; i < tabs.length; i++) {
            if (i !== isActive) {
                tabs[i].classList.remove('tab_active');
            }
        }
    })
})

tabs.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        let elemIndex = index;
        tabsContent.forEach((elem, i) => {
            if (elemIndex === i) {
                elem.classList.add('tab__content_active');
            } else {
                elem.classList.remove('tab__content_active');
            }
        })
    })
})

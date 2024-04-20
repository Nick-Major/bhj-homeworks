const readingMode = Array.from(document.getElementsByClassName('font-size'));
const book = document.getElementById('book');

readingMode.forEach((elem) => {
    elem.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;

        if (target.classList.contains('font-size_active')) {
            return;
        }

        let hasClass = document.querySelector('.font-size_active');
        let small = document.querySelector('.book_fs-small');
        let big = document.querySelector('.book_fs-big');

        hasClass.classList.remove('font-size_active');
        
        target.classList.add('font-size_active');

        if (elem.classList.contains('font-size_small')) {
            book.classList.add('book_fs-small');
            big.classList.remove('book_fs-big');
        } else if (elem.classList.contains('font-size_big')) {
            book.classList.add('book_fs-big');
            small.classList.remove('book_fs-small');
        } else if (!elem.classList.contains('font-size_small') && !elem.classList.contains('font-size_big')) {
            book.classList.remove('book_fs-big');
            book.classList.remove('book_fs-small');
        }

    })
})
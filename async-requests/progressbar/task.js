const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
    
        }
    })

    xhr.upload.addEventListener('progress', progressHandler, false);

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    const formData = new FormData(form);

    xhr.send(formData);

})

function progressHandler(event) {
    const percentLoaded = Math.round((event.loaded / event.total) * 100)
    progress.value = percentLoaded;
}

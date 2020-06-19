document.querySelector('.js-btn').addEventListener('click', function() {
    console.log('PRESSED');
    const heading = document.querySelector('#my-id');

    if (heading) {
        heading.innerHTML += ' Joyce';
    }
});
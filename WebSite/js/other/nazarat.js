document.querySelector('.bt').addEventListener('click', function(event) {
    event.preventDefault();
    var message = document.getElementById('message');
    message.innerText = 'نظر شما ثبت شد!';
    message.classList.add('show');
    setTimeout(function() {
        message.classList.remove('show');
    }, 3000); // پیام بعد از 3 ثانیه مخفی می‌شود
});
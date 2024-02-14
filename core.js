
// function hideLink() {
//     // Получаем ссылку по идентификатору
//     var link = document.getElementById('mark');

//     // Скрываем ссылку
//     link.style.display = 'none';
// }

// document.addEventListener("DOMContentLoaded", function() {
//     var links = document.querySelectorAll('.mark');
//     links.forEach(function(link) {
//         link.addEventListener('click', function(event) {
//             event.preventDefault(); // Предотвращаем переход по ссылке
//             var currentLink = this;
//             setTimeout(function() {
//                 currentLink.style.display = 'none'; // Скрываем ссылку после задержки
//                 window.location.href = currentLink.getAttribute('href'); // Переходим по ссылке
//             }, 500); // Задержка в миллисекундах (в данном случае 500 мс)
//         });
//     });
// });
document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('.mark');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Предотвращаем переход по ссылке
            var currentLink = this;
            currentLink.classList.add('clicked'); // Добавляем класс для синей рамки
            setTimeout(function() {
                currentLink.style.display = 'none'; // Скрываем ссылку после задержки
                window.location.href = currentLink.getAttribute('href'); // Переходим по ссылке
            }, 500); // Задержка в миллисекундах (в данном случае 500 мс)
        });
    });
});

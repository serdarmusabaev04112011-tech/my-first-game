// 1. Находим нашу кнопку на странице по её классу
const button = document.querySelector('.crazy-button');

// 2. Слушаем момент, когда мышка наводится на кнопку (mouseover)
button.addEventListener('mouseover', function() {
    
    // 3. Считаем случайные координаты внутри экрана компьютера
    // Math.random() выдает случайное число, а window.innerWidth — это ширина экрана
    const randomX = Math.random() * (window.innerWidth - button.clientWidth);
    const randomY = Math.random() * (window.innerHeight - button.clientHeight);
    
    // 4. Мгновенно перемещаем кнопку на эти новые случайные координаты
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
});
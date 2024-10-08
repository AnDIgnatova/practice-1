document.addEventListener("DOMContentLoaded", function () {
    var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    console.log(scrollbar);
    document.querySelector('[href="#openModal"]').addEventListener('click', function () {
      document.body.style.overflow = 'hidden';
      document.querySelector('#openModal').style.marginLeft = scrollbar;
    });
    document.querySelector('[href="#close"]').addEventListener('click', function () {
      document.body.style.overflow = 'visible';
      document.querySelector('#openModal').style.marginLeft = '0px';
    });
  });



  function displayImage(inputElement) {
    const file = inputElement.files[0];
    const imageURL = URL.createObjectURL(file);
    document.getElementById('preview').src = imageURL;
    inputElement.value = null;
    document.getElementById('preview').onload = () => URL.revokeObjectURL(imageURL);
}

let control = document.querySelector("#preview"),
    clearBn = document.querySelector("#clear");

// Событие по клику на кнопку
clearBn.addEventListener("click", function(){
   control.value = '';
   let newControl = control.cloneNode( true )
   control.replaceWith( newControl );
   control = newControl;
});




document.getElementById('myForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const choise = document.getElementById('phone').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Очистка предыдущего сообщения об ошибке
    errorMessage.textContent = '';

    // Проверка валидности полей
    if (!name || !email || !phone) {
        event.preventDefault(); // Отменяем отправку формы
        errorMessage.textContent = 'Пожалуйста, заполните все поля.';
    }

    // Дополнительная проверка на валидность email (можно использовать встроенную валидацию)
    if (email && !validateEmail(email)) {
        event.preventDefault(); // Отменяем отправку формы
        errorMessage.textContent = 'Пожалуйста, введите корректный адрес электронной почты.';
    }
});

// Функция для проверки валидности email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}



document.getElementById('myForm').addEventListener('submit', function(event) {
    const chose = document.getElementById('chose').value;
    const errorMessage = document.getElementById('error-message');

    // Очистка предыдущего сообщения об ошибке
    errorMessage.textContent = '';

    // Проверка валидности выбранного значения
    if (!chose) {
        event.preventDefault(); // Отменяем отправку формы
        errorMessage.textContent = 'Пожалуйста, выберите тему.';
    }
});
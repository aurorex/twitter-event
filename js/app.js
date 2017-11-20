window.addEventListener('load', function() {
  var textarea = document.getElementById('textarea');
  var button = document.getElementById('button');
  // evento que condiciona la ejecucion del button
  textarea.addEventListener('keydown', activeButton);

  function activeButton(event) {
    button.classList.add('button');
    button.classList.add('color');
    // restringimos para textos vacios
    var valor = textarea.value;
    var result = valor.split(' ');
    var flag = false;

    for (var i = 0;i < result.length; i++) {
      if (result[i] !== '')
        flag = true;
    }
    if (!flag) {
      button.classList.remove('color');
      button.classList.remove('button');
      button.removeEventListener('click', saveMessage);
    } else {
      button.addEventListener('click', saveMessage);
    }
  };

  // evento para la cantidad de caracteres
  textarea.addEventListener('keydown', countCaracters);
  var row = 2;// variable inicializada con 2 filas

  function countCaracters(event) {
    // modificando el numero de filas cuando se ejcute el evento
    if (event.which !== 8 && textarea.value.length % 60 === 0) {
      row++;
      textarea.setAttribute('rows', row);
    }
    if (event.which === 8 && textarea.value.length % 60 === 0) {
      row--;
      textarea.setAttribute('rows', row);
    }
    // validando la cantidad de caracteres
    var count = document.getElementById('count');
    count.innerHTML = 140 - textarea.value.length;
    if (event.which === 8) {
      count.innerHTML = 140 - textarea.value.length;
    }
    if (textarea.value.length > 120) {
      count.classList.add('color-yellow');
    } else {
      count.classList.remove('color-yellow');
    }
    if (textarea.value.length > 130) {
      count.classList.add('color-green');
    } else {
      count.classList.remove('color-green');
    }
    if (textarea.value.length > 140) {
      count.innerHTML = - textarea.value.length + 140;
      count.classList.add('color-red');
      button.classList.remove('color');
      button.classList.remove('button');
      button.removeEventListener('click', saveMessage);
      textarea.removeEventListener('keydown', activeButton);
    } else {
      count.classList.remove('color-red');
      textarea.addEventListener('keydown', activeButton);
    }
  };
  // evento para guardar el texto
  button.addEventListener('click', saveMessage);

  function saveMessage(event) {
    // condicionando el evento
    if (textarea.value.length === 0) {
      button.classList.remove('color');
      button.classList.remove('button');
    } else {
      var pharraphe = document.createElement('p');
      var tweets = document.getElementById('tweets');
      pharraphe.innerHTML = textarea.value;
      pharraphe.classList.add('pharraphe');
      // agregando fecha y hora exacta para guardar el mensaje
      var date = new Date();
      var hour = date.getHours();
      var min = date.getMinutes();
      if (min >= 0 && min < 10) {
        min = '0' + min;
      }
      var containerDate = document.createElement('p');
      var meridiem = '';
      if (hour >= 0 && hour < 12) {
        meridiem = 'AM';
      } else {
        meridiem = 'PM';
      }
      var time = document.createTextNode(hour + ':' + min + ' ' + meridiem);
      containerDate.appendChild(time);
      pharraphe.appendChild(containerDate);
      tweets.appendChild(pharraphe);
      // reinicializamos el evento
      textarea.value = '';
      textarea.setAttribute('rows', 2);
      row = 2;
      button.classList.remove('color');
      button.classList.remove('button');
    }
  };
});

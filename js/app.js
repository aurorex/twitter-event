window.addEventListener('load', function() {
  var textarea = document.getElementById('textarea');
  var button = document.getElementById('button');
// evento para validar la entrada del texto
  textarea.addEventListener('keydown', activeButton);
  function activeButton(event) {
    button.classList.add('button');
    button.classList.add('color');
    // lastelement=== 8,ejecute de todos modos
    if (event.which === 8 || event.which === 32) {
      button.classList.remove('color');
      button.classList.remove('button');
      button.removeEventListener('click', saveMessage);
    } else {
      button.addEventListener('click', saveMessage);
    };
  };
// evento para validar la cantidad de caracteres
  textarea.addEventListener('keydown', countCaracters);
  function countCaracters(event) {
    var count = document.getElementById('count');
    count.innerHTML = 140 - textarea.value.length;
    if (event.which === 8) {
      count.innerHTML = 140 - textarea.value.length;
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
      //button.classList.add('color');
      button.addEventListener('click', saveMessage);
      textarea.addEventListener('keydown', activeButton);
    }
  };

// evento para guardar el texto
  button.addEventListener('click', saveMessage);

  function saveMessage(event) {
    var pharraphe = document.createElement('p');
    var tweets = document.getElementById('tweets');
    pharraphe.innerHTML = textarea.value;
    tweets.appendChild(pharraphe);
    pharraphe.classList.add('pharraphe');
  };
});

window.addEventListener('load', function() {
  var textarea = document.getElementById('textarea');
  var button = document.getElementById('button');
  var flag = false;
  textarea.addEventListener('keypress', activeButton);

  function activeButton(event) {
    flag = true;
    button.classList.add('color');
    if (textarea.value.length < 1  ) {
      console.log(textarea.value.length);
      button.removeAttribute('disabled');
      flag = false;
      button.classList.remove('color');
    }

  };

  button.addEventListener('click', saveMessage);

  function saveMessage(event) {
    textarea.value ;
    var pharraphe = document.createElement('p');
    var tweets = document.getElementById('tweets');
    console.log(pharraphe);
    pharraphe.innerHTML = textarea.value;
    tweets.appendChild(pharraphe);
  };
});

window.addEventListener('load', function() {
  var textarea = document.getElementById('textarea');
  console.log(textarea);
  textarea.addEventListener('keyup', eventText);

  function eventText(event) {
    textarea.value ;

  };

  var button = document.getElementById('button');
  button.addEventListener('click', saveMessage);

  function saveMessage(event) {
    var pharraphe = document.createElement('p');
    var tweets = document.getElementById('tweets');
    console.log(pharraphe);
    pharraphe.innerHTML = textarea.value + '<br>';
    tweets.appendChild(pharraphe);
    tweets.addAttribute('postition-tweets');
  };
/*
  function saveText(event) {
    var container = document.getElementById('container') ;
    console.log(textarea.value);
  };*/
});

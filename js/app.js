window.addEventListener('load', function() {
  var textarea = document.getElementById('textarea');
  console.log(textarea);
  textarea.addEventListener('keyup', eventText);

  
  var button = document.getElementById('button');
  button.addEventListener('click', saveMessage);

  function saveMessage(event) {
    textarea.value ;
    var pharraphe = document.createElement('p');
    var tweets = document.getElementById('tweets');
    console.log(pharraphe);
    pharraphe.innerHTML = textarea.value + '<br>';
    tweets.appendChild(pharraphe);

  };

  function eventText(event) {
    console.log(event.which) ;
    if(event.whitch === 32) {
      console.log(event.which);
      button.removeEventListener('click', saveMessage);
    }

  };

/*
  function saveText(event) {
    var container = document.getElementById('container') ;
    console.log(textarea.value);
  };*/
});

document.addEventListener('DOMContentLoaded', function() {
  var submitBtn = document.getElementById('submitBtn');

  submitBtn.addEventListener('click', mockConvert);
});

const mockConvert = () => {
  event.preventDefault();
  userText = document.getElementById('textInput').value;
  let res = '';
  for (i = 0; i < userText.length; i++) {
    res += i % 2 == 0 ? userText.charAt(i).toUpperCase() : userText.charAt(i);
  }
  document.getElementById('result').innerHTML = res;
  document.getElementById('textInput').value = '';
};

const axios = require('axios')

const username = document.querySelector('#username').value
const password = document.querySelector('#pass').value
const submit = document.querySelector('#submit')
const body = document.getElementById('body')
submit.addEventListener('click', function submitForm(){
    axios.post('/login', {
        username: username,
        password: password
      })
      .then(function (response) {
        if (response.data === "Successfully logged in!") {
          window.location.href = "/index";
        }
      })
})

submit.onclick = function(){
    body.style.backgroundColor = "green"
}
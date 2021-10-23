const header = document.getElementById('header')
header.innerHTML = "This is JavaScript Dynamics"
header.style.color = 'red'
const para = document.createElement('p')
para.id = 'par'
para.innerHTML = "What is your name?"
document.body.appendChild(para)
para.onclick = function(){
    para.style.backgroundColor = 'green'
}

//hiding and showing
let hid = document.querySelector('.hid')
para.onmouseover = function(){
    hid.style.display = 'block'
}
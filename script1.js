window.addEventListener('load', function() {

const list = document.querySelector('ul');
list.addEventListener('click', function (event) {
    if(event.target.tagName === "LI") {
       event.target.classList.toggle('checked');
    } else if(event.target.tagName === "SPAN") {
       let div = event.target.parentNode;
       div.remove();
    }
}, false);
})

function newElement() {
    let li = document.createElement('li');
    let inputValue = document.getElementById('DoElement').value;
    let tex = document.createTextNode(inputValue);
    li.appendChild(tex);
    if(inputValue == "") {
       alert("Введите новый пункт!");
    } else {
       document.getElementById('list').appendChild(li);
    }
    document.getElementById('DoElement').value = "";
    let span = document.createElement('SPAN');
    let txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
}
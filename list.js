var datediv = document.querySelector('#date');

var date = new Date();

var today = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();


datediv.textContent = today + ' : ' + (month + 1) + ' : ' + year;


function addMore() {
    var name = document.getElementById('name').value;
    document.getElementById('error').innerHTML = '';

    if (name == '') {
        document.getElementById('error').innerHTML = 'please enter value';
    } else {
        var list = document.getElementById('todoList');
        var li = document.createElement('li');
        li.textContent = name;

        let a = document.createElement('a');
        a.innerHTML = '&times;';
        a.href = 'javascript:void(0)';
        a.className = 'remove';
        li.appendChild(a);

        var pos = list.firstElementChild;

        if (pos == null) {
            list.appendChild(li);
        } else {
            list.insertBefore(li, pos);
        }


    }

    document.getElementById('name').value = '';
}

let btn = document.querySelector('ul');
btn.addEventListener('click', function(e) {
    var list = document.getElementById('todoList');
    var li = e.target.parentNode;
    list.removeChild(li);
});
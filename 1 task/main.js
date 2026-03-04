let input = document.getElementById('nameValueId');
let buttonAdd = document.getElementById('btnAdd');
let buttonSrtName= document.getElementById('btnSrtName');
let buttonSrtVal= document.getElementById('btnSrtVal');
let buttonDel= document.getElementById('btnDel');
let ul = document.getElementById('list');

buttonAdd.addEventListener('click', () => {
    let value = input.value;
    if (value) {
        let li = document.createElement('li');
        li.innerText = value;
        ul.appendChild(li);
        input.value = '';
    }
});

buttonSrtName.addEventListener('click', () => {
     let value = [];
     ul.querySelectorAll('li').forEach((li) => {
         value.push(li.innerText);
     });

    value.sort((a, b) => {
    let nameA = a.split('=')[0]
    let nameB = b.split('=')[0]
        if (nameA > nameB) {
            return 1;
        }
        if (nameA < nameB) {
            return -1;
        }
        if (nameA === nameB) {
            return 0;
        }
     });
    ul.innerHTML = '';

    value.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
});

buttonSrtVal.addEventListener('click', () => {
    let value = [];
    ul.querySelectorAll('li').forEach((li) => {
        value.push(li.innerText);
    });

    value.sort((a, b) => {
        let nameA = a.split('=')[1]
        let nameB = b.split('=')[1]
        if (nameA > nameB) {
            return 1;
        }
        if (nameA < nameB) {
            return -1;
        }
        if (nameA === nameB) {
            return 0;
        }
    });
    ul.innerHTML = '';

    value.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
});

buttonDel.addEventListener('click', () => {
    ul.innerText = '';
})
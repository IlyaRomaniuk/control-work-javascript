let input = document.getElementById('nameValueId');
let buttonAdd = document.getElementById('btnAdd');
let buttonSrtName= document.getElementById('btnSrtName');
let buttonSrtVal= document.getElementById('btnSrtVal');
let buttonDel= document.getElementById('btnDel');
let ul = document.getElementById('list');

buttonAdd.addEventListener('click', () => {
    let inputValue = input.value

    if (!inputValue.includes('=')) {
        return;
    }

    let parts = inputValue.split('=');

    if (parts.length !== 2) {
        return;
    }

    let name = parts[0].trim();
    let value = parts[1].trim();

    if (name === '' || value === '') {
        return;
    }

    let regex = /^[a-zA-Z0-9]+$/;
    if (!regex.test(name) || !regex.test(value))  {
        return;
    }

    let li = document.createElement('li');
    li.innerText =  `${name}=${value}`;
    ul.appendChild(li);

    input.value = '';

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
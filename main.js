const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
];

const table = document.createElement('table');
const thead = document.createElement('thead');
const tr = document.createElement('tr');
const th_firstname = document.createElement('th');
const th_lastname = document.createElement('th');
const tbody = document.createElement("tbody");

document.body.appendChild(table);
table.appendChild(thead);
thead.appendChild(tr);


th_firstname.innerHTML = "keresztnév"; 
th_lastname.innerHTML = "vezetéknév";
tr.appendChild(th_firstname);
tr.appendChild(th_lastname);

table.appendChild(tbody);

for (let pers of array) {
    const tr_body = document.createElement('tr');
    tbody.appendChild(tr_body);
    
    const td_firstname = document.createElement('td');
    td_firstname.innerHTML = pers.firstname1;

    const td_lastname = document.createElement('td'); 
    td_lastname.innerHTML = pers.lastname;

    tr_body.appendChild(td_firstname);
    tr_body.appendChild(td_lastname);
}

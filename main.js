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

const table = document.createElement('table'); //létre hozunk egy tablet
const thead = document.createElement('thead'); //létre hozunk egy theadot
const tr = document.createElement('tr'); // létre hozunk egy tr-t
const th_firstname = document.createElement('th'); // létre hozunk egy th-t a firsnamenek
const th_lastname = document.createElement('th'); // létrehozunk egy th-t a lastnamenek
const tbody = document.createElement("tbody"); //létrehozunk egy tbodyt

document.body.appendChild(table); // hozzáfüzzük a bodyhoz a tablet(vagyis alát rendeljük)
table.appendChild(thead); // table alá rendeljük a thheadot
thead.appendChild(tr); //thead alá rendeljük a tr-t


th_firstname.innerHTML = "keresztnév"; //megadjukfejléc egyik nevét
th_lastname.innerHTML = "vezetéknév"; // megadjuk a fejléc másik nevét
th_firstname.colSpan = 2; // beállítjuk hogy 2 oszlopa legyen a th_firstname

tr.appendChild(th_lastname); // a fejléc tr elemeibe rendeljük megadott nevet (Keresztnév)
tr.appendChild(th_firstname);

table.appendChild(tbody); // a table alá rendeljük a tbodyt

for (let pers of array) {
    const tr_body = document.createElement('tr');
    tbody.appendChild(tr_body);
    
    const td_firstname = document.createElement('td');
    td_firstname.innerHTML = pers.firstname1;


    const td_lastname = document.createElement('td'); 
    td_lastname.innerHTML = pers.lastname;


    const td_firstname2 = document.createElement('td');
    td_firstname2.innerHTML = pers.firstname2;
    
    


    tr_body.appendChild(td_lastname);
    tr_body.appendChild(td_firstname);
    
    if (pers.firstname2 == undefined){
        td_firstname.colSpan = 2 
    }
    else{
        const td_firstname2 = document.createElement('td');
        td_firstname2.innerHTML = pers.firstname2;
        tr_body.appendChild(td_firstname2)
    }

}

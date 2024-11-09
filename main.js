let array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
        married: true,
        pet: 'kutya'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
        married: false,
        pet: 'macska'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
        married: false,
        pet: 'teknős'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth',
        married: true,
        pet: 'macska'
    },
]

const table = document.createElement('table'); //létrehozunk egy tablet
const thead = document.createElement('thead'); //létrehozunk egy theadot
const tr = document.createElement('tr'); // létre hozunk egy tr-t

const th_lastname = automatikustable("th", "Vezetéknév", thead);
const th_firstname = automatikustable("th", "Keresznév", thead);
const th_hazas = automatikustable("th", "Házas e?", thead);
const th_pet = automatikustable("th", "Háziállat", thead);


const tbody = document.createElement("tbody"); //létrehozunk egy tbodyt


document.body.appendChild(table); // hozzáfüzzük a bodyhoz a tablet(vagyis alát rendeljük)
table.appendChild(thead); // table alá rendeljük a thheadot
thead.appendChild(tr); //thead alá rendeljük a tr-t

 
th_firstname.colSpan = 2; // beállítjuk hogy 2 oszlopa legyen a th_firstname




table.appendChild(tbody); // a table alá rendeljük a tbodyt

render();

const form = document.getElementById('form'); // a formot egy változóba tároljuk




form.addEventListener('submit' ,function(e){ //létrehozunk egy függvényt ami a submit parancsra hívódik meg

    const lastname = document.getElementById('lastname') //hivatkozást helyezünk el a lastname-ra
    const firstname1 = document.getElementById('firstname1') //hivatkozást helyezünk el a firstname-ra
    const firstname2 = document.getElementById('firstname2') //hivatkozást helyezünk el a firstname2-ra
    const married = document.getElementById('married') //hivatkozást helyezünk el a marriedre
    const pet = document.getElementById('pet') // //hivatkozást helyezünk el a pet-re


    //változóba tároljuk a hivatkozások értékeire
    
    const lastnamevalue = lastname.value; 
    e.preventDefault();  //megakadályozza hogy az újabb submit eseménykor frissüljenek a meglévő adatok és elvesszenek
    const firstname1value = firstname1.value;
    let firstname2value = firstname2.value;
    const marriedvalue = married.checked;
    const petvalue = pet.value;


    if (firstname2value === ""){    //ha firstname 2 üres
        firstname2value = undefined; //akkor firstname2 nincs
    }


    if (validateFields(lastname, firstname1, firstname2)){ //ha megvan adva a függvény összes értéke

        const newpers = { //létrehozunk objektumot ami tartalmazza a mezők adatait
            lastname: lastnamevalue,
            firstname1: firstname1value,
            firstname2: firstname2value,
            married: marriedvalue,
            pet: petvalue
        }
        array.push(newpers); //feltöltjük az arrayhez a newpers értékeit
        render(); //meghívjuk a render függvényt feltöltse az új adatokat
    }

    
})








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

const th_firstname = document.createElement('th'); // létrehozunk egy th-t a firsnamenek
const th_lastname = document.createElement('th'); // létrehozunk egy th-t a lastnamenek
const th_hazas_e = document.createElement('th') // létrehozzuk a hazas_e fejléc oszlopát
const th_haziallat = document.createElement('th') // létrehozzuk a haziallat fejléc oszlopát

const tbody = document.createElement("tbody"); //létrehozunk egy tbodyt


document.body.appendChild(table); // hozzáfüzzük a bodyhoz a tablet(vagyis alát rendeljük)
table.appendChild(thead); // table alá rendeljük a thheadot
thead.appendChild(tr); //thead alá rendeljük a tr-t

 
th_firstname.innerHTML = "keresztnév"; //megadjukfejléc egyik nevét
th_lastname.innerHTML = "vezetéknév"; // megadjuk a fejléc másik nevét
th_hazas_e.innerHTML = "Házas e?"; // megadjuk a fejléc nevét
th_haziallat.innerHTML = "Háziállat"; // megadjuk a fejléc nevét
th_firstname.colSpan = 2; // beállítjuk hogy 2 oszlopa legyen a th_firstname




tr.appendChild(th_lastname);  //hozzá füzzük a fejléchet az oszlopot
tr.appendChild(th_firstname);   //hozzá füzzük a fejléchet az oszlopot
tr.appendChild(th_hazas_e); //hozzá füzzük a fejléchet az oszlopot
tr.appendChild(th_haziallat);   //hozzá füzzük a fejléchet az oszlopot

table.appendChild(tbody); // a table alá rendeljük a tbodyt


const form = document.getElementById('form'); // a formot egy változóba tároljuk

form.addEventListener('submit' ,function(e){ //létrehozunk egy függvényt ami a submit parancsra hívódik meg

    const lastname = document.getElementById('lastname') //hivatkozást helyezünk el a lastname-ra
    const firstname1 = document.getElementById('firstname1') //hivatkozást helyezünk el a firstname-ra
    const firstname2 = document.getElementById('firstname2') //hivatkozást helyezünk el a firstname2-ra
    const married = document.getElementById('married') //hivatkozást helyezünk el a marriedre
    const pet = document.getElementById('pet') // //hivatkozást helyezünk el a pet-re


    //változóba tároljuk a hivatkozások értékeire
    
    const lastnamevalue = lastname.value; 
    e.preventDefault(); 
    const firstname1value = firstname1.value;
    let firstname2value = firstname2.value;
    const marriedvalue = married.checked;
    const petvalue = pet.value;


    if (firstname2value === ""){
        firstname2value = undefined;
    }


    if (validateFields(lastname, firstname1, firstname2)){

        const newpers = {
            lastname: lastnamevalue,
            firstname1: firstname1value,
            firstname2: firstname2value,
            married: marriedvalue,
            pet: petvalue
        }
    }


    array.push(newpers);

    render();


})



function render(){

    for (let pers of array) {
        const tr_body = document.createElement('tr'); //létrehozzuk egy sort
    
    
        tr_body.addEventListener('click', function(e){ //létrehoztunk egy függvényt ami akkor fut le ha a 'click' esemény megtörténik
            const select_tr = tbody.querySelector('.selected') //lekéri a kijelölt sort
    
            if (select_tr != undefined){ // ha  a select_tr nem undifiend, tehát van kijelölt sor
    
                select_tr.classList.remove('selected') // ha eddig ki volt jelölve akkor azt eltávolítja, hogy új vehesse fel a kijelölést
    
            }
    
            
            e.currentTarget.classList.add('selected') // a currentTargert ráteszi a select osztályt az e-re ami a kijelölt sor
    
        })
    
    
        tbody.appendChild(tr_body); // a tbody alá rendeljük
      
        
        const td_firstname = document.createElement('td'); //létrehozzuk a firstname helyét
        td_firstname.innerHTML = pers.firstname1; // megadjuk a firstname értékét
    
    
        const td_lastname = document.createElement('td'); //létrehozzuk a lastname helyét
        td_lastname.innerHTML = pers.lastname; //megadjuk a lastname értéket
    
    
        const td_firstname2 = document.createElement('td'); //létrehozzuk a firstname2 helyét
        td_firstname2.innerHTML = pers.firstname2; // értéket adunk a firstname2nek
        
    
        tr_body.appendChild(td_lastname); // sorba rendeljük a lastname-et a sorhoz
        tr_body.appendChild(td_firstname); // sorba rendeljük a firstnamet
        
        if (pers.firstname2 == undefined){ //ha nincs firstname 2
            td_firstname.colSpan = 2  //akkor a táblázatunk 2 oszlopos lesz
        }
        else{
            const td_firstname2 = document.createElement('td'); //létrehozzuk a firstname2 helyét
            td_firstname2.innerHTML = pers.firstname2; // értéket adunk a firstname2nek
            tr_body.appendChild(td_firstname2) // hozzá füzzük a firstname2-t a sorhoz
        }
    
        const td_married = document.createElement('td');  //létrehozzuk a married helyét
        
        if (pers.married == false){ //megnézzük hogy házas e, és ha nem false akkor nem értéket adunk vissza
            td_married.innerHTML = "nem";
        }
        else{
            td_married.innerHTML = "igen"; //különben igen értéket
        }
        tr_body.appendChild(td_married); //hozzá füzzük a merriedet a táblázathoz
    
        const td_pet = document.createElement('td'); // létrehozzuk a pet helyét
        td_pet.innerHTML = pers.pet; //megadjuk a pet értékét
    
        tr_body.appendChild(td_pet); // hozzáadjuk a pet-et a táblázathoz
    } 



}


function validateFields(lastHTML, firstHTML, petHTML){
    let result = true;
    if (lastHTML.value === ''){
        const parent_element = lastHTML.parentElement

        const error = parent_element.querySelector('.error');
        error.innerHTML = 'kotelezo'

        result = false;
    }

    if (firstHTML.value === ''){
        const parent_element = firstHTML.parentElement

        const error = parent_element.querySelector('.error');
        error.innerHTML = 'kotelezo'

        result = false;
    }


    if (petHTML.value === ''){
        const parent_element = petHTML.parentElement

        const error = parent_element.querySelector('.error');
        error.innerHTML = 'kotelezo'

        result = false;
    }

    return result
}
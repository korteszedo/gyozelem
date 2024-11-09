/**
 * 
 * @param {td|th} fajta 
 * @param {string} taratlom 
 * @param {HTMLTableRowElement} szulo 
 * @returns {automatikustable}
 */
function automatikustable(fajta, taratlom, szulo){

    const asd = document.createElement(fajta);
    asd.innerHTML = taratlom;
    szulo.appendChild(asd);

    return asd;
}

function validateFields(lastHTML, firstHTML, petHTML){
    let result = true;  //létrehozunk egy result változót igaz értékkel
    if (lastHTML.value === ''){ // ha nem kap a függvény lastHTML értéket
        const parent_element = lastHTML.parentElement //megkeressük a lastHTML szülő elemét (ami alá van rendelve)

        const error = parent_element.querySelector('.error'); //megkeressük a kitöltetlen mezőt, ahová a hiba üzenet kellene
        error.innerHTML = 'kotelezo'   //megadjuk az error értékét

        result = false; //a resultot false-ra állítjuk (ez jelzi hogy nincs kitöltve egy mező)
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

    return result //vissza adjuk a result-ot
}

function render() {
    tbody.innerHTML = ''; // töröljük a tbody korábbi tartalmát

    for (let pers of array) {
        const tr_body = document.createElement('tr'); // létrehozzuk egy sort

        tr_body.addEventListener('click', function(e) { // létrehoztunk egy függvényt ami akkor fut le ha a 'click' esemény megtörténik
            const select_tr = tbody.querySelector('.selected'); // lekéri a kijelölt sort
    
            if (select_tr != undefined) { // ha  a select_tr nem undefined, tehát van kijelölt sor
                select_tr.classList.remove('selected'); // eltávolítja a kijelölést
            }
    
            e.currentTarget.classList.add('selected'); // kijelöli az aktuális sort
        });

        tbody.appendChild(tr_body); // a tbody alá rendeljük

        const td_firstname = document.createElement('td'); // létrehozzuk a firstname helyét
        td_firstname.innerHTML = pers.firstname1; // megadjuk a firstname értékét
    
        const td_lastname = document.createElement('td'); // létrehozzuk a lastname helyét
        td_lastname.innerHTML = pers.lastname; // megadjuk a lastname értékét

        tr_body.appendChild(td_lastname); // sorba rendeljük a lastname-et
        tr_body.appendChild(td_firstname); // sorba rendeljük a firstnamet
        
        if (pers.firstname2 == undefined) { // ha nincs firstname2
            td_firstname.colSpan = 2;  // akkor a táblázatunk 2 oszlopos lesz
        } else {
            const td_firstname2 = document.createElement('td'); // létrehozzuk a firstname2 helyét
            td_firstname2.innerHTML = pers.firstname2; // értéket adunk a firstname2-nek
            tr_body.appendChild(td_firstname2); // hozzáfüzzük a firstname2-t a sorhoz
        }
    
        const td_married = document.createElement('td'); // létrehozzuk a married helyét
        
        td_married.innerHTML = pers.married ? "igen" : "nem"; // beállítjuk az értéket, hogy "igen" vagy "nem"
        tr_body.appendChild(td_married); // hozzáadjuk a married-et a táblázathoz
    
        const td_pet = document.createElement('td'); // létrehozzuk a pet helyét
        td_pet.innerHTML = pers.pet; // megadjuk a pet értékét
    
        tr_body.appendChild(td_pet); // hozzáadjuk a pet-et a táblázathoz

        form.reset()
    }
}
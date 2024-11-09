function createHtmlElement(tag, id, parent_element){

    const element = document.createElement(tag);
    element.id = id;
    parent_element.appendChild(element);

}

function createHtmlElementWithParentId(tag, id, parent_elementid){
    const element = document.getElementById(parent_elementid);

    if (element != undefined){
        createHtmlElement(tag, id, element);
    }
}

function renderTableHeader(oszlop){
    const vez = document.getElementById(oszlop);
    automatikustable('th', 'Vezetéknév', vez);

    const ker = automatikustable('th', 'Kerszetnév',vez);
    ker.colSpan = 2;

    automatikustable('th', 'Házas e?', vez);
    automatikustable('th', 'Állat', vez);


}

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

function render(array1) {

    const tbody = document.getElementById("persontbody") 
    


    for (let pers of array1) {
        const tr_body = document.createElement('tr'); // létrehozzuk egy sort
        
        const lastnaem = automatikustable('td', pers.lastname, tr_body)
        let firstname1 = automatikustable('td', pers.firstname1, tr_body);
    
        
        if (pers.firstname2 == undefined) { // ha nincs firstname2
            firstname1.colSpan = 2;  // akkor a táblázatunk 2 oszlopos lesz
        } else {
            let firstname2 = automatikustable('td', pers.firstname2, tr_body);
        }
    
        const married = automatikustable('td',pers.married ? "igen" : "nem", tr_body);

        const firstname2 = automatikustable('td', pers.pet, tr_body);
        
    
        tbody.appendChild(tr_body); // hozzáadjuk a pet-et a táblázathoz

        tr_body.addEventListener('click', function(e){
            const kijelol = tbody.querySelector('.selected');
            if(kijelol != undefined){
                kijelol.classList.remove('selected')
            }e.currentTarget.classList.add('selected');
        })

    }

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
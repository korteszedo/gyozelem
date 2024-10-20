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
]
const table = document.createElement("table")
document.body.appendChild(table)

const tablehead = document.createElement("thead")
table.appendChild(tablehead)

const tableheadrow = document.createElement("tr")
tablehead.appendChild(tableheadrow)

const tableth = document.createElement("th")
tableheadrow.appendChild(tableth)
const tableth2 = document.createElement("th")
tableheadrow.appendChild(tableth2)


tableth.innerHTML='Vezetéknév'
tableth2.innerHTML='Keresztnév'
tableth2.colSpan = 2
const tablebody= document.createElement("tbody")
table.appendChild(tablebody)
for (const person of array)
{
    const tr = document.createElement("tr")
    const lastname = document.createElement("td")
    tr.appendChild(lastname)
    tablebody.appendChild(tr)
    lastname.innerHTML= person.lastname

    if (firstname2===undefined){
        
    }
}

for (const person2 of array)
    {
        const tr = document.createElement("tr")
        const firstname1 = document.createElement("td")
        tr.appendChild(lastname)
        tablebody.appendChild(tr)
        lastname.innerHTML= person.lastname
    }
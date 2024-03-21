var team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    }
];

const cont = document.getElementById('mainly');
const divRow = document.querySelector('.row');

for(i = 0; i < team.length; i++){
    const divCol = document.createElement('div');
    divCol.classList.add('col-4');
    const divCard = document.createElement('div');
    divCard.classList.add('card');
    const divPerson = document.createElement('div');
    divPerson.classList.add('d-flex', 'flex-wrap');

    divPerson.innerHTML = `<img src="img/${team[i].foto}"> <div><div>${team[i].nome}</div> <div>${team[i].ruolo}</div></div>`;

    divCard.appendChild(divPerson);
    divCol.appendChild(divCard);
    divRow.appendChild(divCol);
    cont.appendChild(divRow);
    
    
    //const div = document.createElement('div');
    //div.innerHTML = `Nome: ${team[i].nome} Ruolo: ${team[i].ruolo} <img src = img/${team[i].foto}>`
    //cont.appendChild(div);



    //console.log(team[i].nome);
    //console.log(team[i].ruolo);
    //console.log(team[i].foto);
}
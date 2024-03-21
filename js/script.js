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

for(i = 0; i < team.length; i++){
    const cont = document.getElementById('main');
    const div = document.createElement('div');
    div.innerHTML = `Nome: ${team[i].nome} Ruolo: ${team[i].ruolo} <img src = img/${team[i].foto}>`
    cont.appendChild(div);
    console.log(team[i].nome);
    console.log(team[i].ruolo);
    console.log(team[i].foto);
}
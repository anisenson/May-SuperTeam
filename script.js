const teamMembers = [
    {
        ranking: '1.',
        name: 'Babe Ruth',
        position: 'Position',
        years: "years played",
        skills: ['dribbling', 'passing', 'shooting'],
        career: "This is Filler Text",
        img: 'https://nypost.com/wp-content/uploads/sites/2/2020/03/babe-ruth.jpg'
    },
    {
        ranking: '2.',
        name: 'Lou Gehrig',
        position: 'Position',
        years: "years played",
        skills: ['dribbling', 'passing', 'shooting'],
        career: "This is Filler Text",
    },
    {
        ranking: '3.',
        name: 'Mickey Mantle',
        position: 'Position',
        years: "years played",
        skills: ['dribbling', 'passing', 'shooting'],
        career: "This is Filler Text",
    },
    {
        ranking: '4.',
        name: 'Joe DiMaggio',
        position: 'Position',
        years: "years played",
        skills: ['dribbling', 'passing', 'shooting'],
        career: "This is Filler Text",
    },
    {
        ranking: '5.',
        name: 'Yogi Berra',
        position: 'Position',
        years: "years played",
        skills: ['dribbling', 'passing', 'shooting'],
        career: "This is Filler Text",
    },
    {
        ranking: '6.',
        name: 'Derek Jeter',
        position: 'Position',
        years: "years played",
        skills: ['dribbling', 'passing', 'shooting'],
        career: "This is Filler Text",
    },
    {
        ranking: '7.',
        name: 'Mariano Rivera',
        position: 'Position',
        years: "years played",
        skills: ['dribbling', 'passing', 'shooting'],
        career: "This is Filler Text",
    },
    {
        ranking: '8.',
        name: 'Whitey Ford',
        position: 'Position',
        years: "years played",
        skills: ['dribbling', 'passing', 'shooting'],
        career: "This is Filler Text",
    },
    {
        ranking: '9.',
        name: 'Don Mattingly',
        position: 'Position',
        years: "years played",
        skills: ['dribbling', 'passing', 'shooting'],
        career: "This is Filler Text",
    },
    {
        ranking: '10.',
        name: 'Aaron Judge',
        position: 'Position',
        years: "years played",
        skills: ['dribbling', 'passing', 'shooting'],
        career: "This is Filler Text",
    },
    
]





function generateTeamCards(){
    const teamCardsContainer = document.getElementById('teamCards')

    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-4')


        //background color
        let backgroundColor = ''

        switch(member.position){
            case 'Forward':
                backgroundColor = 'yellow'
            break
            case 'Midfield':
                backgroundColor = 'green'
            break
        }

        card.style.backgroundColor = backgroundColor


        //Create a list of skills with the <li> tag
        const skillsList = member.skills.map(skill => `<li> ${skill} </li>`).join('')

        card.innerHTML = 
        `
        <div class = "card">
            <div class = "card-header">
            <h3><b>${member.ranking}</b> ${member.name} </h3>
            </div>
            
            <div class = "card-body">
            <img style="width: 200px" src=${member.img}><br><br>
                <p><b>Years Played: </b> ${member.years}</p>
                <p><b>Position: </b> ${member.position}</p>
                <p><b>Skills: </b><ul> ${skillsList}</ul></p>              
                <p><b>Career: </b> ${member.career}</p>
                
            </div>
        </div>
        `
        teamCardsContainer.appendChild(card)
    })
}

window.onload = generateTeamCards()
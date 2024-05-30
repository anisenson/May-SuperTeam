const teamMembers = [
    {
        ranking: '1.',
        name: 'Babe Ruth',
        position: 'Outfielder/Pitcher',
        position1: 'Outfield',
        years: "1914-1935",
        skills: ['Power Hitting', 'Pitching Prowess', 'Charismatic Personality'],
        career: ' Babe Ruth revolutionized the game with his unprecedented power at the plate, amassing 714 career home runs and a 2.28 ERA as a pitcher.',
        img: 'Images/babe-ruth.jpg'
    },
    {
        ranking: '2.',
        name: 'Lou Gehrig',
        position: 'First Baseman',
        position1: 'Infield',
        years: "1923-1939",
        skills: ['Consistency', 'Power Hitting', 'Durability'],
        career: ' Known as the "Iron Horse," Lou Gehrig was a legendary first baseman for the New York Yankees, setting numerous records, including 2,130 consecutive games played, before his career was tragically cut short by ALS.',
        img: 'Images/Lou-Gehrig.jpg'
    },
    {
        ranking: '3.',
        name: 'Mickey Mantle',
        position: 'Outfielder/First Baseman',
        position1: 'Outfield',
        years: "1951–1968",
        skills: ['Switch-hitting Power', 'Speed', 'Athleticism'],
        career: 'Mickey Mantle was one of the most electrifying players in baseball history, known for his tape-measure home runs and remarkable athleticism despite battling injuries throughout his career.',
        img: 'Images/mickey-mantle.jpg'
    },
    {
        ranking: '4.',
        name: 'Joe DiMaggio',
        position: 'Center Fielder',
        position1: 'Outfield',
        years: "1936–1951",
        skills: ['Hitting for average', 'Fielding', 'Gracefulness'],
        career: 'Joe DiMaggios 56-game hitting streak in 1941 remains one of the most enduring records in sports history, cementing his place as one of the greatest players ever to step onto a baseball diamond.',
        img: 'Images/Joe-DiMaggio.jpg'
    },
    {
        ranking: '5.',
        name: 'Yogi Berra',
        position: 'Catcher',
        position1: 'Infield',
        years: "1946–1965",
        skills: ['Catching', 'Hitting', 'Leadership'],
        career: 'Yogi Berra was a key player for the Yankees during their dominant years in the 1950s, known for his clutch hitting and unparalleled ability to handle pitchers.',
        img: 'Images/Yogi-Berra.jpg'
    },
    {
        ranking: '6.',
        name: 'Derek Jeter',
        position: 'Shortstop',
        position1: 'Infield',
        years: "1995–2014",
        skills: ['Clutch hitting', 'Defense', 'Leadership'],
        career: 'Derek Jeter, known as "The Captain," was a five-time World Series champion and the heart and soul of the Yankees during his illustrious career, marked by countless memorable moments and a reputation for delivering in the clutch.',
        img: 'Images/Derek-Jeter.jpg'
    },
    {
        ranking: '7.',
        name: 'Mariano Rivera',
        position: 'Pitcher (Closer)',
        position1: 'Pitcher',
        years: "1995–2013",
        skills: ['Dominant Cutter', 'Consistency', 'Postseason excellence'],
        career: 'Mariano Rivera is widely regarded as the greatest closer in baseball history, known for his unrivaled mastery of the cutter pitch and his remarkable postseason success, helping the Yankees win five World Series titles.',
        img: 'Images/Mariano_Rivera.jpg'
    },
    {
        ranking: '8.',
        name: 'Whitey Ford',
        position: 'Pitcher',
        position1: 'Pitcher',
        years: "1950-1967",
        skills: ['Pitching', 'Postseason Success', 'Durability'],
        career: ' Whitey Ford, known as the "Chairman of the Board," was the ace of the Yankees pitching staff for over a decade, earning the reputation as one of the most reliable and successful pitchers in postseason history.',
        img: 'Images/Whitey-Ford.jpg'
    },
    {
        ranking: '9.',
        name: 'Don Mattingly',
        position: 'First Baseman',
        position1: 'Infield',
        years: "1982–1995",
        skills: ['Hitting', 'Fielding', 'Leadership'],
        career: 'Don Mattingly, affectionately known as "Donnie Baseball," was a fan favorite during his tenure with the Yankees, winning the AL MVP award in 1985 and earning nine Gold Glove Awards for his exceptional defense at first base.',
        img: 'Images/Don-Mattingly.jpg'
    },
    {
        ranking: '10.',
        name: 'Aaron Judge',
        position: 'Outfielder',
        position1: 'Outfield',
        years: "2016–present",
        skills: ['Power Hitting', 'Athleticism', 'Arm Strength'],
        career: 'Aaron Judge burst onto the scene as one of baseballs brightest young stars, showcasing his prodigious power and becoming a cornerstone player for the Yankees with his combination of offensive prowess and defensive ability.',
        img: 'Images/Aaron-Judge.jpeg'
    },
    
]





function generateTeamCards(){
    const teamCardsContainer = document.getElementById('teamCards')

    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-3')


        //background color
        let backgroundColor = ''

        switch(member.position1){
            case 'Pitcher':
                backgroundColor = '#003087'
            break
            case 'Infield':
                backgroundColor = '#C4CED3'
            break
            case 'Outfield':
                backgroundColor = '#E4002C'
            break
            
        }


        card.style.backgroundColor = backgroundColor


        //Create a list of skills with the <li> tag
        const skillsList = member.skills.map(skill => `<li> ${skill} </li>`).join('')

        card.innerHTML = 
        `
        <div class = "card h-100">
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
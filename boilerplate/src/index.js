const calAvg = (thing, ...numbers) => {
    let nSum = 0;
    numbers.forEach((n) => {
        nSum += n;
    });
    const avg = nSum / numbers.length
    return `The avg ${thing} is ${avg}`;
}

console.log(calAvg(1, 2, 4, 7));

const printTeam = (team, coach, ...players) => {
    console.log('Team: '+team);
    console.log('Coach: '+coach); 
    console.log('Players: '+players.join(','));
}

const team = {
    name: 'ABC',
    coach: 'ASDQ',
    players: [
        'ASDAD',
        'AKLI',
        'APIHI'
    ]
}

printTeam(team.name, team.coach, ...team.players);

let house = {
    bedRoom: 2,
    bathRoom: 1.5,
    yearBuilt: 2021,
};

// order is important
let newHouse = {
    ...house,
    basement: true,
    bedRoom: 3
};

// destructing

const todo = {
    id: 'ASDASDQEWQE',
    text: 'Pay the bill',
    completed: false
};

const { id, text, completed } = todo;
const { text: todoText, details = 'No Details Provided', ...others } = todo;

let [a, b] = [10, 20];

console.log(id, text, completed);
console.log(todoText, details, others);

let [f, s, , fr = 99, ...oArr] = [1, 2, 3, 4];

console.log(f, s, fr);

const printTodo = ({text, completed}) => {
    console.log(`${text}: ${completed}`);
}
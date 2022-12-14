/*
Snack 3
Creare un array di oggetti: 
Ogni oggetto descriverà una bici da corsa con 
le seguenti proprietà: nome e peso. 
Stampare a schermo la bici con peso minore utilizzando 
destructuring e template literal
*/

let bike = [
    {
        name: "mountain_bike",
        kg: 6,
    },
    {
        name: "ciclocross",
        kg: 8,
    },
    {
        name: "pieghevole",
        kg: 9,
    },
    {
        name: "graziella",
        kg: 15,
    }
];

console.log(`bike's array :`, bike)


// //global variable
// let limit = 100;
// let lightest;


// //loop for checking the array's objs
// for( let i=0; i < bike.length; i++){
//     //array's objs destructuring 
//     let {name, kg} = bike[i];

//     if(kg < limit){
//         limit = kg;
//         lightest = name;
//     }
// }

// console.log(`lightest bike is ${lightest}, and it weights ${limit} kg !!`)

//******SECOND WAY ******* */

let weights = bike.map(({kg}) => console.log(kg));

function lightestFinder(){
    weights = bike.map((element) => element.kg);
    console.log(`weights are :`, weights);

    let minWeight = Math.min(...weights);
    console.log(`the minWeight is :`, minWeight);

    let lightest = bike.filter(({element, kg}) => kg === minWeight)
    console.log(`the lightest is :`, lightest);

    document.getElementById('result').innerHTML = `the lightest is ${lightest.nome}, that weights ${lightest.kg} kg !!`
}

lightestFinder();


/****************************************************************************************
 * ******************* fourth snack *****************************************************
 ///********************************************************************************** */

 let football_team = [
    {
        nome: "Milan",
        points: 0,
        fouls: 0
    },
    {
        nome: "Inter",
        points: 0,
        fouls: 0
    },
    {
        nome: "Juve",
        points: 0,
        fouls: 0
    },
    {
        nome: "Atalanta",
        points: 0,
        fouls: 0
    },
    {
        nome: "Roma",
        points: 0,
        fouls: 0
    },
]

console.log(football_team);


//global var
const maxpoints = 10;
const maxfouls = 5;
let info = []; 


function randomNumber() {
    for (let i = 0; i < football_team.length; i++) {
        let rnpoint = Math.round(Math.random() * maxpoints);
        let rnfouls = Math.round(Math.random() * maxfouls);
        football_team[i].points = rnpoint;
        football_team[i].fouls = rnfouls;
    }
    console.log(football_team);
}


function newArray(){
    for (let i = 0; i < football_team.length; i++){
        let {name, fouls} = football_team[i];
        let obj = {...football_team.name, name, fouls};
        info.push(obj);
    }
    console.log(info);
}

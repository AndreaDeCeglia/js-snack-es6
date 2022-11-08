/*
Snack 3
Creare un array di oggetti: 
Ogni oggetto descriverà una bici da corsa con 
le seguenti proprietà: nome e peso. 
Stampare a schermo la bici con peso minore utilizzando 
destructuring e template literal
*/


//global variable
let limit = 100;
let lightest;


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

//loop for checking the array's objs
for( let i=0; i < bike.length; i++){
    //array's objs destructuring 
    let {name, kg} = bike[i];

    if(kg < limit){
        limit = kg;
        lightest = name;
    }
}

console.log(`lightest bike is ${lightest}, and it weights ${limit} kg !!`)
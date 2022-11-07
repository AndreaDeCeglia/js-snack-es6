// Snack 1

// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).

// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.
// esempio: dati i valori min: 2 e come max: 4 i nomi nell'array nuovo saranno i nomi compresi tra queste posizioni 2 e 4

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
let newArray = [];

let inputMin = parseInt(prompt('write the minimum number: '));
let inputMax = parseInt(prompt('write the maximum number: '));

if ( inputMin<0 || inputMax>myArray.length - 1){
    alert('write a number between 0 and 5');
} else {
    //withForEach();
    withFilter();
}

console.log(newArray);

// solution with forEach
function withForEach(){
    myArray.forEach((element, index) =>{
        if ( index >= inputMin && index <= inputMax ){
            newArray.push(element);
            console.log('the new array is:', newArray);
        }
        return newArray;
    })
}

//solution with filter
function withFilter(){
    newArray = myArray.filter((element, index) =>{
        if ( index >= inputMin && index <= inputMax ){
            return true;
        } else{
            return false;
        }
    })
    //console.log('element', element);
    console.log(newArray);
}
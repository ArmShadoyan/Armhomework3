//Exercise; 1
function GetArrLength(array){
    return [array.push()]
}

//_________________________________________________________________________________________
//Exercise; 2
function GetSumOfArrayElements (array){
    let sum = 0;
    
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
            }
        return(sum);
    }
//____________________________________________________________________________________________
//Exercise; 3
let firstN = +prompt()
let lastN = +prompt()
let a = 0
for(let i = 2;a < lastN; i++){
    
    a = (3 ** i)
        if (a < lastN && a > firstN){
            console.log(a)
        }
}
//____________________________________________________________________________________________
//Exercise; 4

let givenNumber = prompt();
let result = [givenNumber[0]];

for(i = 1;i <= givenNumber.length;i++){
    if((givenNumber[i-1]%2===0)&&(givenNumber[i]%2===0)){
        result.push("-",givenNumber[i]);
    }else{
        result.push(givenNumber[i]);
    }
    
}console.log(result.join(""));

//______________________________________________________________________________________________
//Exercise; 5
let n = +prompt()
let b = 0
for (let i = 0;b < n ; i++) {
    let a = 0;

   
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            a = 1;
            break;
        }
    }if (i > 1 && a == 0) {
            b += 1 
        if(b === n){
            console.log(i)
        }
    }
}
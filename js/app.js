const list = document.querySelector(".navbar__collection");

function toggleNavbar() {
  list.classList.toggle("show");
}

{
  //M-1
  // function double(a){
  //     return a * 2
  // }
  // console.log( double(10) );
}

{
  //M-2
  // function welcome(name){
  //     return `Salom ${name}`
  // }
  // console.log(welcome("Fayod"));
}

{
  //M-3
  // function identificator(number){
  //     if ( number > 0 ) {
  //         return `${number} is positive`
  //     } else if ( number < 0 ){
  //         return `${number} is negative`
  //     } else {
  //          return `${number} is zero`
  //     }
  // }
  // console.log(identificator (0) );
}

{
  //M-4
  // function identificator (number) {
  //     return number % 2 == 0 ? `${number} is even` : `${number} is odd`
  //     if ( number % 2 == 0 ) {
  //         return `${number} is even`
  //     } else {
  //         return `${number} is odd`
  //     }
  // }
  // console.log( identificator(10) );
}

{
  //M-5
  // function identificator (numberA, numberB){
  //     return numberA > numberB ? `${numberA} is greater than ${numberB}` : `${numberB} is greater than ${numberA}`
  // }
  // console.log( identificator(6, 5) );
}
{
  //M-6
  // function count(b){
  //     for (let i = 1; i <= b; i++)
  //         console.log(i);
  //     return count
  // }
  // count(10);
}
{
  //M-7
  function sum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result;
  }

  const number = [1,2,3,4,5]
  console.log(sum(number));
}
{
  //M-9
  // function biggestNumber(numbers) {
  //     if ( numbers[0] > numbers[1] && numbers[0] > numbers[2] && numbers[0] > numbers[3] && numbers[0] > numbers[4] ){
  //         return `biggest number is ${numbers[0]}`
  //     }  else if ( numbers[1] > numbers[0] && numbers[1] > numbers[2] && numbers[1] > numbers[3] && numbers[1] > numbers[4] ){
  //         return `biggest number is ${numbers[1]}`
  //     } else if ( numbers[2] > numbers[0] && numbers[2] > numbers[1] && numbers[2] > numbers[3] && numbers[2] > numbers[4] ){
  //         return `biggest number is ${numbers[2]}`
  //     } else if ( numbers[3] > numbers[0] && numbers[3] > numbers[1] && numbers[3] > numbers[2] && numbers[3] > numbers[4] ){
  //         return `biggest number is ${numbers[3]}`
  //     } else {
  //         return `biggest number is ${numbers[4]}`
  //     }
  // }
  // console.log(biggestNumber( [10,11,3,4,7] ));
}

{
  //M-10]
  // let result = 1
  // function integral( number ){
  //     for( let i = 1; i <= number; i++)
  //         result *= i
  //         return result
  // }
  // console.log( integral(5) );
}

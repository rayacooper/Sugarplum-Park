var userList = [
    {
        name: "Sonya"
    },
    {
        name: "Kris"
    },
    {
        name: "Bob"
    },
    {
        name: "Sarah"
    }
];












function nextItem(xs, item) { //Josh's Solution
    const hasItem = false;
    for(var x of xs) {
        if(hasItem) return x;
        if(x === item) there = true;
    }
  }

  console.log(nextItem([1,2,3,4,5,6,7], 3))

  











// function shiftLeft(s, t){
//     let answer = s.length + t.length;
//     let difference = 0;
    
    
//     s.split('').forEach((e, i)=>{
//         if(e === t[i]){
//             answer -= 2;
//         }
//     })

//     return answer - difference;
// }





function shiftLeft(s, t){
    let counter = 0;
    function counting() {
        if (s.length > t.length){
            s = s.slice(1);
            counter++;
            counting();
        }

        else if (s.length < t.length){
            t = t.slice(1);
            counter++;
            counting();
        }

        else if (s.length === t.length){

            if (s !== t) {
                s = s.slice(1)
                t = t.slice(1)
                counter += 2
                counting()
            }
            else if(s === t){
                match = true;
            }
            
        }
    }
    counting();
    return counter
  }





/// the .splice() function takes two parameters, like this: array.splice(x, y).
/// The number in the "x" spot tells it which index of the array to start at.
/// The number in the "y" spot tells it how many elements to delete.



/// In the following array, delete the word "banana"

var ketoFoods = ["cheddar", "beef", "banana", "heavy cream", "spinach"];

/// put your code below this line:

ketoFoods.splice(2, 1);
console.log(ketoFoods);


/// In the following array, delete the third object

var randomObjects = [{}, {}, {}, {}, {}];



/// put your code below this line:

randomObjects.splice(2,1);
console.log(randomObjects);


/// Write a function that contains a for loop that searches through the following array for the word "oreos" and then deletes it.

var needs = [`food`, `love`, `oreos`, `oxygen`, `shelter`, `sleep`];

/// put your code below this line:

function deleteOreos(elem){
    for (var i = 0; i < elem.length; i++) {
        if (elem[i] === `oreos`) {
            elem.splice(i, 1);
        }
    }
}
deleteOreos(needs);
console.log(needs);

/// In the following array, delete the object with the "sugar" property that equals "true"

/// 
var brandsOfApplesauce = [
    {
        name: `Mr Linkler's Applesauce`,
        sugar: false
    },

    {
        name: `Ol Hobo's Applesauce`,
        sugar: false
    },

    {
        name: `Hank's Wife's Applesauce`,
        sugar: true
    },

    {
        name: `Sonya's Own Applesauce`,
        sugar: false
    }
]; 

function sugHunt(arr, properTy) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][properTy] === true) {
            arr.splice(i, 1);
        }
    } 
}
/// Write your code below this line:
sugHunt(brandsOfApplesauce, `sugar`);

console.log(brandsOfApplesauce[2])



/// I have an array listed up at the beginning of the document. It contains several objects, each has a property called "name". 
/// Here's an example of one of them:

/// {
///        name: "Billeh"
/// }

/// One of the objects in the array has a "name" property that equals "Bob". Write a function that contains a for loop
/// that searches for the object with the "name" property of "Bob" and deletes it:

function bobHunt(arr, name, value){
    for (var i = 0; i < arr.length; i++){
        if (arr[i][name] === value) {
            arr.splice(i, 1);
        }
    }
}

bobHunt(userList, `name`, `Bob`);
console.log(userList)

const allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];

const newNums = allTheNums.filter(function(e, i, arr) {
    e % 2 === 0;
})

console.log(allTheNums)

// const evenNums = allTheNums.filter(function(e, i, arr){
//     return e % 2 === 0;
// });

// console.log(evenNums)

// Return an array
function fizzbuzz(n)
{
    var arr = [];
    for (i = 1; i <= n; i++) {
        if (i % 5 === 0 && i % 3 === 0) { /// This was originally the third thing I tested for, which was a mistake!
            arr.push("FizzBuzz")          /// Test this first or else 15 would be "Fizz" when it passed n % 3 === 0
        }
        else if (i % 3 === 0) {
            arr.push("Fizz");
        }
        else if (i % 5 === 0) {
            arr.push("Buzz");
        }
        else {
            arr.push(i);
        }
    }
    return arr; 
}

function even_or_odd(number) {
    return number % 2 === 0 ?"Even":"Odd";
  }

function accum(s) {
    // make a new variable that is an empty string ""
    let mumm = "";
    // make a for loop that loops through s.length
    for (var i = 0; i < s.length; i++) {
    // each part of string "s" is represented like this: s[i]
    // Use these: toUpperCase() and toLowerCase()
        mumm += s[i].toUpperCase();
        //mumm += s[i].toLowerCase() * i;
        // Find a way to add i lowercase letters to the end of the first letter
        for(j = 0; j < i; j++) {
            mumm += s[i].toLowerCase();
        }

        // at the end of each loop, concatenate a - onto the end of the string (if it's not the end)
        if (i !== s.length - 1) {
            mumm += "-"
        }

    }

    //return the new string we made
    return mumm;
}

console.log(accum("butts"))

function points(games) {
    let x=0                             //Tried this one, wouldn't pass until I specified that x=0, beforehand it returned NaN
    for (i=0;i<games.length;i++) {
        if(games[i][0]>games[i][2]) {
            x+=3
        }
        else if(games[i][0]===games[i][2]) {
            x++
        }
    }
    return x
  }

  function spinWords(str){
    let x = ""
    let b = ""
    let arr = str.split(" ")
    for(let i = 0; i < arr.length; i++){
        if (arr[i].length >= 5) {
            for (let j=arr[i].length - 1; j >= 0; j--) {
                b += arr[i][j]
            }
            x += b
            b = ""
            if (i !== (arr.length - 1)) {
              x += " "
            }
        }
        else {
            x += arr[i] + " "
            if (i !== (arr.length - 1)) {
              x += " "
            }
        }
    }
    return x
  }

  const dum = "What a big old load of honkey you silly person"

  console.log(spinWords(dum))


// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot seperating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F


function abbrevName(name){
    let n = name.split(" ");
    return n[0][0].toUpperCase() + "." + n[1][0].toUpperCase();
}

// Risk outcome! attacker is array of dice, defender is array of dice

function battleOutcome( attacker , defender ) {
    let a = attacker.sort(function(a, b){return b - a});
    let d = defender.sort(function(a, b){return b - a});
    
    return ans;
  }

//First non-repeating character! Doesn't work yet.

function firstNonRepeatingLetter(s) {
    let counter = 0;
    let first = "";

    function non (){
        first = s[counter];
        s = s.slice(1);

        if(s.includes(first.toLowerCase) || s.includes(first.toUpperCase)){
            counter++;
            non();
        }
    }

    non();
    return first;
  }

  console.log(firstNonRepeatingLetter('sTReSs'))

  // Function Greet Language! (Welcome, kata 8)

  function greet(l) {

    let lang = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    }
    return lang[l] ? lang[l] :'Welcome'
}

console.log(greet('itlian'))

//   return l==='czech' ? 'Vitejte' : l==='danish' ? 'Velkomst' : l==='dutch'?'Welkom' : l==='estonian' ? 'Tere tulemast'
    //   : l==='finnish' ? 'Tervetuloa' : l==='flemish' ?'Welgekomen' : l==='french' ?'Bienvenue': l==='german' ?'Willkommen'
    //   : l==='irish' ? 'Failte' : l=== 'italian' ?'Benvenuto' :'Welcome' ///first try: ternary statement

// If you can't sleep, just count sheep!

// var countSheep = function (num){
//     let str = "";
//     for ( i = 1; i <= num; i++ ) {
//         str += `${i} sheep...`
//     }
//     return str;
//   }

var countSheep = function (num){
    const answer = [];
    for (i = 0; i < num; i++){
        answer.push(`${i+1} sheep...`)
    }
    return answer.join(' ')
}


  // Mr. Freeze! The whole point of this was to teach us that Object.freeze(obj) is a thing.

  Object.freeze(MrFreeze)


  // Return planet name! The whole point of this was to teach us that switch statements
  // need a "break;" after each case code section.

  function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
        break;
      case 2:
        name = 'Venus'
        break;
      case 3:
        name = 'Earth'
        break;
      case 4:
        name = 'Mars'
        break;
      case 5:
        name = 'Jupiter'
        break;
      case 6:
        name = 'Saturn'
        break;
      case 7:
        name = 'Uranus'
        break;
      case 8:
        name = 'Neptune'
        break;
    }
    
    return name;
  }
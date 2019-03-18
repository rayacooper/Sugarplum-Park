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

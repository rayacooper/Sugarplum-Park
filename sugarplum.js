let shoppingList = [];
shoppingList = [`Turkey Steaks`, `Cheddar Cheese`, `Sushi`];

function deleteItem(arr, item){   
    let itemIndex;  
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                itemIndex = i;  /// Originally had this line as itemIndex = arr[i], but the itemIndex needs just the index # to use for splice method.
            }
        }
        arr.splice(itemIndex, 1);
    }

function addItem(arr, item) {
    arr.push(item);
}

deleteItem(shoppingList, `Sushi`)

addItem(shoppingList, `Jerky`);

console.log(shoppingList)

const names = [`Suzie`, `Ben`, `Mark`, `Franklin`, `Ben`, `Sarah`, `Mark`];

var namesUnique = names.filter(function(item, index){
    return names.indexOf(item) >= index;
});

console.log(namesUnique)

const employees = {
    tom: `designer`,
    chris: `engineer`,
    james: `developer`
}

const employeeNames = [];
const employeeRoles = [];

for (var prop in employees) {
    employeeNames.push(prop);
}

for (var prop in employees) {
    employeeRoles.push(employees[prop])
}

console.log(employeeNames);
console.log(employeeRoles);

const payRoll = {
    sonya: 300,
    estrid: 340,
    kris: 1300,
    sarah: 23
}

for (var prop in payRoll) {
    payRoll[prop] += 100;
}

console.log(payRoll)

var backpack = {
    oldLaptop: `slow`,
    oldLunch: `moldy`,
    pencil: `sharp`
};

const oldBackPackStuff = [`oldLaptop`, `oldLunch`];

for (let i = 0; i < oldBackPackStuff.length; i++) {
    delete backpack[oldBackPackStuff[i]];
}

console.log(backpack)
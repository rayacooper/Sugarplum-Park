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

var namesUnique = names.filter(function(item, index){         /// Here it is!! This function deletes duplicates from an array!!!!
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

const meats = [`salmon`, `beef`, `bacon`, `egg`, `chicken`];

const sandwiches = meats.map(function (e, i, a) {
    return e += ` sandwich`;
})

console.log(sandwiches)

const menuMaker = sandwiches.map(function(e, i) {
    return e = (i + 1) + `: ` + e;
})

console.log(menuMaker)

const hasTunaSandwich = false;

// function nextItem(xs, item) {
//     var found = false;
//     for (var x of xs) {
//       if (found) return x;
//       if (x == item) found = true;
//     }
//     return undefined;
//   }

  function nextItem(a, item) {
    let found = false;
  
    for (let i of a) {
      if (i > (a.length || item + 1)) return;
      
      if (found) {
        return i;
      }
      
      if (i === item) {
        found = true;
        
        if (a.next) {
          return a.next().value;
        }
      }
    }
    
    console.log(a.length);
    return undefined;
  }

function isDivisible(n, x, y) {
    let isdiv = false;
    if (n % x === 0 && n % y === 0) {
        isdiv = true;
      }
    return isdiv;
}
// function isDivisible(n, x, y) {                 Better Solution!!
//     return n % x === 0 && n % y === 0
//   }

function positiveSum(arr) {
    return arr.reduce((sum, e) => {
      if (e > 0) {
        sum += e; 
      }
      return sum;
    }, 0);
  }

  const dummy = [1, 5, -12, 3, -17, 0, 35]; // should be 44
  console.log(positiveSum(dummy))

//   function positiveSum(arr) {                                    Better Way of Writing This Code (Ternary)
//     return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
//  }

  
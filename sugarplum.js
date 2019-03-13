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
    



function isItemAvailable(id, tx) {
  let newArr = tx.filter(obj => {
    return obj['id'] === id;
  })

  let quantity = newArr.reduce((sum, obj) => {
    if (obj.movement === 'in') {
      return sum + obj.quantity;
    } else if (obj.movement === 'out') {
      return sum - obj.quantity;
    }
  }, 0)
  return quantity > 0;
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true
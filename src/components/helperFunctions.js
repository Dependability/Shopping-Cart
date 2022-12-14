function prettifyPrice(price) {
    const newNum = Math.round(price * 100)/100;
    return `$${newNum.toLocaleString()}`
}


function itemTotal(cartItems) {
    return {'quantity':Object.values(cartItems).reduce((prev, current)=> prev + current['quantity'],0),
            'price' :  Object.values(cartItems).reduce((prev, current)=> prev + current['price'] * current['quantity'],0) }
  }
export {prettifyPrice, itemTotal}
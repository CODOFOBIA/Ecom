// console.log('working');
const Cart = Array.from(document.querySelectorAll('.cart'))
// console.log(Cart);

Cart.forEach(c => {
    c.addEventListener('click', () => {
        console.log('clicked');
        let idStr = c.id.toString();
        console.log(idStr);
        if (cart[idStr] != undefined){
            cart[idStr] = cart[idStr] + 1;
        }
        else{
            cart[idStr] = 1;
        }
        console.log(cart);
        localStorage.setItem('cart', JSON.stringify(cart));
    })
});

if (localStorage.getItem('cart') == null){
    var cart = {};
}

else{
    cart = JSON.parse(localStorage.getItem('cart'));
}
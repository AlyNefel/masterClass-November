var cart={}
//cart{product1:{price:10,quantity:0}
//product 2 : {price:20,quntity:20}
//}

function addToCart(name,price){
    console.log( cart)
//if product is not in the cart=>bech nzidou (create)
if(!cart[name]){
cart[name]={price:price,quantity:1}
} else{
    //if exists=>increase the quantity
    cart[name].quantity++
}
displayCartSideBar()
}

//key : product1
//cart.product1.quantity

function increaseQ(test){
    console.log(test)
    console.log(cart)
    cart[test].quantity++
    displayCartSideBar()
}

function decreaseQ(name){
cart[name].quantity--
// if the quantity after -- 0
if(cart[name].quantity ===0){
delete cart[name]
}
displayCartSideBar()
}

function displayCartSideBar(){
    //DomSelector
//1-list of items
var cartList=document.getElementById("cart-list")
//2-total:
var totalSpan=document.getElementById("total")
var total =0
cartList.innerHTML=""
//loop through the cart
for(var name in cart){
   var item = cart[name] // item={price:10,quantity:1}
total+=item.price*item.quantity

//create an li element
var li=document.createElement("li")
li.className="list-group-item"
li.innerHTML=` 
<h4> ${name} </h4>
<h5>unit Price :${item.price} / Quantity : ${item.quantity}</h5>
<button onclick="increaseQ('${name}')" class='btn btn-success'>+</button>

<button onclick="decreaseQ('${name}')" class='btn btn-danger'>-</button>`
//append the created li to the cartList
cartList.appendChild(li)
}

totalSpan.textContent=total

}
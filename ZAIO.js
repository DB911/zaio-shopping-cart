var modal = document.getElementById("myModal");
var btn = document.getElementById("Add To Cart");
var span = document.getElementsByClassName("close")[0];
var total_cost = 0;
var count = 0;
var itemsincart = false;
var control_clear = false;
var control_checkout = false;
var label;
var quantity;
var color_price;

var arraycolor = [];
var arrayprice = [];
var arrayquantity = [];
var checkout_confirmation = false;
var summary_price;
var summary_quantity;
var summary_color;

//This creates the colors and the changes when different colors are selected -->
function myFunction1() {
    document.getElementById("rating").src = "4star.jpg";
    document.getElementById("reviews").innerHTML = "1234 reviews";
    document.getElementById("discountprice").innerHTML = "$13.49";
    document.getElementById("originalprice").innerHTML = "$17.99";
    document.getElementById("discountpercentage").innerHTML = "25% OFF";
    document.getElementById("colorcode").innerHTML = "Firebrick";
}

 //This creates the colors and the changes when different colors are selected -->
function myFunction2() {
    document.getElementById("rating").src = "2star.jpg";
    document.getElementById("reviews").innerHTML = "653 reviews";
    document.getElementById("discountprice").innerHTML = "$10.99";
    document.getElementById("originalprice").innerHTML = "$21.99";
    document.getElementById("discountpercentage").innerHTML = "50% OFF";
    document.getElementById("colorcode").innerHTML = "DarkSlateBlue";
}

 //This creates the colors and the changes when different colors are selected -->
function myFunction3() {
    document.getElementById("rating").src = "5star.jpg";
    document.getElementById("reviews").innerHTML = "2537 reviews";
    document.getElementById("discountprice").innerHTML = "$19.79";
    document.getElementById("originalprice").innerHTML = "$21.99";
    document.getElementById("discountpercentage").innerHTML = "10% OFF";
    document.getElementById("colorcode").innerHTML = "Black";
}

 //This creates the colors and the changes when different colors are selected -->
function myFunction4() {
    document.getElementById("rating").src = "5star.jpg";
    document.getElementById("reviews").innerHTML = "3092 reviews";
    document.getElementById("discountprice").innerHTML = "$19.79";
    document.getElementById("originalprice").innerHTML = "$21.99";
    document.getElementById("discountpercentage").innerHTML = "10% OFF";
    document.getElementById("colorcode").innerHTML = "White";
}

 //This creates the colors and the changes when different colors are selected -->
function myFunction5() {
    document.getElementById("rating").src = "3star.jpg";
    document.getElementById("reviews").innerHTML = "1821 reviews";
    document.getElementById("discountprice").innerHTML = "$13.99";
    document.getElementById("originalprice").innerHTML = "$19.99";
    document.getElementById("discountpercentage").innerHTML = "30% OFF";
    document.getElementById("colorcode").innerHTML = "Chocolate";
}

 //This creates the colors and the changes when different colors are selected -->
function myFunction6() {
    document.getElementById("rating").src = "3star.jpg";
    document.getElementById("reviews").innerHTML = "728 reviews";
    document.getElementById("discountprice").innerHTML = "$13.49";
    document.getElementById("originalprice").innerHTML = "$17.99";
    document.getElementById("discountpercentage").innerHTML = "25% OFF";
    document.getElementById("colorcode").innerHTML = "Goldenrod";
}
 

 //This creates the colors and the changes when different colors are selected -->
function myFunction7() {
    document.getElementById("rating").src = "4star.jpg";
    document.getElementById("reviews").innerHTML = "892 reviews";
    document.getElementById("discountprice").innerHTML = "$13.49";
    document.getElementById("originalprice").innerHTML = "$17.99";
    document.getElementById("discountpercentage").innerHTML = "25% OFF";
    document.getElementById("colorcode").innerHTML = "MidnightBlue";
}
 

 //This creates the colors and the changes when different colors are selected -->
function myFunction8() {
    document.getElementById("rating").src = "1star.jpg";
    document.getElementById("reviews").innerHTML = "212 reviews";
    document.getElementById("discountprice").innerHTML = "$5.69";
    document.getElementById("originalprice").innerHTML = "$18.99";
    document.getElementById("discountpercentage").innerHTML = "70% OFF";
    document.getElementById("colorcode").innerHTML = "SlateGrey";
}
 

 //This creates the colors and the changes when different colors are selected -->
function myFunction9() {
    document.getElementById("rating").src = "4star.jpg";
    document.getElementById("reviews").innerHTML = "563 reviews";
    document.getElementById("discountprice").innerHTML = "$15.29";
    document.getElementById("originalprice").innerHTML = "$17.99";
    document.getElementById("discountpercentage").innerHTML = "15% OFF";
    document.getElementById("colorcode").innerHTML = "Cornsilk";
}
 

 //This creates the colors and the changes when different colors are selected -->
function myFunction10() {
    document.getElementById("rating").src = "5star.jpg";
    document.getElementById("reviews").innerHTML = "1832 reviews";
    document.getElementById("discountprice").innerHTML = "$13.49";
    document.getElementById("originalprice").innerHTML = "$17.99";
    document.getElementById("discountpercentage").innerHTML = "25% OFF";
    document.getElementById("colorcode").innerHTML = "LightSkyBlue";
}
 

 //This creates the colors and the changes when different colors are selected -->
function myFunction11() {
    document.getElementById("rating").src = "3star.jpg";
    document.getElementById("reviews").innerHTML = "457 reviews";
    document.getElementById("discountprice").innerHTML = "$13.99";
    document.getElementById("originalprice").innerHTML = "$19.99";
    document.getElementById("discountpercentage").innerHTML = "30% OFF";
    document.getElementById("colorcode").innerHTML = "YellowGreen";
}
 

 //This creates the colors and the changes when different colors are selected -->
function myFunction12() {
    document.getElementById("rating").src = "2star.jpg";
    document.getElementById("reviews").innerHTML = "231 reviews";
    document.getElementById("discountprice").innerHTML = "$8.79";
    document.getElementById("originalprice").innerHTML = "$15.99";
    document.getElementById("discountpercentage").innerHTML = "45% OFF";
    document.getElementById("colorcode").innerHTML = "MediumVioletRed";
}
 

 //This creates the colors and the changes when different colors are selected -->
function myFunction13() {
    document.getElementById("rating").src = "4star.jpg";
    document.getElementById("reviews").innerHTML = "1287 reviews";
    document.getElementById("discountprice").innerHTML = "$20.69";
    document.getElementById("originalprice").innerHTML = "$22.99";
    document.getElementById("discountpercentage").innerHTML = "10% OFF";
    document.getElementById("colorcode").innerHTML = "Moccasin";
}
 

 //This creates the colors and the changes when different colors are selected -->
function myFunction14() {
    document.getElementById("rating").src = "1star.jpg";
    document.getElementById("reviews").innerHTML = "2981 reviews";
    document.getElementById("discountprice").innerHTML = "$3.79";
    document.getElementById("originalprice").innerHTML = "$18.99";
    document.getElementById("discountpercentage").innerHTML = "80% OFF";
    document.getElementById("colorcode").innerHTML = "DarkOliveGreen";
}
 

 //This creates the colors and the changes when different colors are selected -->
function myFunction15() {
    document.getElementById("rating").src = "2star.jpg";
    document.getElementById("reviews").innerHTML = "452 reviews";
    document.getElementById("discountprice").innerHTML = "$13.79";
    document.getElementById("originalprice").innerHTML = "$22.99";
    document.getElementById("discountpercentage").innerHTML = "40% OFF";
    document.getElementById("colorcode").innerHTML = "DimGray";
}
 

 //This creates the colors and the changes when different colors are selected -->
function myFunction16() {
    document.getElementById("rating").src = "4star.jpg";
    document.getElementById("reviews").innerHTML = "758 reviews";
    document.getElementById("discountprice").innerHTML = "$11.39";
    document.getElementById("originalprice").innerHTML = "$18.99";
    document.getElementById("discountpercentage").innerHTML = "40% OFF";
    document.getElementById("colorcode").innerHTML = "SaddleBrown";
}
 

 //This creates the colors and the changes when different colors are selected -->
function myFunction17() {
    document.getElementById("rating").src = "5star.jpg";
    document.getElementById("reviews").innerHTML = "905 reviews";
    document.getElementById("discountprice").innerHTML = "$11.39";
    document.getElementById("originalprice").innerHTML = "$18.99";
    document.getElementById("discountpercentage").innerHTML = "40% OFF";
    document.getElementById("colorcode").innerHTML = "Aquamarine";
}
 

 //This creates the colors and the changes when different colors are selected -->
function myFunction18() {
    document.getElementById("rating").src = "3star.jpg";
    document.getElementById("reviews").innerHTML = "569 reviews";
    document.getElementById("discountprice").innerHTML = "$13.49";
    document.getElementById("originalprice").innerHTML = "$17.99";
    document.getElementById("discountpercentage").innerHTML = "25% OFF";
    document.getElementById("colorcode").innerHTML = "Gainsboro";
}

//Increase Quantity of Item when the "Add to Cart" button is clicked
function Increase()
{
    let quantity = document.getElementById("quantity").innerHTML;
    document.getElementById("quantity").innerHTML = ++quantity;
}

//Decrease Quantity of Item when the "Add to Cart" button is clicked
function Decrease()
{
    let quantity = document.getElementById("quantity").innerHTML;
    if(quantity>0){
        document.getElementById("quantity").innerHTML = --quantity;
    }

}

//Changes the value in custom fit to the final color quantity
//Ensures that the "Clear Cart" button and "Checkout" button are displayed and duplicates are not made with multiple clicks
//Adds values to array that is used in the Summary of Checkout
//Calls function to display the total quantity and number of items in the cart
function Agree(){

    document.getElementById("quantity-btn").innerText =  document.getElementById("quantity").innerHTML;
    ColorAddition(document.getElementById("colorcode").innerHTML ,document.getElementById("quantity-btn").innerText, 'Details');

    if (control_checkout === false)
    {
        ButtonAddition();
        CreateLabels();
        control_checkout = true;
    }

    if (control_clear === false)
    {
        CreateClear();
        control_clear = true;
    }

    arraycolor.push(document.getElementById("colorcode").innerHTML);
    arrayprice.push(document.getElementById("discountprice").innerText);
    arrayquantity.push(document.getElementById("quantity-btn").innerText);

    quantity = parseInt(document.getElementById("quantity-btn").innerText);
    color_price = parseFloat(document.getElementById("discountprice").innerText.replace("$", ""));
    ChangeLabels(quantity, color_price);

    itemsincart = true;

}

//Add the buttons colors in the "Details" Section of the page, based on the color and quantity selected by user, appends the information to the div section of html
function ColorAddition (Color, Quantity, Section)
{
    let div = document.createElement('div');
    for (loop = 0; loop < Quantity; loop++)
    {
        var button = document.createElement('button');
        button.disabled = true;
        button.className = "Color_Addition";
        button.style.backgroundColor = Color;
        div.appendChild(button);
    }
    document.getElementById(Section).appendChild(div);
}

//Creates a button for "Checkout" once items have been added to the cart, with an onclick event, appended to the details section
function ButtonAddition()
{
    var checkout = document.createElement('button');
    checkout.className = "CheckOut";
    checkout.id = "CheckOut";
    checkout.innerHTML = "Check Out";
    checkout.setAttribute("onclick", "CheckOut()");
    document.getElementById("CheckingOut").appendChild(checkout);
}

//Removes all elements in the "Detail" section
//Calls the DeleteSummary() function
function ClearList()
{
    let removediv = document.getElementById("Details");
    do
    {
        removediv.removeChild(removediv.firstChild);
    }while (removediv.firstChild);

    removediv = document.getElementById("CheckingOut");
    do
    {
        removediv.removeChild(removediv.firstChild);
    } while (removediv.firstChild);

    document.getElementById("quantity-btn").innerText = "0";
    total_cost = 0;
    count = 0;
    itemsincart = false;
    control_checkout = false;
    checkout_confirmation = false;

    ClearSummary();
    DeleteSummary();


}

//The onclick Event for the CheckOut button which creates the summary in the popup modal
function CheckOut()
{
    document.getElementById("TotalPrice").innerText = "PAY $: "+ total_cost.toFixed(2);

    $("#CheckoutModalCenter").modal('toggle'); // Associates the data-toggle function for the created button "Checkout"

    if (checkout_confirmation === false)
    {
        for (var loop = 0; loop < arrayprice.length; loop++)
        {
            CreateSummary(arraycolor[loop], arrayquantity[loop], arrayprice[loop]);
        }
    }

}

//Reloads page
function Confirm()
{
    setTimeout(10000);
    document.location.reload();
}

//This creates the labels for the Total Price and the Number of Items in the Cart
function CreateLabels()
{
    var price = document.createElement('label');
    price.innerText = "Total Cost: $0";
    price.className = "CartLabel";
    price.id = "CartPrice";
    document.getElementById("CheckingOut").appendChild(price);

    var label = document.createElement('label');
    label.innerText = "Items in Cart: 0";
    label.className = "CartLabel";
    label.id = "CartLabel";
    document.getElementById("CheckingOut").appendChild(label);
}

//Creates the "Clear Cart" button which has an event which clears all the info under the "Details" section
function CreateClear()
{
    var clearbutton = document.createElement('button');
    clearbutton.className = "Clear";
    clearbutton.id = "ClearButton";
    clearbutton.innerHTML = "Clear Cart";
    clearbutton.setAttribute("onclick", "ClearList()");
    document.getElementById("Add/Clear").appendChild(clearbutton);
}

//Updates the labels of the number of items in the cart and the total price
function ChangeLabels(Quantity, Price)
{
    total_cost = parseFloat(total_cost + parseFloat(Quantity * Price));
    document.getElementById("CartPrice").innerText = "Total Cost: $"+total_cost.toFixed(2);

    count = parseFloat(count + parseFloat(Quantity));
    document.getElementById("CartLabel").innerText = "Items in Cart: "+ count;
}

//This is the summary of the Checkout phase containing the color, quantity and price, and places them in the div section
function CreateSummary(Color, Quantity, Price)
{
    let div = document.createElement('div');
    div.id = "Summary Div";
    summary_color = document.createElement('label');
    summary_color.innerText = Color;
    summary_color.className = "SummaryLabel";
    div.appendChild(summary_color);

    summary_quantity = document.createElement('label');
    summary_quantity.innerText = Quantity;
    summary_quantity.className = "SummaryLabel";
    div.appendChild(summary_quantity);

    summary_price = document.createElement('label');
    summary_price.innerText = Price;
    summary_price.className = "SummaryLabel";
    div.appendChild(summary_price);

    document.getElementById("Summary").append(div);
}

//Uses the DeleteSummary() function
function Cancel()
{
    DeleteSummary();
    ClearSummary();
    arraycolor = [];
    arrayquantity = [];
    arrayprice = [];
}

//Deletes the items in the array used in creating the summary of checkout
function DeleteSummary()
{
    for (var loop = 0; loop < arrayprice.length; loop++)
    {
        arrayprice[loop].pop();
        arrayquantity[loop].pop();
        arraycolor[loop].pop();
    }
}

//It is meant to clear the summary of the cart when checking out
function ClearSummary()
{
    let remove = document.getElementById("Summary Div");
    remove.remove();
}

document.querySelector(".trigger").onclick();








 


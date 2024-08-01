//select elemnt by id and adding some style
let headerTag = document.getElementById("sebid")
headerTag.style.backgroundColor="red";
headerTag.style.fontSize="24px";
headerTag.style.fontWeight="400";
headerTag.style.color="white";
//selecting element by class name 
let txt = document.getElementsByClassName("sebcn")
for(let i=0;i<txt.length;i++){
    txt[i].style.backgroundColor="red";
    txt[i].style.fontSize="16px";
    txt[i].style.fontWeight="400"
    txt[i].style.color="white";
}
//selecting elemnt by tag name
let textTag =document.getElementsByTagName("h3")
for(let i=0;i<textTag.length;i++){
    textTag[i].style.backgroundColor="red";
    textTag[i].style.fontSize="24px";
    textTag[i].style.fontWeight="400";
    textTag[i].style.color="white";
    textTag[i].style.border="2px solid black"
}
//selecting element by query sector
let nestedParagraph = document.querySelector(".container")
nestedParagraph.style.backgroundColor="red";
nestedParagraph.style.fontSize="16px";
nestedParagraph.style.fontWeight="400";
nestedParagraph.style.color="white";
//selecting elements by querysellectorall
let nestedItem = document.querySelectorAll(".item")
nestedItem.forEach((nestedItem) => {
    nestedItem.style.backgroundColor="red";
    nestedItem.style.fontSize="16px";
    nestedItem.style.fontWeight="400";
    nestedItem.style.color="white";
    nestedItem.style.border="2px solid black"
})
//changing style of selected element 
let quoteElement = document.getElementById('favoriteQuote');
quoteElement.style.color = 'white';
quoteElement.style.fontSize = '20px';
quoteElement.style.margin="20px";
quoteElement.style.padding = '20px';
quoteElement.style.border = '2px solid darkblue';
quoteElement.style.backgroundColor = 'red';
quoteElement.style.borderRadius = '10px';

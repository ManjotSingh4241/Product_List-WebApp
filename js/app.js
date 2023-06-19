/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Heavendeep Kaur Munjal
 *      Student ID: 161875216
 *      Date:       22 July 2022
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// making arrays for categories
let Chocolates = [];
let HardCandy = [];
let CottnCandy = [];

for (let i = 0; i < products.length; i++) {
    products[i].categories.forEach(function (element) {
      if (element === "Chocolates" && products[i].discontinued === false) {
        Chocolates.push(products[i].description);
      } else if (element === "Hard Candy" && products[i].discontinued === false) {
        HardCandy.push(products[i].description);
      } else if (element === "Cotton Candy" && products[i].discontinued === false) {
        CottnCandy.push(products[i].description);
      }
    });
  }

  let menu = document.getElementById("menu");
for (let i = 0; i < categories.length; i++) {
  let newMenuItem = document.createElement("button");
  newMenuItem.textContent = categories[i].name;
  newMenuItem.id = categories[i].name;
  menu.appendChild(newMenuItem);
}

function descPrint(category) {

    let tableRows = document.getElementsByClassName("table-rows");
  
    if (category === "Chocolates") {
                                         for (let i = 0; i < Chocolates.length; i++) {
         tableRows[i].addEventListener("click", function () {
              console.log(Chocolates[i]);
        });
      }
    } else if (category === "Hard Candy") 
    {
      for (let i = 0; i < HardCandy.length; i++) 
      {
        tableRows[i].addEventListener("click", function () {
          console.log(HardCandy[i]);
        });
      }
    } else if (category === "Cotton Candy")
     {
      for (let i = 0; i < CottnCandy.length; i++)
       {
        tableRows[i].addEventListener("click", function () {
          console.log(CottnCandy[i]);
        });
      }
    }
  }

function Cells(category) {
    var text, Row, Cell;
    var bodyReference = document.getElementById("category-products");
   
  
    for (let i = 0; i < products.length; i++) {
      
      document.createElement('tr');
  
      products[i].categories.forEach(function (element) {
        if (element === category && products[i].discontinued === false) {
          Row = bodyReference.insertRow();
          Row.className = "table-rows";
          Cell = Row.insertCell();
          text = document.createTextNode(products[i].title);
          Cell.appendChild(text);
          Cell = Row.insertCell();
          Cell.id = i;
          text = document.createTextNode(products[i].description);
          Cell.appendChild(text);
          Cell = Row.insertCell();
          text = document.createTextNode
          (
            (products[i].price / 100).toLocaleString("en-CA", { currency: "CAD", style: "currency" })); 
          Cell.appendChild(text);
        }
      });
    }
  }
  
// function for product list
function ProductList(category) {
  
    document.getElementById("category-products").innerHTML = "";
                                            for (let h = 0; h < categories.length; h++) {
                                                  if (categories[h].name === category) {
                                                category = categories[h].id;
      }
    }
  
   
    Cells(category); des
    descPrint(category);
  }
  let menuArr = document.querySelector("#menu").querySelectorAll("button");
  for (let i = 0; i < menuArr.length; i++) {
 menuArr[i].addEventListener("click", function () {
                                                     document.getElementById("selected-category").innerHTML = menuArr[i].textContent;
                                                     ProductList(menuArr[i].textContent);
    });
  }
    

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

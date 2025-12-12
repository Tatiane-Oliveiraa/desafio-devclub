const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonMapAll = document.querySelector(".map-all");
const buttonSumAll = document.querySelector(".sum-all");
const buttonFilterVegan = document.querySelector(".filter-vegan");
let myLi = "";

function formatCurrency(value) {
    const newValue = value.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
    });
    return newValue;
}   

function showAll(productsArray) {
    myLi = ""; // Reset para evitar acumulação
    productsArray.forEach((product) => {
    myLi += `
                <li>
                        <img src="${product.src}" alt="${product.name}">
                        <p>${product.name}</p>
                        <p class="item-price">R$${formatCurrency(product.price)}</p>
                </li>
        `;
  });
  
  list.innerHTML = myLi;
}




function mapAll() {
    const newPrices = menuOptions.map((product) => {
        return {
            ...product,
            price: product.price * 0.9
        };
    });

    showAll(newPrices);
}

function sumAll() {
    const productSum = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
        <li>
            <p>O valor total dos produtos é R$ ${formatCurrency(productSum)}</p>
        </li>
    `

}


function filterVegan() {
    const veganProducts = menuOptions.filter((product) => {
        if (product.vegan) {
            return true
        }else {
            return false
        }
    }) 

    showAll(veganProducts)
}





buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonMapAll.addEventListener("click", mapAll);
buttonSumAll.addEventListener("click", sumAll);
buttonFilterVegan.addEventListener("click", filterVegan);
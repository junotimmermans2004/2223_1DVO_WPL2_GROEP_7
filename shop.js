// FILTER
let filter = (filterClass) => {
    const cards = document.getElementsByClassName("col-md-4");
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].classList.contains(filterClass)) {
            cards[i].classList.remove("d-none");
        } else {
            cards[i].classList.add("d-none");
        }
    }
};

let clearAll = () => {
    cards = document.getElementsByClassName("col-md-4");
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove("d-none");
    }

};

// SHOPPING CART

let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("shop")) || [];


// Shop items
let shopItemsData = [
    {
        id: "jfhgbvnscs",
        name: "Vitalis drinkfles",
        price: 45,
        desc: "De perfecte drinkfles om mee te sporten met een rubbere buitenkant en metalic vitalis logo",
        img: "Assets/vitalis_product_drinkfles.png",
    },

];


let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            let { id, name, price, desc, img } = x;
            let search = basket.find((x) => x.id === id) || [];
            return `
        <div class="col-md-4 p-2 Accessoires">
            <div class="card rounded-3">
              <img src=${img} class="card-img-top" alt="">
              <div class="card-body boxshadow">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${desc}</p>
                <div class="card-footer d-flex justify-content-between align-items-center">
                  <button onclick="increment(${id})" class="btn btn-secondary quantity"><i class="bi bi-plus"></i></button>
                  <div id=${id} class="quantity">
              ${search.item === undefined ? 0 : search.item}
              </div>
                  <p class="m-0 prijs">€ ${price}</p>
                </div>
              </div>
            </div>
          </div>
    `;


        })
        .join(""));
};

generateShop();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        search.item += 1;
    }

    // console.log(basket);
    update(selectedItem.id);
    localStorage.setItem("shop", JSON.stringify(basket));
};
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
        search.item -= 1;
    }
    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0);
    // console.log(basket);
    localStorage.setItem("shop", JSON.stringify(basket));
};
let update = (id) => {
    let search = basket.find((x) => x.id === id);
    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
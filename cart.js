let ShoppingCart = document.getElementById("shopping-cart");
let label = document.getElementById("label");

/**
 * ! Basket to hold all the selected items
 * ? the getItem part is retrieving data from the local storage
 * ? if local storage is blank, basket becomes an empty array
 */

let basket = JSON.parse(localStorage.getItem("shop")) || [];

// /**
//  * ! To calculate total amount of selected Items
//  */

let calculation = () => {
  let cartIcon = document.getElementById('cartAmount');
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

/**
 * ! Generates the Cart Page with product cards composed of
 * ! images, title, price, buttons, & Total price
 * ? When basket is blank -> show's Cart is Empty
 */

// Shop items
let shopItemsData = [
  {
    id: "jfhgbvnscs",
    name: "Vitalis drinkfles",
    price: 20,
    desc: "De perfecte drinkfles om mee te sporten met een rubber exterieur en een metalic vitalis logo",
    img: "Assets/vitalis_product_drinkfles.png",
    category: "Accessoires",
  },
  {
    id: "sdfsfsfsdf",
    name: "Macha Drink mix",
    price: 27,
    desc: "Super gezond, lekker en ook nog makkelijk te bereiden.",
    img: "Assets/vitalis_product_macha.png",
    category: "Voeding",
  },
  {
    id: "sdfsfhhhhhh",
    name: "Plant powered protein",
    price: 22,
    desc: "enorm rijk aan proteïne en erg belangrijk bij een veganistisch dieet.",
    img: "Assets/vitalis_product_protien.png",
    category: "Voeding",
  },
  {
    id: "hhhhhhhh",
    name: "Superfood blend",
    price: 22,
    desc: "Een superfood boordevol plantenextracten, ter ondersteuning van je immuunsysteem",
    img: "Assets/vitalis_product_suplement3.png",
    category: "Voeding",
  },
  {
    id: "jjjjjjjj",
    name: "Organic Superfood blend",
    price: 22,
    desc: "Biologische groene superfood met vitaminen, mineralen, chlorofyl en vele phytonutriënten.",
    img: "Assets/vitalis_product_suplement4.png",
    category: "Voeding",
  },
  {
    id: "ttttttt",
    name: "Aronia Poeder",
    price: 22,
    desc: "Aronia Poeder bevat 100% biologische appelbes. Rijk aan antioxidanten",
    img: "Assets/vitalis_product_suplement5.png",
    category: "Voeding",
  },
  {
    id: "szertyui",
    name: "Plant powered maca",
    price: 22,
    desc: "Maca is een echte superfood. beschikbaar in poedervorm of als supplement.",
    img: "Assets/vitalis_product_suplement6.png",
    category: "Voeding",
  },
  {
    id: "ujnngfffd",
    name: "Energie en focus supplementen",
    price: 22,
    desc: "Energie en focus heb je nodig om je dagelijkse leven te leiden.",
    img: "Assets/vitalis_product_vitaminen.png",
    category: "Sport",
  },
  {
    id: "aqsdfghj",
    name: "Omega 3 supplementen",
    price: 22,
    desc: "Omega-3 vetzuren spelen een rol in het ondersteunen van hart en bloedvaten.",
    img: "Assets/vitalis_product_vitaminen2.png",
    category: "Voeding",
  },
  {
    id: "pmlkjhbc",
    name: "Immune support supplementen",
    price: 22,
    desc: "Geef je immuunsysteem een boost!",
    img: "Assets/vitalis_product_vitaminen3.png",
    category: "Voeding",
  },
  {
    id: "zsdrfghj",
    name: "Vitaminen B12 supplementen",
    price: 22,
    desc: "Vitamine B12 voor de aanmaak van rode bloedcellen en een goede werking van het zenuwstelsel.",
    img: "Assets/vitalis_product_vitaminen4.png",
    category: "Voeding",
  },
  {
    id: "koijfijfsd",
    name: "Vitamine C supplementen",
    price: 22,
    desc: "Vitamine C is essentieel om je immuunsysteem aan te sterken en je gezondheid op peil te houden.",
    img: "Assets/vitalis_product_vitaminen5.png",
    category: "Voeding",
  },
  {
    id: "fkdgjisfdjgifjd",
    name: "Sleep & destress supplementen",
    price: 22,
    desc: "Sleep & destress helpt je bij het sneller in slaap vallen, het doorslapen én heeft een rustgevend effect.",
    img: "Assets/vitalis_product_vitaminen6.png",
    category: "Voeding",
  },
  // Voeg hier andere producten toe met hun categorieën
];






let generateCartItems = () => {
  if (basket.length !== 0) {
    return ShoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = shopItemsData.find((itemData) => itemData.id === id);
        let { img, price, name } = search;
        return `
     
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex flex-row align-items-center">
<!--                        Afbeelding-->
                        <div>
                          <img
                                  src="${img}"
                                  class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
                        </div>
<!--                        Titel en info-->
                        <div class="ms-3">
                          <h5>${name}</h5>
<!--                          <p class="small mb-0">256GB, Navy Blue</p>-->
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center">
                        <div style="width: 50px;">
                          <div id=${id} class="quantity">${item}</div>
                        </div>
                        <div style="width: 80px;">
                          <h5 class="mb-0">€ ${price}</h5>
                        </div>
<!--                        <a href="#!" style="color: #cecece;"><i class="fas fa-trash-alt"></i></a>-->

                        <div class="cart-buttons">
                          <div class="buttons">
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
<!--                            <div id=${id} class="quantity">${item}</div>-->
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>


                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                



      `;

      })

      .join("");
  }
  else {
    ShoppingCart.innerHTML = "";
    label.innerHTML = `
<!--    <h2>Uw winkelmandje is leeg</h2>-->
<!--    <a href="index.html">-->
<!--      <button class="HomeBtn">Terug naar home</button>-->
<!--    </a>-->
  `;

    // Code voor het genereren van de script binnen de "card mb-3" div
    const shoppingCartContainer = document.getElementById("shopping-cart");
    shoppingCartContainer.innerHTML = `
    <div class="card-body">
      <p class="card-text">Uw winkelmandje is leeg.</p>
      <a href="index.html" class="btn btn-primary">Terug naar home</a>
    </div>
  `;
  }

};

generateCartItems();

/**
 * ! used to increase the selected product item quantity by 1
 */

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

  generateCartItems();
  update(selectedItem.id);
  localStorage.setItem("shop", JSON.stringify(basket));
};

/**
 * ! used to decrease the selected product item quantity by 1
 */

let decrement = (id) => {
  let selectedItem = id, search = basket.find((x) => x.id === selectedItem.id);
  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  generateCartItems();
  localStorage.setItem("shop", JSON.stringify(basket));
};

/**
 * ! To update the digits of picked items on each item card
 */

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};

/**
 * ! Used to remove 1 selected product card from basket
 * ! using the X [cross] button
 */

let removeItem = (id) => {
  let selectedItem = id;
  basket = basket.filter((x) => x.id !== selectedItem.id);
  calculation();
  generateCartItems();
  TotalAmount();
  localStorage.setItem("shop", JSON.stringify(basket));
};

// /**
//  * ! Used to calculate total amount of the selected Products
//  * ! with specific quantity
//  * ? When basket is blank, it will show nothing
//  */

let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
        .map((x) => {
          let { id, item } = x;
          let filterData = shopItemsData.find((x) => x.id === id);
          return filterData.price * item;
        })
        .reduce((x, y) => x + y, 0);

    let totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.innerHTML = `Totaal: € ${amount}`;
  }
};

TotalAmount();

let clearCart = () => {
  basket = [];
  localStorage.removeItem("shop");
  generateCartItems();
  calculation();
  TotalAmount();
};










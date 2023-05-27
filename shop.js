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
    const cards = document.getElementsByClassName("col-md-4");
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


let generateShop = () => {
    return shop.innerHTML = shopItemsData
        .map((x) => {
            let { id, name, price, desc, img, category } = x;
            let search = basket.find((x) => x.id === id) || [];
            return `
                <div class="col-md-4 p-2 ${category}">
            <div class="card rounded-3">
              <img src=${img} class="card-img-top" alt="">
              <div class="card-body boxshadow">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${desc}</p>
                <div class="card-footer d-flex justify-content-between align-items-center">
                  <button onclick="increment('${id}')" class="btn btn-secondary quantity"><i class="bi bi-plus"></i></button>
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
        .join("");
};

generateShop();

let increment = (id) => {
    let selectedItem = basket.find((x) => x.id === id);

    if (selectedItem === undefined) {
        basket.push({
            id: id,
            item: 1,
        });
    } else {
        selectedItem.item += 1;
    }

    update(id);
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


// dit doet de shoping cart fatsoenlijk werken voor een of andere reden :/
window.addEventListener('DOMContentLoaded', () => {
    localStorage.removeItem('shop');
});







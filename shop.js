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

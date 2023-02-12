let basket = localStorage.getItem('basket');

if (basket) {
    basket = JSON.parse(basket);

    let itemExists = false;
    for (let i = 0; i < basket.length; i++) {
        if (basket[i].id === selectedItem.id) {
            basket[i].qtd++;
            itemExists = true;
            break;
        }
    }

    if (!itemExists) {
        basket.push(selectedItem);
    }
} else {
    basket = [selectedItem];
}

localStorage.setItem('basket', JSON.stringify(basket));



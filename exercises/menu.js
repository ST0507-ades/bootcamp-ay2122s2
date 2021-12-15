function createMenu() {
    return [];
}

function addItem(menu, item) {
    menu.push(item);
}

function getItems(menu) {
    return menu;
}

function createItem(title, price) {
    return [title, price];
}

function getTitle(item) {
    return item[0];
}

function getPrice(item) {
    return item[1];
}

function changeTitle(item, newTitle) {
    item[0] = newTitle;
}

function changePrice(item, newPrice) {
    item[1] = newTitle;
}

/**
 *
 * @param {Menu} menu
 * @param {array of Item} items
 */
function addItems(menu, items) {
    for (let i = 0; i < items.length; i++) {
        addItem(menu, items[i]);
    }
}

function printMenu(menu) {
    const items = getItems(menu); //
    for (let i = 0; i < items.length; i++) {
        // 1. item 1 ($1)
        console.log(`${i + 1}. ${getTitle(items[i])} ($${getPrice(items[i])})`);
    }
}

const M = createMenu();
const I1 = createItem('item 1', 1);
const I2 = createItem('item 2', 2);
const I3 = createItem('item 3', 3);
const I4 = createItem('item 4', 4);
addItems(M, [I1, I2, I3, I4]);
printMenu(M);

/**
 * 1. item 1 ($1)
 * 2. item 2 ($2)
 * 3. item 3 ($3)
 * 4. item 4 ($4)
 */

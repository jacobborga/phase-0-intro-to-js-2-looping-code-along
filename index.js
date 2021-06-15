// Code your solutions in this file
function writeCards(names, adjective) {
    const cards = [];
    for (let i = 0; i < names.length; i++) {
        cards[i] = `Thank you, ${names[i]}, for the wonderful ${adjective} gift!`;
    }
    return cards;
}

function countDown(n) {
    while (n >= 0) {
        console.log(n);
        n -= 1;
    }
}
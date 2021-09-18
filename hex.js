const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const btn = document.querySelector(".btn");
const colorSpan = document.querySelector(".color");

btn.addEventListener("click", function() {
    let hexColor = "#";
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNum()];
    }
    colorSpan.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})


function getRandomNum() {
    return Math.floor(Math.random() * hex.length);
}







                                    /* My solution */


// let randomIndex = ""; /* To find random Index of one item of the array (e.g. 0 - 15)*/
// let randomItem = ""; /* To find the item with this index (e.g. 0 - "F") */
// let randomHex = ""; /* To store the generated HexColor */

// function getRandomHex() {
//     for(let i = 0; i < 6; i++) {
//     randomIndex = Math.floor(Math.random() * hex.length);
//     randomItem = hex[randomIndex];
//     randomHex += randomItem;
//     }
// /* Generated a random Hex by going through the loop 6 times and storing it in randomHex */


//     if(randomHex.length > 6) {
//         randomHex = randomHex.slice(6, 12);
//     }

// /* Numbers are going to accumulate in sixs, so in case the number consists of 12 digits, we need to slice the previously generated one and leave the new one, and so on*/
//     randomHex = `#${randomHex}`;
//     return randomHex;
// }

// btn.addEventListener("click", function() {
//     colorSpan.textContent = getRandomHex();
//     document.body.style.backgroundColor = getRandomHex();
// })










































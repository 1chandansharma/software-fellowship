let fruits = []
function addFruit(name, isFav) {
    let fruit = {
        name: name,
        fav: isFav
    };
    fruits.push(fruit)
}
function showFruits() {
    for (let i = 0; i < fruits.length; i++) {
        let fruit = fruits[i]
        let isFav = fruit.fav ? "Favourite" : " "
        console.log("------Fruits-------")
        console.log(`${i + 1} ${fruit.name} ${isFav}`)
    }
}

function showFav() {
    console.log("-----Fav Fruit-------")
    fruits.forEach(function (fruit, index) {
        if (fruit.fav) {
            console.log(`${fruit}`)
        }
    })
}

addFruit("Mango", true)
addFruit("Banana", false)
addFruit("Avocado", false)

showFruits()
showFav()
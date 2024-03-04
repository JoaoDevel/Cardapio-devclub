const list = document.querySelector(".menu-items")
const buttonShowAll = document.querySelector(".show-all")
const buttonShowMap = document.querySelector(".show-map")
const buttonShowReduce = document.querySelector(".show-reduce")
const buttonShowFilter = document.querySelector(".show-filter")

function  showAll(productArray) {

    let myList = ""

   productArray.forEach( products => {

     
    myList += `
       <div>
            <img src=${products.src}>
            <p>${products.name}</p>
            <p>R$ ${products.price}</p>
        </div>
       ` 

   })

   list.innerHTML = myList
   

}

function mapAllItems() {

    const newPrice = menuOptions.map( product => ({

       
        name: product.name,
        price: product.price * 0.9,
        vegan: product.vegan,
        src: product.src,

        
    
    }))

    showAll(newPrice)

}

function sumAllItems() {

    const totalValue = menuOptions.reduce( (acc, product) => {

        return acc + product.price

    }, 0)

    list.innerHTML = `
                    <div>
                        
                        <p>O valor total dos Items  é R$ ${totalValue.toFixed(2)}</p>
                        
                    </div>
                    `
    

}

function filterVegan() {

    const filterItems = menuOptions.filter( product => {

        return product.vegan === true

    })

    showAll(filterItems)

}

buttonShowFilter.addEventListener("click", filterVegan)
buttonShowReduce.addEventListener("click", sumAllItems)
buttonShowAll.addEventListener("click", () => showAll(menuOptions))
buttonShowMap.addEventListener("click", mapAllItems)



// Toggle

const toggle = document.querySelector('#header-toggle')
const nav = document.querySelector('.nav')


toggle.addEventListener('click' , ()=> {
    nav.classList.toggle('show_menu')
    toggle.classList.toggle('bx-x')
})


const navLink = document.querySelectorAll('.nav_link')



let itemAction = (selectedItem) => {
    navLink.forEach(item => {
        item.classList.remove('active')
    })
    selectedItem.classList.add('active')    
}



navLink.forEach(n => {
    n.addEventListener('click', itemAction(n))
})



//rendering


let root1 = document.getElementById('root1')
let root = document.getElementById('root')
const market = document.getElementById('market')



let createLogo = () => {
let onurLogo = `
    <div class="container">
        <div class="row row-cols-2 justify-content-center">
            <div class="col onur-logo">Onur</div>
        </div>  
    </div>
`
root1.innerHTML = onurLogo
}


let createProduct = (pro) => {
    
let product = `
    <div class="col-6">
        <div class="card">
        <img src= ${pro[3]} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title onur">Onur Market</h5>
                <p class="card-text">${pro[0]}</p>
                <div class="price" >
                <p class="card-text offprice">${pro[1]} ₺</p>
                <p class="card-text onprice">${pro[2]} ₺</p>
                </div>
            </div>
        </div>
    </div> 
`

root.innerHTML += product
}



let cnt = document.createElement('div')
cnt.className = "container"

let row = document.createElement('div')
row.className = "row"





market.addEventListener('click', ()=> {
    root.innerHTML = ''
    createLogo()
    
    for(let key in products){
        let pro = products[key]
           createProduct(pro)
     }
     row.appendChild(root)
    cnt.appendChild(row)
    root1.appendChild(cnt)
})

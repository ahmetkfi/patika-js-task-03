const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://thewoksoflife.com/wp-content/uploads/2014/11/dan-dan-noodles-12.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];
const categorys = ["All", "Korea", "Japan", "China"]
let btnContainerDOM = document.querySelector('.btn-container')
let sectionCenterDOM = document.querySelector('.section-center', '.row')
//butonları oluşturuyoruz
for (let i = 0; i < categorys.length; i++) {
  let btnDom = document.createElement('button')
  btnDom.innerHTML = categorys[i]
  btnDom.id = categorys[i]
  btnDom.classList.add(
    "btn", "btn-outline-dark", "btn-item"
  )
  btnContainerDOM.append(btnDom)
}
let koreaBtn = document.querySelector('#Korea')
let japanBtn = document.querySelector('#Japan')
let allBtn = document.querySelector('#All')
let chinaBtn = document.querySelector('#China')
window.addEventListener('load',function(){
  allBtn.click()
})
allBtn.addEventListener('click',function(){
  sectionCenterDOM.innerHTML=''
  for(var a=0;a<menu.length;a++){
    elemanOlustur(menu[a].img,menu[a].title,menu[a].price,menu[a].desc)
  }
})
koreaBtn.addEventListener('click', function () {
  sectionCenterDOM.innerHTML=''
  let koreanFood = menu.filter(function (item) {
    if (item.category == "Korea") {
      return item
    }
  })
  for (let i = 0; i < koreanFood.length; i++) {
    elemanOlustur(koreanFood[i].img, koreanFood[i].title, koreanFood[i].price, koreanFood[i].desc)
  }
})
japanBtn.addEventListener('click', function () {
  sectionCenterDOM.innerHTML=''
  let japanFood = menu.filter(function (item) {
    if (item.category == "Japan") {
      return item
    }
  })
  for (let i = 0; i < japanFood.length; i++) {
    elemanOlustur(japanFood[i].img, japanFood[i].title, japanFood[i].price, japanFood[i].desc)
  }
})
chinaBtn.addEventListener('click', function () {
  sectionCenterDOM.innerHTML=''
  let chinaFood = menu.filter(function (item) {
    if (item.category == "China") {
      return item
    }
  })
  for (let i = 0; i < chinaFood.length; i++) {
    elemanOlustur(chinaFood[i].img, chinaFood[i].title, chinaFood[i].price, chinaFood[i].desc)
  }
})



function elemanOlustur(imgLink, title, price, text) {
  let menuItemsDivDOm = document.createElement('div')
  let menuInfoDivDOM = document.createElement('div')
  let menuTitleDivDOM = document.createElement('div')
  let menuTextDivDOM = document.createElement('div')
  let menuTitleTexDOM = document.createElement('h4')
  let menuPriceTextDOM = document.createElement('h4')
  let imgDOM = document.createElement('img')
  menuItemsDivDOm.classList.add('menu-items', 'col-lg-6', 'col-sm-12')
  imgDOM.classList.add('photo')
  imgDOM.src = imgLink
  menuInfoDivDOM.classList.add('menu-info')
  menuTitleDivDOM.classList.add('menu-title')
  menuTextDivDOM.classList.add('menu-text')
  menuPriceTextDOM.classList.add('price')
  menuTitleTexDOM.innerHTML = title
  menuPriceTextDOM.innerHTML = price
  menuTextDivDOM.innerHTML = text
  sectionCenterDOM.append(menuItemsDivDOm)
  menuItemsDivDOm.append(imgDOM)
  menuItemsDivDOm.append(menuInfoDivDOM)
  menuInfoDivDOM.append(menuTitleDivDOM)
  menuTitleDivDOM.append(menuTitleTexDOM)
  menuTitleDivDOM.append(menuPriceTextDOM)
  menuInfoDivDOM.append(menuTextDivDOM)



}
const data = [
  {
    name: "Dark Elegance",
    price: 150.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/amano_dos_rios_unwrapped_roses_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Swiss Truffles",
    price: 120.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/pacari_cranberry_chocolate_stilllife_photo_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "White Bliss",
    price: 100.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/amano_dos_rios_unwrapped_roses_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Espresso Delight",
    price: 90.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/pacari_cranberry_chocolate_stilllife_photo_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Hazelnut Praline",
    price: 180.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/amano_dos_rios_unwrapped_roses_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Sea Salt Caramel",
    price: 130.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/pacari_cranberry_chocolate_stilllife_photo_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Champagne Truffles",
    price: 200.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/amano_dos_rios_unwrapped_roses_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Fruit Nut Bark",
    price: 110.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/pacari_cranberry_chocolate_stilllife_photo_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Mint Crunch",
    price: 80.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/amano_dos_rios_unwrapped_roses_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Raspberry Bonbons",
    price: 170.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/pacari_cranberry_chocolate_stilllife_photo_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Coconut Almond",
    price: 140.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/amano_dos_rios_unwrapped_roses_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Peanut Butter Cups",
    price: 160.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/pacari_cranberry_chocolate_stilllife_photo_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Toffee Crunch",
    price: 90.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/amano_dos_rios_unwrapped_roses_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Salted Caramel",
    price: 190.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/pacari_cranberry_chocolate_stilllife_photo_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Strawberry Truffles",
    price: 150.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/amano_dos_rios_unwrapped_roses_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Pistachio Praline",
    price: 120.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/pacari_cranberry_chocolate_stilllife_photo_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Orange Discs",
    price: 100.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/amano_dos_rios_unwrapped_roses_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Vanilla Drops",
    price: 80.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/pacari_cranberry_chocolate_stilllife_photo_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Chili Squares",
    price: 170.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/amano_dos_rios_unwrapped_roses_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Milk Spread",
    price: 120.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/pacari_cranberry_chocolate_stilllife_photo_the_chocolate_website-1024x576-960x600_c.jpg",
  },
];
let products = document.getElementsByClassName("products");

function createcard(item) {
  const card = document.createElement("div");
  card.innerHTML = `
  <img src=${item.url} class="chocolate-image"></img>
  <p class=card-name>${item.name}</p>
  <p class=card-price>Rs.${item.price}</p>
  `;
  return card;
}

const rendercard = (data) => {
  data.forEach((item) => {
    var card = createcard(item);
    card.className = "card";
    products[0].appendChild(card);
  });
};

rendercard(data);

var totalchocolate = 0;
var totalprice = 0;

var itemMap = new Map();

var flag = false;
var icon = document.getElementById(`cart`);
var cartmenu = document.getElementById(`usercart`);

var cards = document.getElementsByClassName(`card`);

renderCart();

function createcartelement({ name, amount }) {
  const card = document.createElement("div");
  card.innerHTML = `
  <p class=card-name>${name}</p>
  <p class=card-price>x ${amount}</p>
  <p class=card-remove> Remove</p>
    `;
  card.className = "cartcard";
  return card;
}

var increaseprice = async (price, name) => {
  if (totalchocolate == 8) return;
  totalchocolate = totalchocolate + 1;
  if (itemMap.has(name)) {
    var amount = itemMap.get(name).amount;
    itemMap.set(name, { price, amount: amount + 1 });
  } else {
    itemMap.set(name, { price, amount: 1 });
  }
  totalprice = totalprice + Number(price);
  renderCart();
};

var decprice = (name) => {
  if (itemMap.has(name)) {
    var item = itemMap.get(name);
    if (item.amount > 1) {
      item.amount--;
      totalchocolate--;
      totalprice -= item.price;
      renderCart();
    } else {
      itemMap.delete(name);
      totalchocolate--;
      totalprice -= item.price;
      renderCart();
    }
  }
};

function renderCart() {
  cartmenu.innerHTML = "";
  itemMap.forEach((item, name) => {
    const cartItem = createcartelement({ name, amount: item.amount });
    cartItem.querySelector(".card-remove").addEventListener("click", () => {
      decprice(name);
    });
    cartmenu.appendChild(cartItem);
  });
  var total = document.createElement("div");
  total.innerHTML = `
    <p> Rs.${totalprice}</p>
  `;
  total.className = "totalprice";
  cartmenu.appendChild(total);
}

for (var i = 0; i < cards.length; i++) {
  let price = cards[i].getElementsByTagName(`p`)[1].innerHTML;
  let name = cards[i].getElementsByTagName(`p`)[0].innerHTML;
  let res = price.replace("Rs.", "");
  cards[i].addEventListener("click", () => {
    increaseprice(res, name);
  });
}

icon.addEventListener("click", () => {
  flag = !flag;
  if (!flag) {
    cartmenu.className = "hide";
  } else {
    cartmenu.className = "show";
  }
});

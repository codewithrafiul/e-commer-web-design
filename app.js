const wrapper = document.querySelector(".slideWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "./img/jordan.png",
            },
            {
                code: "green",
                img: "./img/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "./img/crater.png",
            },
            {
                code: "lightgray",
                img: "./img/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "./img/hippie.png",
            },
            {
                code: "black",
                img: "./img/hippie2.png",
            },
        ],
    },
];
let chososenProduct = products[0];
const currentProductImg = document.querySelector(".productImg")
const cureentproductTittle = document.querySelector(".productTittle")
const cureentproductPrice = document.querySelector(".productPrice")
const cureentproductcolors = document.querySelectorAll(".color")
const cureentproductsizes = document.querySelectorAll(".size")


menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // current slide wrapper
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        // choosen product slideWrapper
        chososenProduct = products[index]
        // change text of current product
        cureentproductTittle.textContent = chososenProduct.title
        cureentproductPrice.textContent = "$" + chososenProduct.price
        currentProductImg.src = chososenProduct.colors[0].img;
        cureentproductcolors.forEach((color, index) => {
            color.style.backgroundColor = chososenProduct.colors[index].code;

        });
    });
});

cureentproductcolors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = chososenProduct.colors[index].img
    });
});
// need to study more about this
cureentproductsizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        cureentproductsizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";

        });
        size.style.backgroundColor = "black";
        size.style.color = "white";

    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
const paybutton = document.querySelector(".paybutton");



productButton.addEventListener("click", () => {
    payment.style.display = "flex"
});

close.addEventListener("click", () => {
    payment.style.display = "none"
});
paybutton.addEventListener("click", () => {
    payment.style.display = "none"
});

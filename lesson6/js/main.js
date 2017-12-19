'use strict';

var goods = [];

var curentSlide = 0;

function Good(title, price, count) {
    this.title = title;
    this.price = price;
    this.count = count;
    this.getPrice = function () {
        return +this.price * +this.count;
    }
}

function init() {
    var thumbnailImages = document.getElementById('thumbnails').getElementsByTagName('img');
    for (var i = 0; i < thumbnailImages.length; i++) {
        thumbnailImages[i].addEventListener('click', onThumbnailClick);
    }

    var thumbnailsPanel = document.getElementById('thumbnails');
    thumbnailsPanel.addEventListener('wheel', function (e) {
        document.getElementById('thumbnails').getElementsByTagName('p')[0].style.opacity = 0;
        e = e || window.event;
        var delta = e.deltaY || e.detail || e.wheelDelta;
        thumbnailsPanel.scrollLeft = thumbnailsPanel.scrollLeft + delta;
        e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    });

    var previousSlide = document.getElementById('previous-slide');
    previousSlide.addEventListener('click', function (e) {
        if (curentSlide > 0) {
            thumbnailImages[--curentSlide].click();
        }
    });

    var nextSlide = document.getElementById('next-slide');
    nextSlide.addEventListener('click', function (e) {
        if (curentSlide < thumbnailImages.length - 1)
        thumbnailImages[++curentSlide].click();
    });

    var addToCartBtns = document.getElementsByClassName('add-to-cart-btn');
    for (var j = 0; j < addToCartBtns.length; j++) {
        addToCartBtns[j].addEventListener('click', onAddToCartBtnClick);
    }

    loadCart();
}

function onThumbnailClick(event) {
    var path = event.target.src.split('/');
    path[path.length - 2] = 'big';
    previewImgToggle();
    setTimeout(function () {
        document.getElementById('preview-img').src = path.join('/');
    }, 250);
    setTimeout(previewImgToggle, 500);
}

function previewImgToggle() {
    var img = document.getElementById('preview-img');
    if (img.style.opacity === '0') {
        img.style.opacity = '1';
    } else {
        img.style.opacity = '0';
    }
}

function onAddToCartBtnClick(event) {
    var goodBox = event.target.parentNode.parentNode;
    var price = goodBox.getElementsByClassName('price')[0].getElementsByTagName('span')[0].innerText.split(' ')[0];
    var title = goodBox.getElementsByClassName('title')[0].innerText;
    if (title in goods) {
        goods[title].count++;
    } else {
        goods[title] = new Good(title, price, 1);
    }
    saveCart();
    cartTableInit();
}

function cartTableInit() {
    var table = document.getElementById('cart-body');
    table.innerHTML = '';
    var tr = document.createElement('tr');
    tr.innerHTML = '<td>Name</td><td>Count</td><td>Price</td><td>Sum</td>';
    table.appendChild(tr);
    var sum = 0;
    for (var key in goods) {
        tr = document.createElement('tr');
        var td = document.createElement('td');
        td.innerText = goods[key].title;
        tr.appendChild(td);
        td = document.createElement('td');
        td.innerText = goods[key].count;
        tr.appendChild(td);
        td = document.createElement('td');
        td.innerText = goods[key].price;
        tr.appendChild(td);
        td = document.createElement('td');
        sum += td.innerText = goods[key].getPrice();
        tr.appendChild(td);
        table.appendChild(tr);
    }
    tr = document.createElement('tr');
    tr.innerHTML = '<td></td><td></td></td><td>Total:</td><td>' + sum + '</td>';
    table.appendChild(tr);
}

function saveCart() {
    var export_goods = [];
    for (var key in goods) {
        export_goods.push(JSON.stringify(goods[key]));
    }
    window.sessionStorage.setItem('goods', JSON.stringify(export_goods));
}


function loadCart() {
    if (window.sessionStorage.getItem('goods')) {
        var import_goods = JSON.parse(window.sessionStorage.getItem('goods'));
        goods = [];
        for (var key in import_goods) {
            var import_good = JSON.parse(import_goods[key]);
            var good = new Good(import_good.title, import_good.price, import_good.count);
            goods[good.title] = good;
        }
    }
    cartTableInit();
}

window.onload = init;
// Stock Products
const stock_products = document.querySelector(".stock-products");
let forStockProduct = products.slice(0, 5);
forStockProduct.map((product) => {
  if (product.discount) {
    var star;
    switch (product.rating) {
      case 1:
        star = `
        <div class="star-group">
        <img src="../assets/svg/star-fill.svg"/>
        </div>
        `;
        break;
      case 1.5:
        star = `
        <div class="star-group">
        <img src="../assets/svg/star-fill.svg"/>
        <img src="../assets/svg/star-half.svg"/>
        </div>
        `;
        break;
      case 2:
        star = `
        <div class="star-group">
        <img src="../assets/svg/star-fill.svg"/>
        <img src="../assets/svg/star-fill.svg"/>
        </div>
        `;
        break;
      case 2.5:
        star = `
        <div class="star-group">
        <img src="../assets/svg/star-fill.svg"/>
        <img src="../assets/svg/star-fill.svg"/>
        <img src="../assets/svg/star-half.svg"/>
        </div>
        `;
        break;
      case 3:
        star = `
        <div class="star-group">
        <img src="../assets/svg/star-fill.svg"/>
        <img src="../assets/svg/star-fill.svg"/>
        <img src="../assets/svg/star-fill.svg"/>
        </div>
        `;
        break;
      case 3.5:
        star = `
        <div class="star-group">
        <img src="../assets/svg/star-fill.svg"/>
        <img src="../assets/svg/star-fill.svg"/>
        <img src="../assets/svg/star-fill.svg"/>
        <img src="../assets/svg/star-half.svg"/>
        </div>
        `;
        break;
      case 4:
        star = `
        <div class="star-group">
        <img src="../assets/svg/star-fill.svg"/>
        <img src="../assets/svg/star-fill.svg"/>
        <img src="../assets/svg/star-fill.svg"/>
        <img src="../assets/svg/star-fill.svg"/>
        </div>
        `;
        break;
      case 4.5:
        star = `
        <div class="star-group">
        <img src="../assets/svg/star-fill.svg"/>
        <img src="../assets/svg/star-fill.svg"/>
        <img src="../assets/svg/star-fill.svg"/>
        <img src="../assets/svg/star-fill.svg"/>
        <img src="../assets/svg/star-half.svg"/>
        </div>
        `;
        break;
      case 5:
        star = `
        <div class="star-group">
        <img src="../assets/svg/star-fill.svg"/>
        <img src="../assets/svg/star-fill.svg"/>
        <img src="../assets/svg/star-fill.svg"/>
        <img src="../assets/svg/star-fill.svg"/>
        <img src="../assets/svg/star-fill.svg"/>
        </div>
        `;
        break;
    }
    stock_products.innerHTML += `
      <div class="product">
      <div class="product-card-header">
      <div class="like-btn">
    <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" fill="#555"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg>
    </div>
    <img
      src=${product.images[0]}
      width="100%"
      alt=""
    />

  </div>
  <div class="product-card-body">
    <div class="product-price">
    <div class="card-status">
    -${((product.discount / product.price) * 100).toFixed(0)}%
    </div>
     <div class="common">
        <h3 class="discount-price">${product.price} ₽</h3>
        <p class="price-descr">С картой</p>
      </div>
      <div class="discount">
        <h3 class="discount-price" style="font-weight: 400">${
          product.discount
        } ₽</h3>
        <p class="price-descr">Обычная</p>
      </div>
    </div>
    <div class="category">
      <h3 class="product-category">${product.name}</h3>
    </div>
    <div class="product-descr">
      <p>${product.description.slice(0, 60)}....</p>
    </div>
    <div class="rating">
        ${star}
    </div>
    <div class="buy-btn">
      <button>В корзину</button>
    </div>
</div>
</div>
    `;
  } else {
  }
});

// New Products

const new_products = document.querySelector(".new-products");
let forNewProduct = products.slice(0, 4);
forNewProduct.map((product) => {
  var star;
  switch (product.rating) {
    case 1:
      star = `
      <div class="star-group">
      <img src="../assets/svg/star-fill.svg"/>
      </div>
      `;
      break;
    case 1.5:
      star = `
      <div class="star-group">
      <img src="../assets/svg/star-fill.svg"/>
      <img src="../assets/svg/star-half.svg"/>
      </div>
      `;
      break;
    case 2:
      star = `
      <div class="star-group">
      <img src="../assets/svg/star-fill.svg"/>
      <img src="../assets/svg/star-fill.svg"/>
      </div>
      `;
      break;
    case 2.5:
      star = `
      <div class="star-group">
      <img src="../assets/svg/star-fill.svg"/>
      <img src="../assets/svg/star-fill.svg"/>
      <img src="../assets/svg/star-half.svg"/>
      </div>
      `;
      break;
    case 3:
      star = `
      <div class="star-group">
      <img src="../assets/svg/star-fill.svg"/>
      <img src="../assets/svg/star-fill.svg"/>
      <img src="../assets/svg/star-fill.svg"/>
      </div>
      `;
      break;
    case 3.5:
      star = `
      <div class="star-group">
      <img src="../assets/svg/star-fill.svg"/>
      <img src="../assets/svg/star-fill.svg"/>
      <img src="../assets/svg/star-fill.svg"/>
      <img src="../assets/svg/star-half.svg"/>
      </div>
      `;
      break;
    case 4:
      star = `
      <div class="star-group">
      <img src="../assets/svg/star-fill.svg"/>
      <img src="../assets/svg/star-fill.svg"/>
      <img src="../assets/svg/star-fill.svg"/>
      <img src="../assets/svg/star-fill.svg"/>
      </div>
      `;
      break;
    case 4.5:
      star = `
      <div class="star-group">
      <img src="../assets/svg/star-fill.svg"/>
      <img src="../assets/svg/star-fill.svg"/>
      <img src="../assets/svg/star-fill.svg"/>
      <img src="../assets/svg/star-fill.svg"/>
      <img src="../assets/svg/star-half.svg"/>
      </div>
      `;
      break;
    case 5:
      star = `
      <div class="star-group">
      <img src="../assets/svg/star-fill.svg"/>
      <img src="../assets/svg/star-fill.svg"/>
      <img src="../assets/svg/star-fill.svg"/>
      <img src="../assets/svg/star-fill.svg"/>
      <img src="../assets/svg/star-fill.svg"/>
      </div>
      `;
      break;
  }
  new_products.innerHTML += `
      <div class="product">
      <div class="product-card-header">
      <div class="like-btn">
    <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" fill="#555"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg>
    </div>
    <img
      src=${product.images[0]}
      width="100%"
      alt=""
    />

  </div>
  <div class="product-card-body">
    <div class="product-price">
    <div class="card-status bg-success">
    New
    </div>
     <div class="common">
        <h3 class="discount-price">${product.price} ₽</h3>
        <p class="price-descr">С картой</p>
      </div>

    </div>
    <div class="category">
      <h3 class="product-category">${product.name}</h3>
    </div>
    <div class="product-descr">
      <p>${product.description.slice(0, 60)}....</p>
    </div>
    <div class="rating">
    ${star}
    </div>
    <div class="buy-btn">
      <button>В корзину</button>
    </div>
</div>
</div>
    `;
});

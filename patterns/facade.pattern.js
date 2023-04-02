//ben trong la he thong phuc tap, ngoai nguoi su dung het suc don gian

class Discount {
  calc(value) {
    return value * 0.9;
  }
}

class Shipping {
  calc() {
    return 5;
  }
}

class Fees {
  calc(value) {
    return value * 1.05;
  }
}

class ShopeeFacadePattern {
  constructor() {
    this.discount = new Discount();
    this.shipping = new Shipping();
    this.fees = new Fees();
  }

  calc(price) {
    price = this.discount.calc(price);
    console.log(`discount::`, price);
    price = this.fees.calc(price);
    console.log(`fees::`, price);
    price += this.shipping.calc(price);
    console.log(`shipping::`, price);

    return price;
  }
}

function buy(price) {
  const shopee = new ShopeeFacadePattern();
  console.log(`-->Price::`, shopee.calc(price));
}

buy(150000);

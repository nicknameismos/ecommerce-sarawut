import { ProductItemModel } from "../../app/app.model";
// new checkoutmodel

export class CheckoutModel {
    _id: string;
    items: Array<CheckoutItemModel>;
    amount: number;
    discount: number;
    totalamount: number;
};
export class CheckoutItemModel {
    product: ProductItemModel;
    qty: number;
    amount: number;
    discount: number;
    totalamount: number;
};
// 

export class ShippingModel {
    _id: string;
    products: Array<PaymentItemModel>;
    amount: number;
};
export class PaymentItemModel {
    product: ProductItemModel;
    price: number;
    qty: number;
    itemamount: number;
};

export class addressModel {
    address: Array<address>;
}
export class address {
    _id: string;
    address: string;
    subdistrict: string;
    district: string;
    province: string;
    postcode: string;
    firstname: string;
    lastname: string;
    tel: string;
}

export class paymentModel {
    payment: Array<payment>;
    counterservice: Array<counter>;
}

export class payment {
    name: string;
    img: string;
}

export class counter {
    name: string;
    img: string;
}

// export class confirmModel {
//     confirm: confirmdata = new confirmdata();
// }

// export class confirmdata {
//     price: number;
//     total: number;
//     amount: number;
//     shop: string;
//     deliveryprice: number;
//     shippingtype: string;
//     customer: customer = new customer();
//     products: Array<product>;
// }

// export class customer {
//     displayName: string;
//     tel: string;
//     address: address = new address();
// }

// export class product {
//     name: string;
//     img: string;
//     qty: number;
//     price: number;
//     choice: Array<choice>;
//     shopdetail: shopdetail = new shopdetail();

// }
// export class shopdetail {
//     name: string;
// }

// export class choice {
//     discription: string;
//     type: string;
// }

// export class shippingModel {
//     _id: string;
//     user: customer = new customer();
//     products: Array<product>;
//     total: number
// }

// export class saveOrder {
//     shipping: saveOrderShipping = new saveOrderShipping();
//     items: Array<saveProducts>;
//     payment: savePayment = new savePayment();
//     amount: number;
//     discount: number;
//     cart: string;
// }

// export class saveOrderShipping {
//     _id: string;
//     firstname: string;
//     lastname: string;
//     tel: string;
//     address: string;
//     subdistrict: string;
//     district: string;
//     province: string;
//     postcode: string;
// }

// export class saveProducts {
//     product: ProductDetailModel = new ProductDetailModel();
//     qty: number;
//     amount: number;
//     delivery: delivery = new delivery();
// }

// export class savePayment {
//     paymenttype: string;
//     creditno: string;
//     creditname: string;
//     expdate: string;
//     creditcvc: string;
//     counterservice: string;
// }

// export class delivery {
//     description: string;
//     deliverytype: string;
// }

// export class ProductDetailModel {
//     _id: string;
//     name: string;
//     unitprice: number;
//     img: Array<ImageModel>;
//     size: SizeModel = new SizeModel();
// }

// export class ImageModel {
//     id: string;
//     url: string;
// }

// export class SizeModel {
//     detail: string;
//     sizedetail: Array<SizeDetailModel>;
// }

// export class SizeDetailModel {
//     name: string;
//     qty: number;
// }


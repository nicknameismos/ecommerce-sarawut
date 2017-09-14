export class OrderDetailModel {
    order_id: string;
    item_id: string;
    name: string;
    price: number;
    qty: number;
    rate: number;
    image: Array<Image>;
    status: string;
    shipping: Shipping = new Shipping();
    delivery: Delivery = new Delivery();
}
export class Image {
    _id: string;
    url: string;
}
export class Shipping {
    _id: string;
    firstname: string;
    lastname: string;
    tel: string;
    address: string;
    subdistrict: string;
    district: string;
    province: string;
    postcode: number;
    created: string;
}
export class Delivery {
    _id: string;
    created: string;
    days: number;
    detail: string;
    name: string;
    price: number;
    user: string;
}
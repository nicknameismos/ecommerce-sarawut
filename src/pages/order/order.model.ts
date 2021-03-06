export class OrderModel {
    waiting: Array<Order>;
    accept: Array<Order>;
    sent: Array<Order>;
    return: Array<Order>;

}
export class Order {
    order_id: string;
    item_id: string;
    name: string;
    price: number;
    qty: number;
    rate: number;
    image: string;
    status: string;
    shipping: Shipping = new Shipping();
    delivery: Delivery = new Delivery();
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
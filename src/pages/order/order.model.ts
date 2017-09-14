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
}
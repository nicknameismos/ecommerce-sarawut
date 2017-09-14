export class NotificationModel {
    title: String;
    items: Array<DetailnotiModel>;
}
export class DetailnotiModel {
    name: String;
    image: String;
    price: Number;
    normalprice: Number;
    discount: Number;
    discounttype: String;
    currency: String;
    rate: Number;
    description: string;
}
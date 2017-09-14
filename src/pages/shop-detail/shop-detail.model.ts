import { ReviewsModel } from "../../app/app.model";

export class ShopDetailModel {
    _id: string;
    name: string;
    email: string;
    tel: string;
    map: map = new map();
    image: string;
    detail: string;
    reviews: Array<ReviewsModel>;
    rate: number;
    // products: Array<ProductsModel>;
}

export class map {
    lat: string;
    long: string;
}


export class ProductsModel {
    name: string;
    image: string;
    unitprice: number;
}
import { ProductItemModel, ReviewsModel, QuestionModel } from "../../app/app.model";
import { ShopModel } from '../shop-form/shop-form.model';
export class ProductDetailModel {
    _id: string;
    name: string;
    detail: string;
    price: number;
    promotionprice: number; //calculate from active promotions
    percentofdiscount: number; //calculate from active promotions
    currency: string;
    images: Array<string>;
    rate: number; // calculate from reviews
    reviews: Array<ReviewsModel>; // relate of Reviews
    shippings: Array<ShippingMethodModel>;
    shop: ShopModel = new ShopModel();
    otherproducts: Array<ProductItemModel>; //display if not signin
}


export class ProductDataSize {
    _id: string;
    detail: string;
    sizedetail: Array<string>;
}

export class ShippingMethodModel {
    _id: string;
    name: string;
}


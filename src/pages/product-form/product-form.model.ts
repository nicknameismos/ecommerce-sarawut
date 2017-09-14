import { ReviewsModel, QuestionModel, Category, Shipping } from "../../app/app.model";
import { ProductDataSize, ShippingMethodModel } from "../product-detail/product-detail.model";
import { ShopModel } from '../shop-form/shop-form.model';
export class ProductModel {
    _id: string;
    name: string;
    detail: string;
    price: number;
    promotionprice: number; //calculate from active promotions
    percentofdiscount: number; //calculate from active promotions
    currency: string;
    categories: Array<Category>;
    images: Array<string> = [];
    reviews: Array<ReviewsModel>; // relate of Reviews
    questions: Array<QuestionModel>; // relate of QA Transactions
    size: ProductDataSize = new ProductDataSize();
    shippings: Array<Shipping>;
    shop: ShopModel = new ShopModel();
}
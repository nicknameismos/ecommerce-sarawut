import { ProductItemModel } from "../../app/app.model";

export class CartViewModel {
    title: String;
    cart: CartModel = new CartModel();
};

export class CartModel {
    _id: string;
    items: Array<CartItemModel>;
    amount: number;
    discount: number;
    totalamount: number;
};
export class CartItemModel {
    product: ProductItemModel;
    qty: number;
    amount: number;
    discount: number; 
    totalamount: number;
};

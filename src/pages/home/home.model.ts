import { ProductItemModel } from "../../app/app.model";
import { ShopItemModel } from "../../app/app.model";

export class HomeCategoryModel {
  categories: Array<HomeModel>;
}

export class HomeModel {
  name: string;
  popularproducts: Array<ProductItemModel>;
  bestseller: Array<ProductItemModel>;
  lastvisit: Array<ProductItemModel>;
  popularshops: Array<ShopItemModel>;
  productvoucher: Array<VoucherModel>;
  shopvoucher: Array<VoucherModel>;
}

export class VoucherModel {
  _id: string;
  name: string;
  image: string;
}



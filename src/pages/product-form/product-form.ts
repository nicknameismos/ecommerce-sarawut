import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ProductModel } from "./product-form.model";
import { ProductFormServiceProvider } from "./product-form-service";
import { Category, Shipping } from "../../app/app.model";
import { ListShopModel } from "../list-shop/list-shop.model";
import { ListShopServiceProvider } from "../list-shop/list-shop.service";

/**
 * Generated class for the ProductFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-product-form',
  templateUrl: 'product-form.html',
})
export class ProductFormPage {
  shippings: Array<Shipping> = [];
  categories: Array<Category> = [];
  productForm: ProductModel = new ProductModel();
  listShopData: ListShopModel = new ListShopModel();
  image: string;
  locations: any = [{
    id: 1,
    name: 'one'
  },
  {
    id: 2,
    name: 'two'
  }];
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public productFormServiceProvider: ProductFormServiceProvider, public listShopService: 
    ListShopServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductFormPage');
    this.productFormServiceProvider.getCategories().then(data => {
      this.categories = data;
    }, (err) => {
      console.log(err);
    });
    this.productFormServiceProvider.getShippings().then(data => {
      this.shippings = data;
    }, (err) => {
      console.log(err);
    });
    this.listShopService.getListShop().then((data) => {
      this.listShopData = data;
    }, (err) => {
      console.log(err);      
    });
  }

  createProduct() {
    console.log(this.productForm);
    this.viewCtrl.dismiss({ data: this.productForm });
  }

  addImage() {
    this.productForm.images.push(this.image);
    this.image = "";
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}

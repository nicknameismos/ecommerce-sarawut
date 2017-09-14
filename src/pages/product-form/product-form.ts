import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ProductModel } from "./product-form.model";
import { ProductFormServiceProvider } from "./product-form-service";
import { Category, Shipping } from "../../app/app.model";
import { ListShopModel } from "../list-shop/list-shop.model";
import { ListShopServiceProvider } from "../list-shop/list-shop.service";
import { AuthorizeProvider } from "../../providers/authorize/authorize";
import { AuthorizeModel } from "../../providers/authorize/authorize.model";

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
  images: Array<any> = [];
  shippings: Array<Shipping> = [];
  categories: Array<Category> = [];
  productForm: ProductModel = new ProductModel();
  image: string;
  shopData: AuthorizeModel = new AuthorizeModel();
  locations: any = [{
    id: 1,
    name: 'one'
  },
  {
    id: 2,
    name: 'two'
  }];
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public productFormServiceProvider: ProductFormServiceProvider, public listShopService:
    ListShopServiceProvider, public authorizeProvider: AuthorizeProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductFormPage');
    this.shopData = this.authorizeProvider.getAuthorization();
    console.log(this.shopData);
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
  }

  createProduct() {
    this.productFormServiceProvider.uploadImage(this.images).then(data => {
      // alert('image' + JSON.stringify(data));
      let images = [];
      for (let i = 0; i < data.length; i++) {
        images.push(data[i].imgURL);
      }
      this.productForm.images = images.length > 0 ? images : [];
      this.viewCtrl.dismiss({ data: this.productForm });
      // alert('data' + data);
    })
    // console.log(this.productForm);
    // this.viewCtrl.dismiss({ data: this.productForm });


  }

  // addImage() {
  //   this.productForm.images.push(this.image);
  //   this.image = "";
  // }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  uploadImage(e) {
    this.images = e;
  }

}

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { HomeService } from "./home.service";
import { HomeModel } from "../home/home.model";
// import { ShopModel } from "../shop-form/shop-form.model";
// import { ShopFormPage } from '../shop-form/shop-form';
/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  homeData: Array<HomeModel>;
  waiting: number = 0;
  accept: number = 0;
  sent: number = 0;
  return: number = 0;
  total: number = 0;
  percentWaiting: number = 0;
  percentAccept: number = 0;
  percentSent: number = 0;
  percentReturn: number = 0;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;
  doughnutChart: any;
  lineChart: any;
  user: any;
  // shop: ShopModel = new ShopModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public homeService: HomeService) {

    this.user = navParams.get('data');
    
  }


  ionViewDidLoad() {
    // console.log(this.shop);
    // this.shop

    console.log('ionViewDidLoad HomePage');
    this.homeService.getData().then(data => {
      this.homeData = data;
      this.waiting = data.waiting.length;
      this.accept = data.accept.length;
      this.sent = data.sent.length;
      this.return = data.return.length;
      this.total = (this.waiting + this.accept + this.sent + this.return);
      this.percentWaiting = (this.waiting / this.total) * 100;
      this.percentAccept = (this.accept / this.total) * 100;
      this.percentSent = (this.sent / this.total) * 100;
      this.percentReturn = (this.return / this.total) * 100;
      this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

        type: 'doughnut',
        data: {
          labels: ["waiting", "accept", "sent", "return"],
          datasets: [{
            label: '# of Votes',
            data: [this.percentWaiting, this.percentAccept, this.percentSent, this.percentReturn],
            // data: [this.percentWaiting, this.percentAccept, this.percentSent, this.percentReturn],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#FF6384"
            ]
          }]
        }, legend: {
          align: "right",
          layout: "vertical",
          // verticalAlign: 'top',
          x: 40,
          y: 0
        }

      });
      this.lineChart = new Chart(this.lineCanvas.nativeElement, {
        type: 'line',
        data: {
          labels: ["waiting", "accept", "sent", "return"],
          datasets: [
            {
              label: "My Orders",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [this.waiting, this.accept, this.sent, this.return],
              spanGaps: false,
            }
          ]
        }

      });
    })
  }

}

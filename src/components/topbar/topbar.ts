import { Component, Input } from '@angular/core';
import { LogServiceProvider } from '../../providers/log-service/log-service';

@Component({
  selector: 'topbar',
  templateUrl: 'topbar.html'
})
export class TopbarComponent {

  @Input() dataTopBar: any;

  constructor(public log:LogServiceProvider) {

  }
  onClick = function () {
    this.status = false;
    this.dataTopBar.favorite.push({
      "customerid": "xxx",
      "favdate": "2017-08-05T14:05:59"
    });
    this.log.info(this.dataTopBar.favorite);

  }
  onClickF = function () {
    this.status = true;

    for (let i = 0; i < this.dataTopBar.favorite.length; i++) {
      if (this.dataTopBar.favorite[i].customerid === 'xxx') {
        this.dataTopBar.favorite.splice(i, 1);
        break;
      }
    }
    this.log.info(this.dataTopBar.favorite);
  }
}

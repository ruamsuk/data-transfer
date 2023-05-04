import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * Interpolation
   * TS --> HTML
   * */

  title = 'data-transfer';
  version = 0;
  isProduction = false;
  play = {name: 'Some one', password: '123456'};
  time1 = 0;


  getSomething() {
    return 'I am a poor boy';
  }

  onClick() {
    this.version++;
  }

  onChange1(e: any) {
    this.time1 = e;
  }

  onResetVersion() {
    this.version = 0;
  }
}

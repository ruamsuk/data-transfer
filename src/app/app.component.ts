import { Component, ViewChild } from '@angular/core';
import { ComOneComponent } from './components/com-one/com-one.component';
import { SharedService } from './services/shared.service';

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

  @ViewChild('com1') com1: ComOneComponent;

  constructor(public service: SharedService) {
  }

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

  onClickViewChild() {
    this.com1.count = 10;
  }
}

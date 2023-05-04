import {
  Component,
  EventEmitter,
  Input, OnInit,
  Output
} from '@angular/core';
import { AppComponent } from '../../app.component';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-com-one',
  templateUrl: './com-one.component.html',
  styleUrls: ['./com-one.component.css']
})
export class ComOneComponent implements OnInit {
  /**
   * Property binding
   * Input : Parent --> child
   * */
  @Input() count = 0;
  /**
   * Event binding
   * Output Child --> Parent
   * */
  @Output() change = new EventEmitter<number>();


  /**
   * Parent Injection
   * */
  constructor(
    private app: AppComponent,
    private service: SharedService
    ) {
  }
  ngOnInit() {
    setInterval(() => {
      this.change.emit(Date.now());
    }, 1000)
  }

  /**
   * Parent Injection
   *
   * ห้ามเรียกฟังชั้นที่มีอยู่ในตัวลูก
   * จะทำให้วนลูปไม่รู้จบ
   * */
  onCallParent() {
    this.app.title = 'Title from ComOne';
    this.app.isProduction = true;
  }

  /**
   * Communication with Service
   * */
  onClickLogin() {
    this.service.login();
  }


}

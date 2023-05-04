import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-com-two',
  templateUrl: './com-two.component.html',
  styleUrls: ['./com-two.component.css']
})
export class ComTwoComponent implements OnInit {
  /**
   * Property binding
   * Input : Parent --> child
   * */
  @Input('count2') count = 0;
  /**
   * Event binding
   * Output : Child --> Parent
   * */
  @Output('reset2') reset = new EventEmitter<void>();


  constructor(public service: SharedService) {
  }
  ngOnInit() { }

  onClickReset() {
    this.reset.emit();
  }

  onClickLogout() {
    this.service.logout();
  }
}

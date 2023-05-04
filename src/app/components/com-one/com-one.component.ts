import {
  Component,
  EventEmitter,
  Input, OnInit,
  Output
} from '@angular/core';

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

  ngOnInit() {
    setInterval(() => {
      this.change.emit(Date.now());
    }, 1000)
  }
}

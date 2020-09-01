import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent implements OnInit {


  @Input() list: Array<any>;
  @Output() newList: EventEmitter<any> = new EventEmitter();

  public paginationList: number[];
  public last: number;


  ngOnInit() {
    this.last = this.lastPage(this.list.length);
    let from = 2;
    const to = 11;
    const list = [];
    while (from <= to) {
      list.push(from++);
    }
    this.paginationList = list;
  }


  public createPagination(from: number) {
    const copyList = this.list.slice();
    this.newList.emit(copyList.splice((from) * 10, 10));
    let startFrom = from;
    let to = from + 9;
    const list = [];
    if (to + 9 >= this.last) {
      to = this.last - 1;
      startFrom = this.last - 10;
    }
    if (startFrom === 1) {
      this.newList.emit(copyList.splice((from - 1) * 10, 10));
      startFrom = 2;
      to++;
    }
    while (startFrom <= to) {
      list.push(startFrom++);
    }
    this.paginationList = list;
  }


  public prev() {
    let startFrom = this.paginationList[0];
    let to = startFrom - 9;
    const list = [];
    const copyList = this.list.slice();
    if (startFrom < 9) {
      this.newList.emit(copyList.slice(0, 10));
      startFrom = 11;
      to = 2;
    } else {
      this.newList.emit(copyList.slice((startFrom * 10) - 9, startFrom * 10));
    }
    while (startFrom >= to) {
      list.push(to++);
    }
    this.paginationList = list;
  }


  private lastPage(max: number): number {
    return Math.floor(max / 10);
  }

}

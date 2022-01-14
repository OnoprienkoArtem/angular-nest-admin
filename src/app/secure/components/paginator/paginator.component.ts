import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  page: number = 1;

  @Input() lastPage!: number;

  @Output() pageChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  nextPage(): void {
    if (this.page === this.lastPage) {
      return;
    }

    this.page++;
    this.pageChanged.emit(this.page);
  }

  prevPage(): void {
    if (this.page === 1) {
      return;
    }

    this.page--;
    this.pageChanged.emit(this.page);
  }
}

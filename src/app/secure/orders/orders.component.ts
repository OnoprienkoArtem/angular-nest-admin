import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  lastPage!: number;
  selected!: number;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.load();
  }

  load(page = 1): void {
    this.orderService.all(page).subscribe(res => {
      this.orders = res.data;
      this.lastPage = res.meta.last_page;
    });
  }

  select(id: number): void {
    this.selected = this.selected === id ? 0 : id;
  }

  itemState(id: number): string {
    return this.selected === id ? 'show' : 'hide';
  }
}

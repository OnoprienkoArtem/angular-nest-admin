import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  lastPage!: number;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.load();
  }

  load(page = 1): void {
    this.productService.all(page).subscribe(products => {
      this.products = products;
      this.lastPage = products.meta.last_page;
    });
  }

  delete(id: number) {
    if (confirm('Are you sure you wont to delete this record?')) {
      this.productService.delete(id).subscribe(() => {
        this.products = this.products.filter(p => p.id !== id);
      });
    }
  }
}

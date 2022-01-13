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
  page = 1;
  lastPage!: number;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.productService.all(this.page).subscribe(products => {
      this.products = products;
      this.lastPage = products.meta.last_page;
    });
  }

  nextPage(): void {
    if (this.page === this.lastPage) {
      return;
    }

    this.page++;
    this.load();
  }

  prevPage(): void {
    if (this.page === 1) {
      return;
    }

    this.page--;
    this.load();
  }

  delete(id: number) {
    if (confirm('Are you sure you wont to delete this record?')) {
      this.productService.delete(id).subscribe(() => {
        this.products = this.products.filter(p => p.id !== id);
      });
    }
  }
}

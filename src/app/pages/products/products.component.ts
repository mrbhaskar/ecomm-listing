import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';
import { ITypeProduct } from 'src/app/shared/interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: ITypeProduct[] = [];

  productType = '';

  constructor(private route: ActivatedRoute, private common: CommonService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productType = params.type;
      this.products = this.common[this.productType];

      console.log('Products: ', this.products);
      this.setHeaderColor();
    });
  }

  private setHeaderColor() {
    let color = '';
    if (this.productType === 'vegetables') {
      color = 'green';
    } else if (this.productType === 'groceries') {
      color = 'turquoise';
    } else if (this.productType === 'fruits') {
      color = 'yellow';
    } else if (this.productType === 'beverages') {
      color = 'orange';
    }

    this.common.setHeaderColor(color);
  }

  public imgUrl(fileName: string) {
    return `../../../assets/${fileName}`;
  }

  ngOnDestroy() {
    this.common.setHeaderColor('none');
  }
}

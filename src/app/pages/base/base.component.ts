import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit {
  dummyText = '';
  categories = [];

  constructor(private router: Router, private common: CommonService) {}

  ngOnInit(): void {
    this.dummyText = this.common.dummyText;
    this.categories = this.common.categories;
  }

  public imgUrl(fileName: string) {
    return `../../../assets/${fileName}`;
  }

  public handleClick(cardId: string) {
    const type = this.categories.find((el) => el.id === cardId).type;

    this.router.navigate(['products', type]);
  }
}

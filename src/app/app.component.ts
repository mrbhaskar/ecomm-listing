import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommonService } from './service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ecomm';

  color = '';
  className = '';
  changeColor = false;

  search = new FormControl('');
  constructor(
    private common: CommonService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.search.valueChanges.subscribe((text) => {
      console.log('Search: ', text);
    });
  }

  ngAfterViewInit() {
    this.common.getHeaderColor().subscribe((color) => {
      console.log(color);
      this.changeColor = true;
      this.color = color;
      this.cdRef.detectChanges();
    });
  }
}

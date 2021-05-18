import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [BaseComponent],
  imports: [CommonModule, BaseRoutingModule, MatCardModule],
})
export class BaseModule {}

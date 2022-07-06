import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CartaoComponent } from './cartao.component';

@NgModule({
  declarations: [CartaoComponent],
  imports: [CommonModule],
  exports: [CartaoComponent],
})
export class CartaoModule {}

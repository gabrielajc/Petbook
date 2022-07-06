import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MenuModule } from '../menu/menu.module';
import { CabecalhoComponent } from './cabecalho.component';

@NgModule({
  declarations: [CabecalhoComponent],
  imports: [CommonModule, RouterModule, MenuModule],
  exports: [CabecalhoComponent],
})
export class CabecalhoModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RodapeComponent } from './rodape.component';

@NgModule({
  declarations: [RodapeComponent],
  imports: [CommonModule, RouterModule],
  exports: [RodapeComponent],
})
export class RodapeModule {}

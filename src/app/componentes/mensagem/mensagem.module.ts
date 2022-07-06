import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MensagemComponent } from './mensagem.component';

@NgModule({
  declarations: [MensagemComponent],
  imports: [CommonModule],
  exports: [MensagemComponent],
})
export class MensagemModule {}

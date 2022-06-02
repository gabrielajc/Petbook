import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MensagemModule, ReactiveFormsModule],
  exports: [MensagemModule, ReactiveFormsModule],
})
export class SharedModule {}

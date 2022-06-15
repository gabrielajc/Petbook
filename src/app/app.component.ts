import { Component } from '@angular/core';
import { AutenticacaoGuard } from './autenticacao/autenticacao.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'petbook';
  mostrarFooter = false

  constructor(private autenticacaoGuard: AutenticacaoGuard) {}

  ngOnInit(){
    this.autenticacaoGuard.mostraFooter.subscribe(mostrar => {
      this.mostrarFooter = mostrar
    });
  }
}

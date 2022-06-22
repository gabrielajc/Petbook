import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError  } from '@angular/router';
import { AutenticacaoGuard } from './autenticacao/autenticacao.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'petbook';
  mostrarFooter = false
  public routeLoading: boolean = false;

  constructor(private autenticacaoGuard: AutenticacaoGuard, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.routeLoading = true;
      }

      if (event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError)
      {
          this.routeLoading = false;
      }
    });
  }

  ngOnInit(){
    this.autenticacaoGuard.mostraFooter.subscribe(mostrar => {
      this.mostrarFooter = mostrar
    });
  }
}

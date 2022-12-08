import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Boleta';

  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["all/boleta"]);
  }


  Nuevo(){
    this.router.navigate(["add/boleta"]);
  }


  VentasDetalle(){
    this.router.navigate(["all/venta"]);
  }

  GenerarVenta01(){
    this.router.navigate(["add/venta"]);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Boleta } from '../Modelo/Boleta';
import { Venta } from '../Modelo/Venta';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url= 'http://localhost:8080/boleta/';
  Url1='http://localhost:8080/ventas/';

  ListarBoleta(){
    return this.http.get<Boleta[]>(this.Url+'all');
  }

  RegistraBoleta(boleta:Boleta){
    return this.http.post<Boleta>(this.Url+`save`,boleta);
  }

  ListarVenta(){
    return this.http.get<Venta[]>(this.Url1+'all');
  }

  RegistraVenta(venta:Venta){
    return this.http.post<Venta>(this.Url1+`save`,venta);
  }
}

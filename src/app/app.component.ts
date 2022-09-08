import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public appPages = [
    { title: 'Reservas', url: '/folder/Reservas', icon: 'clipboard' },
    { title: 'Mesas', url: '/folder/Mesas', icon: 'storefront' },
    { title: 'Menu', url: '/folder/Menu', icon: 'restaurant' },
    { title: 'Comandas', url: '/folder/Comandas', icon: 'reader' },
    { title: 'Caja', url: '/folder/Caja', icon: 'cash' },
    { title: 'Boleta', url: '/folder/Boleta', icon: 'receipt' },
  ];

  public labels = ['Administrador', 'Cliente', 'Cocina', 'Bodega', 'Finanzas',];
  constructor() {}
}

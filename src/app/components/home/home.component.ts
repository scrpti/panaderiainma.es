import { Component } from '@angular/core';
import { LocalizacionesComponent } from '../localizaciones/localizaciones.component';
import { NosotrosComponent } from '../nosotros/nosotros.component';
import { ProductosComponent } from '../productos/productos.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { MadebyscrptComponent } from "../madebyscrpt/madebyscrpt.component";

@Component({
  selector: 'app-home',
  imports: [LocalizacionesComponent, NosotrosComponent, ContactoComponent, MadebyscrptComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}

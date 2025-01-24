import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { LocalizacionesComponent } from './components/localizaciones/localizaciones.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

export const routes: Routes = [
    { path : '', redirectTo: '/home', pathMatch: 'full' },
    { path : 'home', component: HomeComponent },
    { path : 'productos', component: ProductosComponent },
    { path : 'localizaciones', component: LocalizacionesComponent },
    { path : 'nosotros', component: NosotrosComponent },
    { path : 'contacto', component: ContactoComponent },
];

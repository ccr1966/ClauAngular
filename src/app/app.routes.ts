
//claudia cecilia rossi
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
//import { ContactoComponent } from './components/contacto/contacto.component';
import { FormularioComponent } from './components/formulario/formulario.component';


import { EstudiosComponent} from './components/estudios/estudios.component';
import { TrabajosComponent} from './components/trabajos/trabajos.component';
import { HobbiesComponent} from './components/hobbies/hobbies.component';
import { LogrosComponent} from './components/logros/logros.component';




const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
 // { path: 'contacto', component: ContactoComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'estudios', component: EstudiosComponent },
  { path: 'trabajos', component: TrabajosComponent },
  { path: 'logros', component: LogrosComponent },
  { path: 'hobbies', component: HobbiesComponent },
 { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true } );

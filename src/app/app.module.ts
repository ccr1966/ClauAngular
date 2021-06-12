// claudia cecilia rossi

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
//Rutas
import { APP_ROUTING } from './app.routes';
//Servicios
import { EstudiosService } from './services/estudios.service';
import { TrabajosService } from './services/trabajos.service';
import { LogrosService } from './services/logros.service';
import { HobbiesService } from './services/hobbies.service';

import { MessageService } from './services/message.service';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
//import { ContactoComponent } from './components/contacto/contacto.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { LogrosComponent } from './components/logros/logros.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';

@NgModule({
  declarations: [
    
    AppComponent,
    NavbarComponent,
    HomeComponent,
    //ContactoComponent,
    FormularioComponent,
    EstudiosComponent,
    LogrosComponent,
    TrabajosComponent,
    HobbiesComponent
      ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    EstudiosService,
    TrabajosService,
    LogrosService,
    HobbiesService,
    MessageService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

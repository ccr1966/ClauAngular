import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

//import swal from 'sweetalert';
//estas tres lineas reemlazan la anterior sino da error al ejecutar
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;


@Component({
 selector: 'app-formulario',
 templateUrl: './formulario.component.html' 
})
export class FormularioComponent {
 constructor(public _MessageService: MessageService) {
}
 contactForm(form) {
 this._MessageService.sendMessage(form).subscribe(() => {
 swal("Your information", "E-mail have been send", 'success');
 });
 }
}
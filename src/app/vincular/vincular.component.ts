import { Component } from '@angular/core';

@Component({
  selector: 'app-vincular',
  standalone: true,
  imports: [],
  templateUrl: './vincular.component.html',
  styleUrl: './vincular.component.css'
})
export class VincularComponent {
  mensaje = 'Hola Mundo';

  cambiarMensaje() {
    this.mensaje = 'Adios Mundo';
  }
}

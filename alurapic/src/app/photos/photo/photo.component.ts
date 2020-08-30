import { Component, Input } from '@angular/core';

@Component({
  selector: 'ap-photo', //Sempre é interessante colocar um prefixo pra separar dos outros componentes
  templateUrl: 'photo.component.html'
})
export class PhotoComponent {

  @Input() description = '';

  @Input() url = '';

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit{

  // Componente de página pode omitir o selector
  // quem carregará esse arquivo será o sistema de módulos do Angular

  loginForm : FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { PlatformDetectorService } from '../../core/platform-detector/platform-detector.service';


@Component({
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit{

  // Componente de página pode omitir o selector
  // quem carregará esse arquivo será o sistema de módulos do Angular

  loginForm : FormGroup;

  @ViewChild('variavelTemplateUserName') userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.platformDetectorService.isPlatformBrowser &&
      this.userNameInput.nativeElement.focus();

  }

  login() {
    // console.log ('Vai se autenticar');
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService
      .authenticate(userName, password)
      .subscribe(
          () => {
            console.log('autenticado'), // flavio/123
            // this.router.navigateByUrl('user/' + userName);
            this.router.navigate(['user',  userName]);
          },
          err => {
            console.log(err);
            this.loginForm.reset();
            // se precaver de estar usando uma plataforma ServerSide Rendering
            // porque estamos manipulando o DOM diretamente
            this.platformDetectorService.isPlatformBrowser &&
              this.userNameInput.nativeElement.focus();
            alert('Invalid Username or password. Try again!')
          }
      );
  }
}

import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";
import { UserService } from "../../../core/user/user.service";

@Directive({
  selector: '[showIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {

  currentDisplay: string;

  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer2,
    private userService: UserService
  ) { }


  ngOnInit(): void {

    this.currentDisplay = getComputedStyle(this.element.nativeElement).display;

    this.userService.getUser().subscribe(user => {
      if (user) {
        this.renderer.setStyle(this.element.nativeElement, 'display', this.currentDisplay);
      } else {
        this.currentDisplay = getComputedStyle(this.element.nativeElement).display;
        this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
      }
    });

  }
}

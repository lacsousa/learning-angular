import { Component } from "@angular/core";

@Component({
  selector: 'ap-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  private _isShown: boolean = false;

  public get isShown(): boolean {
    return this._isShown;
  }

  public set isShown(value: boolean) {
    this._isShown = value;
  }

  toggle(){
    this.isShown = !this.isShown;
  }
}

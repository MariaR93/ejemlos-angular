import { Component } from '@angular/core';
import { getNgModuleDef } from '@angular/core/src/render3/definition';
import { getTypeNameForDebugging } from '@angular/core/src/change_detection/differs/iterable_differs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'Angular';
  nombre:string = 'Ricardo'
edad:number = 25;
  getName():string{
    return this.nombre+" "+this.title+ " "+this.edad;
  }
}

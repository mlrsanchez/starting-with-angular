import { Component, Input } from '@angular/core';
import {IConsoleAccesory} from '../models/accessories.model';

@Component({
  selector: 'app-console-accesories',
  templateUrl: './console-accesories.component.html',
  styles: [
  ]
})
export class ConsoleAccesoriesComponent {
   @Input() consoleAccesory !: IConsoleAccesory;

}

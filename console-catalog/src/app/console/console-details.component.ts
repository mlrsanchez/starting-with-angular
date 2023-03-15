import { Component, OnInit } from '@angular/core';
import { Console } from '../models/console.model';
import {IConsoleAccesory} from '../models/accessories.model';
import { ConsoleStockService } from '../service/console-stock.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-console-details',
  templateUrl: './console-details.component.html',
  styles: [
  ]
})
export class ConsoleDetailsComponent  implements OnInit{
 
  consoleDetail!: Console;
  consoleAccesories!: IConsoleAccesory[];
  
  nameConsoleSelected?: string ;
  constructor(
    private consoleStockService :ConsoleStockService,
    private router: ActivatedRoute){};

  ngOnInit(): void {

    this.nameConsoleSelected =  this.router.snapshot.paramMap.get('id') as string ;
    console.log( this.nameConsoleSelected); 
    this.consoleDetail =this.consoleStockService.getConsoleByName(this.nameConsoleSelected) as Console;
    this.consoleAccesories = this.consoleDetail.accesories;
  }

}

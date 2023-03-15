import { Component, OnInit } from '@angular/core';
import { ConsoleStockService } from '../service/console-stock.service';
import { Console } from '../models/console.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-console-list',
  templateUrl: './console-list.component.html',
  styles: [
  ]
})
export class ConsoleListComponent implements OnInit {
   
  consoles!: Console[];
  constructor( private consoleStockService: ConsoleStockService,
                private router: Router
                ){}
  
  ngOnInit(): void {    
     this.consoles = this.consoleStockService.getAllConsoles();
  
  } 

  selectedGame(consoleName: string) {
    console.log('--->>>' + consoleName);
    //this.router.navigate (['/consoles'],consoleName} );
    this.router.navigate(['/consoles'],
      {
        queryParams: {
          param1: consoleName
        }
      });
  }

}

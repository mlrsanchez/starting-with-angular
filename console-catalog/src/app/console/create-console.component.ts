import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder , FormGroup, FormControl, Validators ,AbstractControl} from '@angular/forms';
import { Console } from '../models/console.model';
import { ConsoleStockService } from '../service/console-stock.service';



const nameValid = (control: AbstractControl): { [key: string]: any } | null => {
  const firstLetter = control.value.toString()[0];
  console.log(!!firstLetter && firstLetter !== firstLetter.toUpperCase());

  return !!firstLetter && firstLetter !== firstLetter.toUpperCase()
    ? { nameValid: 'invalid name' }
    : null;
};




@Component({
  selector: 'app-create-console',
  templateUrl: './create-console.component.html',
  styles: [
    `
      em { color: #e05c65; padding-left: 10px; }
      .error { background-color: #e3c3c5;}
      .error input,.error select, .error textarea { background-color: #e3c3c5;}
      .error+select {  background-color: #e3c3c5;  }
      .error :: -webkit-input-placeholder { color: #999;  }
      .error :: -moz-placeholder {   color: #999;   }
      .error :: -ms-input-placeholder { color: #999;  }
    `,
  ],
  providers: [

  ]
})



export class CreateConsoleComponent implements OnInit {

  newConsoleForm!: FormGroup;
  name!: FormControl;
  vendor!: FormControl;
  price!: FormControl;
  console!: Console;
  numberPattern =/^\d*$/;
  
  constructor( 
    private consoleStockService: ConsoleStockService, private router: Router, 
    private builder: FormBuilder ) {}

  ngOnInit(): void {
  
    this.name = new FormControl('', Validators.required);
    this.vendor = new FormControl ('', Validators.required);
    this.price = new FormControl ('', Validators.pattern(this.numberPattern));

 /**   this.newConsoleForm = this.builder.group({
      name :['', Validators.required],
      vendor: ['', Validators.required],
      price: [null, [Validators.required, Validators.pattern(this.numberPattern)]],
  });  */
 
    this.newConsoleForm = new FormGroup({
      name: this.name,
      vendor: this.vendor,
      price: this.price
    });  }

  saveNewConsole (formValues: any){
    debugger;
     console.log (formValues);
     const consoleNew = new Console (formValues.value.name, formValues.value.vendor, formValues.value.price);
     this.consoleStockService.addConsole(consoleNew);
     this.router.navigate (["/consoles"]);
  }
}

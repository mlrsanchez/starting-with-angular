import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule }  from '@angular/forms';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shell/navbar/navbar.component';
import { ConsoleListComponent } from './console/console-list.component';
import { ConsoleStockService } from './service/console-stock.service';
import { ConsoleDetailsComponent } from './console/console-details.component';
import { CreateConsoleComponent } from './console/create-console.component';
import { ConsoleAccesoriesComponent } from './console/console-accesories.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,   
    ConsoleListComponent, 
    ConsoleDetailsComponent, 
    CreateConsoleComponent, 
    ConsoleAccesoriesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    ConsoleStockService,
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

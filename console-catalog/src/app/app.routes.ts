import {Routes} from '@angular/router';
import { CreateConsoleComponent } from './console/create-console.component';
import { ConsoleListComponent } from './console/console-list.component';
import { ConsoleDetailsComponent } from './console/console-details.component';


export const appRoutes: Routes=[
    {path: 'consoles/new', component:CreateConsoleComponent},
    {path: 'consoles/:id', component: ConsoleDetailsComponent },
    {path: 'consoles', component:ConsoleListComponent},
    {path: '', redirectTo:'/consoles', pathMatch: 'full'},
];


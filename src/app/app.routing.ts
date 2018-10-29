import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RantAndRaveComponent } from './rant-and-rave/rant-and-rave.component'

const appRoutes: Routes = [ 
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path:'rantandrave',
        component: RantAndRaveComponent
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
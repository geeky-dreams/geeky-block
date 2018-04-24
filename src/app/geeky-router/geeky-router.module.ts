import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './geeky-routes';

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class GeekyRouterModule { }

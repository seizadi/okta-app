import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';

// Okta Guard and Service
import { OktaAuthGuard } from './app.guard';
import { OktaAuthService } from './app.service';
import { CallbackComponent } from './callback.component';
import { ProtectedComponent } from './protected.component';

const appRoutes: Routes = [
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [ OktaAuthGuard ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    OktaAuthGuard,
    OktaAuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

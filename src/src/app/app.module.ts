import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {NewComponent} from './new/new.component';
import {Service} from './new/serv.service';
import {NewResolver} from './new-resolver.resolver';

const appRoutes: Routes = [{
  path: '',
  component: HelloComponent
}, {
  path: 'new',
  component: NewComponent,
  resolve: {message: NewResolver}
}]
@NgModule({
  imports:      [ BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  providers: [NewResolver, Service],
  declarations: [ AppComponent, HelloComponent, NewComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

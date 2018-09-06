import { Component, OnInit } from '@angular/core';
import { Subscription} from 'rxjs';

import {Service} from './new/serv.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';
  loading = false;
  subs = new Subscription();

  constructor(private serv: Service) {}
  ngOnInit() {
    this.subs = this.serv.loading
      .subscribe(val => this.loading = val);
  } 
}

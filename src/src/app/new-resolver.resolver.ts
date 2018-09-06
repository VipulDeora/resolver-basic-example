import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import { Observable } from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import {Service} from './new/serv.service';

@Injectable()
export class NewResolver implements Resolve<any> {
  constructor(private http: HttpClient, private serv: Service) {}

  resolve(route: ActivatedRouteSnapshot) {
    this.serv.loading.next(true);
    return this.http.get('https://reqres.in/api/users/2')
      .pipe(map(val => {
        this.serv.loading.next(false);
        return val.data;
      }));
  }
}
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class Service {
  loading = new Subject<boolean>();
  constructor(private http: HttpClient) {}

  getLoadingStatus() {
    return this.loading.next
  }
}
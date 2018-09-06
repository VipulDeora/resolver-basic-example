import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html'
})
export class NewComponent implements OnInit {
  data: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.data = this.route.snapshot.data;;
  }
}
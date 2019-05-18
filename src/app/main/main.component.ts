import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from "@angular-redux/store";
import { IAppState } from "./../store";
import { INCREMENT,DECREMENT } from "./../actions";
import {Observable} from 'rxjs'


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @select() counter: Observable<number>;
  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.ngRedux.dispatch({ type: DECREMENT });
  }
}

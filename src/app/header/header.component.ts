import { Component, OnInit } from '@angular/core';
import { select } from "@angular-redux/store";
import {Observable} from 'rxjs'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @select() counter: Observable<number>;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { select } from "@angular-redux/store";
import { Observable } from 'rxjs'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @select() counter: Observable<number>;
  constructor() { }

  ngOnInit() {
  }

}

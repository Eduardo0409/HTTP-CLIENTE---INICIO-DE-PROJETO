import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface CurrentPrice {
  time:{
    updated: string
  },
  "bpi":{
    "USD":{
      "code":"USD",
      "symbol":"&#36;",
      "rate":"25,891.7998",
      "description":"United States Dollar",
      "rate_float":25891.7998
    }
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor(private http: HttpClient) { }

  update(){

  }

  ngOnInit() {
  }

}
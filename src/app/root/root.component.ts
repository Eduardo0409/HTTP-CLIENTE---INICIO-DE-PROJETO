import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface CurrentPrice {
  time:{
    updated: string
  },
  bpi: {
    USD: {
      symbol: string,
      rate_float: number;
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
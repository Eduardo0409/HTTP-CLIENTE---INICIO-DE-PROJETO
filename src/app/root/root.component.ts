import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Response {
  time:{
    updated: string
  },
  bpi: {
    USD: {
      symbol: string,
      rate_float: number;
    };
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  CurrentPrice = {} as Response;
  constructor(private http: HttpClient) { }

  update(){
    let url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    this.http.get<Response>(url).subscribe((data) => {;
      this.CurrentPrice = data;
    });
  }

  ngOnInit() {
  }

}
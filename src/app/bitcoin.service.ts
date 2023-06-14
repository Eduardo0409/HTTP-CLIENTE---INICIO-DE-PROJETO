import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Response {
  time:{
    updated: string;
  },
  bpi: {
    USD: {
      symbol: string;
      rate_float: number;
    };
    BRL: {
      symbol: string;
      rate_float: number;
    };
  };
}

@Injectable()
export class BitcoinService {
  currentPrice = {} as Response;
  history = [] as Array<Response>;

  constructor(private http: HttpClient) { 
    this.update();
  }
  
  update(){
    let url = "https://api.coindesk.com/v1/bpi/currentprice/BRL.json";
    this.http.get<Response>(url).subscribe((data) => {
      if(this.currentPrice.bpi){
        let current = this.currentPrice.bpi.USD.rate_float;
        let reader = data.bpi.USD.rate_float;
        if(current && current != reader){
          this.history.push(data);
          }
        } else{
          this.history.push(data);
        }
        this.currentPrice = data;
    });
  }
}


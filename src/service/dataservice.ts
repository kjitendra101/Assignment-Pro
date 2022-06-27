import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Datas {
  id?:string;
  name?:string;
  description?:string;
  webReference?:string;  
}

@Injectable()

export class DateService {
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>('assets/data.json')
    .toPromise()
    .then(res => <Datas[]>res.data)
    .then(data => { return data; });
}
 
}
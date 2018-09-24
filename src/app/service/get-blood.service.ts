import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export  class GetBloodService {

url = 'https://bloodapi3.herokuapp.com/home';
  constructor(private http: HttpClient) { }

  getData() {
    return this
            .http
            .get(`${this.url}`);
        }
}

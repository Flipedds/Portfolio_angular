import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Data} from "../Data";
import {Observable} from "rxjs";
import {Form} from "../Form";
// @ts-ignore
import {Toastify} from 'toastify-js';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl = 'http://localhost:5000';
  private  headers = { 'Content-Type': 'application/json' };
  constructor(private http: HttpClient) {}

  getDataFromAPI(): Observable<Data[]> {
    return this.http.get<Data[]>(this.apiUrl);
  }

  postForm(value: Form){
    const headers = { 'Content-Type': 'application/json' };
    // passa os headers e os valores do form como json
    this.http.post(`${this.apiUrl}/form`, JSON.stringify(value), {headers}).subscribe(
      (response) => {
          alert(response);

      },
      (error) => {
        console.error("Erro ao enviar o formulário:", error);
      }
    )
}}

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Data} from "../Data";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getDataFromAPI(): Observable<Data[]> {
    return this.http.get<Data[]>(this.apiUrl);
  }
}

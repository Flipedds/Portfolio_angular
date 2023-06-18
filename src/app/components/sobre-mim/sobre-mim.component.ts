import { Component } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Data} from "../../Data";


@Component({
  selector: 'app-sobre-mim',
  templateUrl: './sobre-mim.component.html',
  styleUrls: ['./sobre-mim.component.css']
})
export class SobreMimComponent {
  datas:Data[] = [];

  constructor(private apiService: ApiService) {
    this.getData();
  }

  getData() {
    this.apiService.getDataFromAPI().subscribe((data) => (this.datas = data));
  }
}

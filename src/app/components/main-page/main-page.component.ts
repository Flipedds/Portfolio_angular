import { Component } from '@angular/core';
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  constructor(private storageService: StorageService) {
    storageService.setItem("login", false);
  }
}

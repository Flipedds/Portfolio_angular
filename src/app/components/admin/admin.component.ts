import { Component } from '@angular/core';
import {StorageService} from "../../services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  user: string = "user123";
  senha: string = 'senha123';

  constructor(private storageService: StorageService, private router: Router) {
  }

  validUser(value: any) {
    let form_user = value.user;
    let form_pass = value.password;
    if (form_user === this.user && form_pass === this.senha){
      this.storageService.clear();
      this.storageService.setItem("login", true);
      alert("login efetuado com sucesso!");
      this.router.navigate(['/privado']);
    }else {
      alert("login ou senha incorretos");
    }
  }
}

import { Component } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Form} from "../../Form";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private apiService: ApiService) {
  }
  sendForm(value:Form) {
    this.apiService.postForm(value);
  }

  resetForm(form: NgForm) {
    form.reset();
  }
}

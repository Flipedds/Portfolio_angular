import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isDivVisible: boolean = false;
  close_menu() {
    this.isDivVisible = false;
  }

  openMenu() {
    this.isDivVisible = true;
  }
}

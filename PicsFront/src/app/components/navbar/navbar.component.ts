import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  myLocalStorage;

  constructor(private loginService: LoginService) {
    this.myLocalStorage = localStorage;
   }

  ngOnInit() {
  }
  onClick() {
    if (this.loginService.checkLogin()) {
      this.loginService.logout();
    }
    
  }

}

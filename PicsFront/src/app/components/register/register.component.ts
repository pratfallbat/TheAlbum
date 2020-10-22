import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: User = new User();
  registered: boolean = false;

  constructor (private registerService: RegisterService) {}

  ngOnInit() {
  }
  onSubmit() {
    console.log("submit test");
    this.registerService.sendUser(this.newUser)
    .subscribe(
      data => {
        this.registered = true;
        this.newUser = new User();
      },
      error => console.log(error)
    );
  }

}

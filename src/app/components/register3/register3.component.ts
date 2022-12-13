import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register3',
  templateUrl: './register3.component.html',
  styleUrls: ['./register3.component.css']
})
export class Register3Component implements OnInit {

  public passwordDifferent: boolean = false;
  public checkboxNotCheck: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
  }
  
  addUser(user: NgForm){
    if(user.value.password === user.value.password2 && user.value.validate === true){
      this.userService.addUserFromService(user.value).subscribe(() => {
        console.log("Utilisateur enregistré")
      })
    } else if(user.value.password !== user.value.password2){
      this.passwordDifferent = true;
      console.log("mdp différent")
    } else {
      this.checkboxNotCheck = true;
      console.log("Non check")
    }
  }
}

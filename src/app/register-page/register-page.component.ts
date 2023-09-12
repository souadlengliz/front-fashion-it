import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { UserserviceService } from "../services/userservice.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register-page",
  templateUrl: "./register-page.component.html",
  styleUrls: ["./register-page.component.scss"],
})
export class RegisterPageComponent implements OnInit {
  focus;
  focus1;
  focus2;

  fullName = new FormControl("");
  email = new FormControl("");
  password = new FormControl("");
  constructor(
    private userService: UserserviceService,
    private router: Router
  ) {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("register-page");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("register-page");
  }
  register() {
    const user = {
      name: this.fullName.value,
      email: this.email.value,
      password: this.password.value,
      role: "user",
    };
    this.userService.addUser(user);
    this.router.navigate(["/users"]);
  }
}

import { Component, OnDestroy, OnInit } from "@angular/core";
import { UserserviceService } from "../services/userservice.service";
import { Router } from "@angular/router";
import { FormControl } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { StorageService } from "ngx-webstorage-service";
@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
})
export class LoginPageComponent implements OnInit, OnDestroy {
  focus;
  focus1;
  username = new FormControl("");
  password = new FormControl("");
  constructor(
    private usersService: UserserviceService,
    private router: Router,
    public toastr: ToastrService
  ) {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("login-page");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("login-page");
  }
  // user authentication function
  login() {
    this.usersService
      .login(this.username.value, this.password.value)
      .subscribe((user) => {
        if (user) {
          localStorage.setItem("userId", user._id);
          localStorage.setItem("role", user.role);
          this.router.navigate(["/homepage"]);
        } else {
          this.toastr.error("Invalid Credentials");
        }
      });
  }
}

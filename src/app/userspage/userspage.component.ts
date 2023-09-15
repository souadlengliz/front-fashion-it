import { Component, OnInit } from "@angular/core";
import { UserserviceService } from "../services/userservice.service";
import { ChangeDetectorRef } from "@angular/core";
import { users } from "../models/users";
import { Router } from "@angular/router";
@Component({
  selector: "app-userspage",
  templateUrl: "./userspage.component.html",
  styleUrls: ["./userspage.component.scss"],
})
export class UserspageComponent implements OnInit {
  constructor(
    private userService: UserserviceService,
    private change: ChangeDetectorRef,
    private router: Router
  ) {}
  items: users[] = [];
  ngOnInit(): void {
    if (localStorage.getItem("userId") == null) {
      this.router.navigate(["/loginpage"]);
    }
    this.refresh();
  }
  addUser(Users) {
    this.userService.addUser(Users);
    this.refresh();
    this.change.detectChanges();
  }
  refresh() {
    this.userService.getAllUsers().subscribe((data) => {
      console.log(data);
      this.items = data;
      this.change.detectChanges();
    });
  }
  async delete(id: string) {
    await delay(1000);
    this.userService.deleteUser(id);
    this.refresh();
  }
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

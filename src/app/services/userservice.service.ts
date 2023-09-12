import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { users } from "../models/users";

@Injectable({
  providedIn: "root",
})
export class UserserviceService {
  constructor(private http: HttpClient) {}
  addUser(users) {
    this.http.post("http://localhost:3000/user", users).subscribe((data) => {
      console.log(data);
    });
  }
  public getAllUsers() {
    return this.http.get<users[]>("http://localhost:3000/user");
  }
  public getUser(id) {
    return this.http.get<users>("http://localhost:3000/user/" + id);
  }
  public updateUser(id, user) {
    return this.http.put<users>("http://localhost:3000/user/" + id, user);
  }
  public deleteUser(id) {
    console.log(id);
    return this.http
      .delete("http://localhost:3000/user/" + id)
      .subscribe((data) => {});
  }
}

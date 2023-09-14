import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Event } from "../models/event";

@Injectable({
  providedIn: "root",
})
export class EventService {
  getBooksEvents(id) {
    return this.http.get<Event[]>("http://localhost:3000/event/user/" + id);
  }
  constructor(private http: HttpClient) {}

  searchEvents(query) {
    console.log(query);
    return this.http.get<Event[]>(
      "http://localhost:3000/event/search/" + query
    );
  }

  addEvent(event) {
    this.http.post("http://localhost:3000/event", event).subscribe((data) => {
      console.log(data);
    });
  }

  deleteEvent(id: any) {
    this.http.delete("http://localhost:3000/event/" + id).subscribe((data) => {
      console.log(data);
    });
  }

  public getAllEvents() {
    return this.http.get<Event[]>("http://localhost:3000/event");
  }

  //book event by event id and user id
  public bookEvent(eventId, userId) {
    this.http
      .get("http://localhost:3000/bookEvent/" + eventId + "/" + userId)
      .subscribe((data) => {
        console.log(data);
      });
  }

  //cancel event by event id and user id
  public cancelEvent(eventId, userId) {
    this.http
      .delete("http://localhost:3000/bookEvent/" + eventId + "/" + userId)
      .subscribe((data) => {
        console.log(data);
      });
  }
}

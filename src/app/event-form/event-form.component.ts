import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { EventService } from "../services/event.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-event-form",
  templateUrl: "./event-form.component.html",
  styleUrls: ["./event-form.component.scss"],
})
export class EventFormComponent implements OnInit {
  name = new FormControl("");
  description = new FormControl("");
  date = new FormControl("");
  location = new FormControl("");
  seats = new FormControl("");
  constructor(private eventService: EventService, private router: Router) {}
  ngOnInit(): void {}
  submitEvent() {
    const event = {
      name: this.name.value,
      description: this.description.value,
      date: this.date.value.toLocaleString(),
      location: this.location.value,
      seats: this.seats.value,
      availableSeats: this.seats.value,
    };
    this.eventService.addEvent(event);
    this.router.navigate(["/eventspage"]);
  }
}

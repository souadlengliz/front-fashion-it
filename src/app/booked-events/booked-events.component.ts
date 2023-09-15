import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { EventService } from "../services/event.service";
import { ActivatedRoute } from "@angular/router";
import { Event } from "../models/event";

@Component({
  selector: "app-booked-events",
  templateUrl: "./booked-events.component.html",
  styleUrls: ["./booked-events.component.scss"],
})
export class BookedEventsComponent implements OnInit {
  constructor(
    private eventsService: EventService,
    private change: ChangeDetectorRef,
    private router: ActivatedRoute
  ) {}
  items: Event[] = [];
  ngOnInit(): void {
    this.refresh();
  }
  //function to detect whenever a query is sent as a parameter to the route and then search for it

  delete(id) {
    this.eventsService.cancelEvent(id, localStorage.getItem("userId"));
    this.refresh();
    this.change.detectChanges();
  }
  async refresh() {
    console.log("refreshing");
    await delay(1000);
    this.eventsService
      .getBookedEvents(localStorage.getItem("userId"))
      .subscribe((data) => {
        console.log(data);
        this.items = data;
      });
  }
}
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

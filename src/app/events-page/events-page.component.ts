import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { EventService } from "../services/event.service";
import { Event } from "../models/event";

@Component({
  selector: "app-events-page",
  templateUrl: "./events-page.component.html",
  styleUrls: ["./events-page.component.scss"],
})
export class EventsPageComponent implements OnInit {
  constructor(
    private eventsService: EventService,
    private change: ChangeDetectorRef
  ) {}
  items: Event[] = [];
  ngOnInit(): void {
    this.refresh();
  }
  delete(id) {
    this.eventsService.deleteEvent(id);
    this.refresh();
    this.change.detectChanges();
  }
  async refresh() {
    await delay(1000);
    this.eventsService.getAllEvents().subscribe((data) => {
      console.log(data);
      this.items = data;
    });
  }
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

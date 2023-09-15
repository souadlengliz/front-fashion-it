import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { EventService } from "../services/event.service";
import { Event } from "../models/event";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-events-page",
  templateUrl: "./events-page.component.html",
  styleUrls: ["./events-page.component.scss"],
})
export class EventsPageComponent implements OnInit {
  private queryParamsSubscription: Subscription;

  constructor(
    private eventsService: EventService,
    private change: ChangeDetectorRef,
    private router: ActivatedRoute,
    private router2: Router
  ) {
    this.queryParamsSubscription = this.router.queryParams.subscribe(
      (queryParams) => {
        // Perform actions when query parameters change
        console.log("Query parameters have changed:", queryParams);
        if (queryParams["query"])
          this.eventsService
            .searchEvents(queryParams["query"])
            .subscribe((data) => {
              console.log(data);
              this.items = data;
            });
        else
          this.eventsService.getAllEvents().subscribe((data) => {
            console.log(data);
            this.items = data;
          });
      }
    );
  }
  items: Event[] = [];
  ngOnInit(): void {
    if (localStorage.getItem("userId") == null) {
      this.router2.navigate(["/loginpage"]);
    }
    this.refresh();
  }
  //function to detect whenever a query is sent as a parameter to the route and then search for it

  delete(id) {
    this.eventsService.deleteEvent(id);
    this.refresh();
    this.change.detectChanges();
  }
  async refresh() {
    console.log("refreshing");
    await delay(1000);
  }
}
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

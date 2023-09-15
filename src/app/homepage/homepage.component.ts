import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { EventService } from "../services/event.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"],
})
export class HomepageComponent implements OnInit {
  constructor(
    private eventService: EventService,
    private change: ChangeDetectorRef,
    private router: Router
  ) {}
  cards = [];
  //private userHasBooked: boolean[] = []];
  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe((data) => {
      console.log(data);
      this.cards = data;
    });
    this.refresh();
  }
  async refresh() {
    await delay(1000);
    this.eventService.getAllEvents().subscribe((data) => {
      console.log(data);
      this.cards = data;
    });
  }
  bookEvent(id: string) {
    // this.eventService.bookEvent(id, localStorage.getItem("userId"));
    // this.refresh();
    // this.change.detectChanges();
    this.router.navigate(["/bookingform"], {
      queryParams: { eventId: id },
    });
  }
}
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

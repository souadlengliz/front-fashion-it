import { Component, OnInit } from "@angular/core";

export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  rtlTitle: string;
  collapse?: string;
  isCollapsed?: boolean;
  isCollapsing?: any;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  smallTitle?: string;
  rtlTitle: string;
  rtlSmallTitle?: string;
  type?: string;
  collapse?: string;
  children?: ChildrenItems2[];
  isCollapsed?: boolean;
}
export interface ChildrenItems2 {
  path?: string;
  smallTitle?: string;
  rtlSmallTitle?: string;
  title?: string;
  rtlTitle: string;
  type?: string;
}
//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    type: "link",
    icontype: "tim-icons icon-chart-pie-36",
    rtlTitle: "لوحة القيادة",
  },
  {
    path: "/homepage",
    title: "Event catalog",
    type: "link",
    icontype: "tim-icons icon-chart-pie-36",
    rtlTitle: "لوحة القيادة",
  },
  {
    path: "/bookings",
    title: "My bookings",
    type: "link",
    icontype: "tim-icons icon-chart-pie-36",
    rtlTitle: "view bookings",
  },
  {
    path: "/",
    title: "events",
    type: "sub",
    icontype: "tim-icons icon-image-02",
    collapse: "events",
    rtlTitle: "events",
    isCollapsed: true,
    children: [
      {
        path: "eventform",
        rtlTitle: " Add event ",
        rtlSmallTitle: "Add event",
        title: "Add event",
        type: "link",
        smallTitle: "E",
      },
      {
        path: "eventspage",
        rtlTitle: " get all events ",
        rtlSmallTitle: "get all events",
        title: "Consult events",
        type: "link",
        smallTitle: "E",
      },
    ],
  },
  {
    path: "/",
    title: "users management",
    type: "sub",
    icontype: "tim-icons icon-image-02",
    collapse: "users management",
    rtlTitle: "users management",
    isCollapsed: true,
    children: [
      {
        path: "users",
        rtlTitle: " get all users ",
        rtlSmallTitle: "get all users",
        title: "Consult users",
        type: "link",
        smallTitle: "U",
      },
    ],
  },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
}

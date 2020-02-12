import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { MatMenu } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit  {
  title = 'angular universal material';
  subscriptions: any = {};
	@ViewChild('sidenav', { static: true }) public sidenav: MatSidenav;
	@ViewChild('userMenu', { static: true }) public userMenu: MatMenu;

  constructor(private router: Router,
    // public auth: AuthenticationService
    ) {}

  ngOnInit(): void {
  	this.subscriptions.routerEvents = this.router.events.subscribe((val) => {
      if(val instanceof NavigationStart) {
        this.sidenav.close()
      }
    });
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    Object.keys(this.subscriptions).forEach(key => this.subscriptions[key].unsubscribe());
  }
}
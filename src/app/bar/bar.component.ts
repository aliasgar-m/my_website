import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})

export class BarComponent implements OnInit {

  enableSideMenu = false;
  showSideMenu = false;

  constructor(private response: BreakpointObserver) {}

  ngOnInit() {
    this.response.observe([
                           Breakpoints.HandsetPortrait,
                           Breakpoints.TabletPortrait,
                           Breakpoints.HandsetLandscape,
                           Breakpoints.TabletLandscape])
        .subscribe(result => {
          this.enableSideMenu = false;
          this.showSideMenu = false;
          
          if (result.matches) {
            this.enableSideMenu = true;
          }
        });
  }

  displaySideMenu() {
    this.showSideMenu = !this.showSideMenu
  }
  
}

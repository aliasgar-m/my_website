import { Component, OnInit } from '@angular/core';
import { information } from 'assets/data/information';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  information = information;
  changeDisplay = false;

  constructor(private response: BreakpointObserver) {}

  ngOnInit() {
    this.response.observe([
                           Breakpoints.HandsetPortrait,
                           Breakpoints.TabletPortrait])
        .subscribe(result => {
          this.changeDisplay = false;
          
          if (result.matches) {
            this.changeDisplay = true;
          }
        });
  }

}

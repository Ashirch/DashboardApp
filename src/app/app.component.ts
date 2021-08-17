import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DashboardApp';
  sidebarOpen = true;

  ngOnInit() {}
  sideBartoggle()
  {
    this.sidebarOpen = !this.sidebarOpen;
  }
}

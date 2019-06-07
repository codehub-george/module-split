import { Component, OnInit } from '@angular/core';
import { AvailabilityService } from './availability.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'module-split';
  ngOnInit(): void {
    this.service.fetchItems();
  }

  constructor(private service: AvailabilityService) {

  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'log-header',
  templateUrl: './log-header.component.html',
  styleUrls: ['./log-header.component.css']
})
export class LogHeaderComponent {
  public today: number = Date.now();
}

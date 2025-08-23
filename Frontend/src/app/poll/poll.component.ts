import { Component } from '@angular/core';
import { PollService } from '../poll.service';
import { Poll } from '../poll.models';

@Component({
  selector: 'app-poll',
  imports: [],
  templateUrl: './poll.component.html',
  styleUrl: './poll.component.css'
})
export class PollComponent {
  polls: Poll[] = [];
  constructor(private pollService: PollService){

  }

  loadPolls() {
    this.pollService.getPolls().subscribe({
      next: (data) => {
          this.polls = data;
      },
      error: (error) => {
        console.error("Error fetching polls: ", error);
        
      }
    });
  }

}

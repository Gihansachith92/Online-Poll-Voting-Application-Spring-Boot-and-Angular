import { Component, OnInit , ChangeDetectorRef} from '@angular/core';
import { PollService } from '../poll.service';
import { Poll } from '../poll.models';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-poll',
  imports: [ CommonModule , FormsModule],
  templateUrl: './poll.component.html',
  styleUrl: './poll.component.css'
})
export class PollComponent implements OnInit{
  
  newPoll: Poll = {
    id: 0,
    question: '',
    options: [
      {voteOption: '', voteCount: 0},
      {voteOption: '', voteCount: 0}
    ]
  };

  polls: Poll[] = [];
  constructor(private pollService: PollService , private cdr: ChangeDetectorRef){
  }

  ngOnInit(): void {
      this.loadPolls();
  }

  loadPolls() {
    this.pollService.getPolls().subscribe({
      next: (data) => {
          console.log('Polls received:', data);
          this.polls = data;
          this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error fetching polls: ", error);
        
      }
    });
  }

}

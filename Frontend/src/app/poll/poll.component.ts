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
  isSubmitting = false;

  newPoll: Poll = {
    id: null,
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

  createPoll() {
    if (this.isSubmitting) return;
    this.isSubmitting = true;
    this.pollService.createPoll(this.newPoll).subscribe({
      next: (createdPoll) => {
        this.loadPolls();
        this.resetPoll();
        this.isSubmitting = false;
      },
      error: (error) => {
        console.error("Error creating poll: ", error);
        this.isSubmitting = false;
      }
    });
  }

  resetPoll(){
    this.newPoll = {
    id: null,
    question: '',
    options: [
      {voteOption: '', voteCount: 0},
      {voteOption: '', voteCount: 0}
    ]
  };
  }

  vote(pollId: number, optionIndex: number){
    this.pollService.vote(pollId, optionIndex).subscribe({
      next: () => {
        this.loadPolls(); // Reload polls after voting
      },
      error: (error) => {
        console.error("Error voting polls: ", error);
      }
    });
  }

  trackByIndex(index: number): number {
    return index;
  }

}

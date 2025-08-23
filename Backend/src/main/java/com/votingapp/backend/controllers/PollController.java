package com.votingapp.backend.controllers;

import com.votingapp.backend.model.Poll;
import com.votingapp.backend.request.Vote;
import com.votingapp.backend.services.PollService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/polls")
@CrossOrigin(origins = "http://localhost:4200/")
public class PollController {

    private final PollService pollService;

    public PollController(PollService pollService) {
        this.pollService = pollService;
    }

//create new poll
    @PostMapping
    public Poll createPoll(@RequestBody Poll poll) {
        return pollService.createPoll(poll);
    }

//    get all polls
    @GetMapping
    public List<Poll> getAllPolls() {
        return  pollService.getAllPolls();
    }

    //    get all polls
    @GetMapping("/{id}")
    public ResponseEntity<Poll> getPoll(@PathVariable Long id) {
        return  pollService.getPollById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    //creating voting option
    @PostMapping("/vote")
    public void vote(@RequestBody Vote vote){
        pollService.vote(vote.getPollId(), vote.getOptionIndex());
    }


}

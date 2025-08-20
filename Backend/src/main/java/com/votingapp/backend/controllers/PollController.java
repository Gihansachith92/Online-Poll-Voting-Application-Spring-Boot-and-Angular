package com.votingapp.backend.controllers;

import com.votingapp.backend.model.Poll;
import com.votingapp.backend.services.PollService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/polls")
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

}

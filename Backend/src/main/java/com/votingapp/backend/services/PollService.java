package com.votingapp.backend.services;

import com.votingapp.backend.model.Poll;
import com.votingapp.backend.repositories.PollRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PollService {

    private final PollRepository pollRepository;

    public PollService(PollRepository pollRepository) {
        this.pollRepository = pollRepository;
    }

    public Poll createPoll(Poll poll) {
        return pollRepository.save(poll);
    }

    public List<Poll> getAllPolls() {
        return pollRepository.findAll();
    }
}

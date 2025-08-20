package com.votingapp.backend.services;

import com.votingapp.backend.model.Poll;
import org.springframework.stereotype.Service;

@Service
public class PollService {
    public Poll createPoll(Poll poll) {
        return pollRepository.save(poll);
    }
}

package com.java.app.services;

import com.java.app.model.Result;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.java.app.db.ResultRepository;

import java.util.List;
import java.util.logging.Logger;

@Service
public class ResultService {
	
	@Autowired
    private ResultRepository resultRepository;

    public Result addResult(Result result) {
        return resultRepository.save(result);
    }
    
    public List<Result> getAllResults() {
        return resultRepository.findAll();
    }

}

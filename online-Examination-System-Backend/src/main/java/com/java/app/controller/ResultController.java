package com.java.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.java.app.model.Result;
import com.java.app.services.ResultService;



@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/res")

public class ResultController {
	
	@Autowired
    private ResultService resultService;

    // Add new result
    @PostMapping("/addResult")
    public Result addResult(@RequestBody Result result) {
        return resultService.addResult(result);
    }
    
    // Get all student
    @GetMapping("/getAll")
    public List<Result> getAllResults() {
        return resultService.getAllResults();
    }

}

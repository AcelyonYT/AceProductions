package core.javabackend.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import core.javabackend.responses.statusResponse;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class WorkingController {
    
    @GetMapping("/")
    public String home(){
        return "Welcome!";
    }

    @GetMapping("/working")
    public statusResponse isBackendWorking(){
        statusResponse status = new statusResponse("Java Backend is working!");
        return status;
    }
}

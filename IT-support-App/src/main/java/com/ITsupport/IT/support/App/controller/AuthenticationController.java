package com.ITsupport.IT.support.App.controller;


import com.ITsupport.IT.support.App.auth.AuthenticationRequest;
import com.ITsupport.IT.support.App.auth.AuthenticationResponse;
import com.ITsupport.IT.support.App.auth.RegisterRequest;
import com.ITsupport.IT.support.App.service.Imlp.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:4200/")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authService;

    @PostMapping("/register/user")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(authService.register(request));
    }

    @PostMapping("/register/admin")
    public ResponseEntity<AuthenticationResponse> registerAdmin(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(authService.registerAdmin(request));
    }

    @PostMapping("/register/technicien")
    public ResponseEntity<AuthenticationResponse> registerTechnicien(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(authService.registerTechnicien(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(authService.authenticate(request));

    }
}
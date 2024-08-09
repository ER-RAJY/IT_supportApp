package com.ITsupport.IT.support.App.service.Imlp;

import com.ITsupport.IT.support.App.auth.AuthenticationRequest;
import com.ITsupport.IT.support.App.auth.AuthenticationResponse;
import com.ITsupport.IT.support.App.auth.RegisterRequest;
import com.ITsupport.IT.support.App.model.Admin;
import com.ITsupport.IT.support.App.model.Technicien;
import com.ITsupport.IT.support.App.model.Utilisateur;
import com.ITsupport.IT.support.App.model.enums.Role;
import com.ITsupport.IT.support.App.repository.PersonneRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final PersonneRepository userdao;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {

        var user = new Utilisateur();
        user.setNom(request.getNom());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.USER);
        userdao.save(user);

        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
    public AuthenticationResponse registerAdmin(RegisterRequest request) {

        var admin = new Admin();
        admin.setNom(request.getNom());
        admin.setEmail(request.getEmail());
        admin.setPassword(passwordEncoder.encode(request.getPassword()));
        admin.setRole(Role.ADMIN);
        userdao.save(admin);

        var jwtToken = jwtService.generateToken(admin);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }


    public AuthenticationResponse registerTechnicien(RegisterRequest request) {

        var admin = new Technicien();
        admin.setNom(request.getNom());
        admin.setEmail(request.getEmail());
        admin.setPassword(passwordEncoder.encode(request.getPassword()));
        admin.setRole(Role.TECHNICIEN);
        userdao.save(admin);

        var jwtToken = jwtService.generateToken(admin);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }


    public AuthenticationResponse authenticate(AuthenticationRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        var user = userdao.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

}

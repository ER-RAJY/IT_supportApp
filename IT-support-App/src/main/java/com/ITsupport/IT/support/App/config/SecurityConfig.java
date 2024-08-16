package com.ITsupport.IT.support.App.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthFilter;

    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(authorize -> authorize
                                .requestMatchers("/auth/**","/auth/users/**","/auth/techniciens/**","/auth/tickets/add").permitAll()
                                .requestMatchers("/auth/authenticate","/auth/register/admin").permitAll()
                                .requestMatchers("/auth/tickets/add", "/auth/tickets/byUtilisateur/**","/auth/tickets/editditDescrption").hasAuthority("USER")
                                .requestMatchers("/auth/equipements/**","/auth/register/**").hasAuthority("ADMIN")
                                .requestMatchers("/auth/tickets/byTechnicien","/auth/tickets/editStatus").hasAuthority("TECHNICIEN")
                                .anyRequest()
                                .authenticated()

                )
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

}
package com.ITsupport.IT.support.App.controller;


import com.ITsupport.IT.support.App.model.Utilisateur;
import com.ITsupport.IT.support.App.service.Imlp.UtilisateurServiceImpl;
import com.ITsupport.IT.support.App.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("auth/users")
@CrossOrigin("*")
public class UtilisateurController {
    @Autowired
    UtilisateurService utilisateurService;

    @GetMapping("/all")
    public List<Utilisateur> getAllUtilisateur(){
        return utilisateurService.getAll();
    }





}

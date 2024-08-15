package com.ITsupport.IT.support.App.service.Imlp;

import com.ITsupport.IT.support.App.model.Technicien;
import com.ITsupport.IT.support.App.model.Utilisateur;
import com.ITsupport.IT.support.App.repository.UtilisateurRepository;
import com.ITsupport.IT.support.App.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UtilisateurServiceImpl implements UtilisateurService {

    @Autowired
    UtilisateurRepository utilisateurRepository;

    @Override
    public List<Utilisateur> getAll(){
        return utilisateurRepository.findAll();
    }







}

package com.ITsupport.IT.support.App.controller;

import com.ITsupport.IT.support.App.model.Technicien;
import com.ITsupport.IT.support.App.service.TechniciensService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/auth/techniciens")
@CrossOrigin("*")
public class TechniciensController {

    @Autowired
    TechniciensService techniciensService  ;

    @GetMapping("/all")
    public List<Technicien> getAllTechnicien(){
        return techniciensService.getAll();
    }

}

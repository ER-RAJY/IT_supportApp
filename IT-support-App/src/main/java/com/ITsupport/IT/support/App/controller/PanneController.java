package com.ITsupport.IT.support.App.controller;

import com.ITsupport.IT.support.App.model.Panne;
import com.ITsupport.IT.support.App.service.PanneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/panne")
public class PanneController {
    @Autowired
    PanneService panneService;

    @GetMapping("/all")
    public List<Panne> getAll(){
        return panneService.getAll();
    }

    @PostMapping("/add")
    public Panne addPanne(@RequestBody Panne panne){
        return panneService.addPanne(panne);
    }

    @PutMapping("/edit/{id}")
    public Panne addEdit(@PathVariable Long id,@RequestBody Panne panne){
        return panneService.editPanne(id,panne);
    }

    @DeleteMapping("/delete/{id}")
    public void deletePanne(@PathVariable Long id){
        panneService.deletePanne(id);
    }


}

package com.ITsupport.IT.support.App.service.Imlp;

import com.ITsupport.IT.support.App.model.Panne;
import com.ITsupport.IT.support.App.repository.PanneRepository;
import com.ITsupport.IT.support.App.service.PanneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PanneServiceImpl implements PanneService {

    @Autowired
    PanneRepository panneRepository;


    @Override
    public Panne addPanne(Panne panne) {
        return panneRepository.save(panne) ;
    }

    @Override
    public Panne editPanne(Long id, Panne panne) {
        panneRepository.findById(id);

        Panne editedPanne = new Panne();

        editedPanne.setPanneId(id);
        editedPanne.setName(panne.getName());

        return panneRepository.save(editedPanne);
    }

    @Override
    public void deletePanne(Long id) {
        panneRepository.deleteById(id);
    }

    @Override
    public List<Panne> getAll() {
        return panneRepository.findAll();
    }
}
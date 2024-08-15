package com.ITsupport.IT.support.App.service.Imlp;

import com.ITsupport.IT.support.App.model.Technicien;
import com.ITsupport.IT.support.App.repository.TechniciensRepository;
import com.ITsupport.IT.support.App.repository.TicketRepository;
import com.ITsupport.IT.support.App.service.TechniciensService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TechniciensServiceImpl implements TechniciensService {
     @Autowired
     TechniciensRepository technicienRepository;


    @Override
    public List<Technicien> getAll() {
        return technicienRepository.findAll();
    }


}

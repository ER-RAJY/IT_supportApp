package com.ITsupport.IT.support.App.service;

import com.ITsupport.IT.support.App.model.Panne;

import java.util.List;

public interface PanneService {
    Panne addPanne(Panne panne);
    Panne editPanne(Long id , Panne panne);
    void deletePanne(Long id);
    List<Panne> getAll();
}

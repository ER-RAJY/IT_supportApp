package com.ITsupport.IT.support.App.service;

import com.ITsupport.IT.support.App.model.Equipment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface EquipmentService{
    Equipment addEquipment(Equipment equipment);
    Equipment editEquipment(Long id, Equipment equipment);
    List<Equipment> getAllEquipements();
    void deleteEquipment(Long id);
}

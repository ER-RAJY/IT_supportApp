package com.ITsupport.IT.support.App.service.Imlp;

import com.ITsupport.IT.support.App.model.Equipment;
import com.ITsupport.IT.support.App.repository.EquipmentRepository;
import com.ITsupport.IT.support.App.service.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EquipmentServiceIpml implements EquipmentService {


    @Autowired
    EquipmentRepository equipmentRepository;


    @Override
    public Equipment addEquipment(Equipment equipment) {
        return equipmentRepository.save(equipment);
    }

    @Override
    public Equipment editEquipment(Long id, Equipment equipment) {
        equipmentRepository.findById(id);

        Equipment editEquipment = new Equipment();
        editEquipment.setEquipementId(id);
        editEquipment.setName(equipment.getName());
        editEquipment.setUrlImg(equipment.getUrlImg());
        editEquipment.setDescription(equipment.getDescription());
        editEquipment.setStatut(equipment.getStatut());


        return equipmentRepository.save(editEquipment);
    }

    @Override
    public List<Equipment> getAllEquipements() {
        return equipmentRepository.findAll();
    }

    @Override
    public void deleteEquipment(Long id) {
        equipmentRepository.deleteById(id);
    }
}

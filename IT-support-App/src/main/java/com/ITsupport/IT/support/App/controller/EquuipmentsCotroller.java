package com.ITsupport.IT.support.App.controller;

import com.ITsupport.IT.support.App.model.Equipment;
import com.ITsupport.IT.support.App.service.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/equipment")
public class EquuipmentsCotroller {

     @Autowired
    EquipmentService equipmentService;

     @PostMapping("/add")
     public Equipment addEquipment(@RequestBody Equipment equipment){
         return equipmentService.addEquipment(equipment);
     }

     @DeleteMapping("/delete/{id}")
    public void deleteEquipment(@PathVariable Long id){
         equipmentService.deleteEquipment(id);
     }
     @PutMapping("/edit/{id}")
     public Equipment editEquipment(@PathVariable Long id,@RequestBody Equipment equipment){
         return equipmentService.editEquipment(id, equipment);
     }
}

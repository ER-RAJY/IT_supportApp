package com.ITsupport.IT.support.App;

import com.ITsupport.IT.support.App.model.Equipment;
import com.ITsupport.IT.support.App.model.enums.EquipmentStatut;
import com.ITsupport.IT.support.App.repository.EquipmentRepository;
import com.ITsupport.IT.support.App.service.Imlp.EquipmentServiceIpml;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class EquipmentServiceImplTest {

    @Mock
    private EquipmentRepository equipmentRepository;

    @InjectMocks
    private EquipmentServiceIpml equipmentServiceImpl;

    private Equipment equipment;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        equipment = new Equipment();
        equipment.setEquipementId(1L);
        equipment.setName("Laptop");
        equipment.setDescription("High-end gaming laptop");
        equipment.setStatut(EquipmentStatut.DISPONIBLE); // Updated to match the enum values
    }

    @Test
    void addEquipment_ShouldReturnSavedEquipment() {
        when(equipmentRepository.save(any(Equipment.class))).thenReturn(equipment);

        Equipment savedEquipment = equipmentServiceImpl.addEquipment(equipment);

        assertNotNull(savedEquipment);
        assertEquals(equipment.getName(), savedEquipment.getName());
        verify(equipmentRepository, times(1)).save(equipment);
    }

    @Test
    void editEquipment_ShouldReturnUpdatedEquipment() {
        when(equipmentRepository.findById(equipment.getEquipementId())).thenReturn(Optional.of(equipment));
        when(equipmentRepository.save(any(Equipment.class))).thenReturn(equipment);

        Equipment updatedEquipment = equipmentServiceImpl.editEquipment(equipment.getEquipementId(), equipment);

        assertNotNull(updatedEquipment);
        assertEquals(equipment.getName(), updatedEquipment.getName());
        verify(equipmentRepository, times(1)).findById(equipment.getEquipementId());
        verify(equipmentRepository, times(1)).save(any(Equipment.class));
    }

    @Test
    void getAllEquipements_ShouldReturnEquipmentList() {
        List<Equipment> equipmentList = new ArrayList<>();
        equipmentList.add(equipment);

        when(equipmentRepository.findAll()).thenReturn(equipmentList);

        List<Equipment> allEquipments = equipmentServiceImpl.getAllEquipements();

        assertNotNull(allEquipments);
        assertEquals(1, allEquipments.size());
        verify(equipmentRepository, times(1)).findAll();
    }

    @Test
    void deleteEquipment_ShouldInvokeDeleteById() {
        doNothing().when(equipmentRepository).deleteById(equipment.getEquipementId());

        equipmentServiceImpl.deleteEquipment(equipment.getEquipementId());

        verify(equipmentRepository, times(1)).deleteById(equipment.getEquipementId());
    }
}

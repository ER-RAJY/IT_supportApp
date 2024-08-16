package com.ITsupport.IT.support.App.controller;

import com.ITsupport.IT.support.App.model.Ticket;
import com.ITsupport.IT.support.App.model.enums.EquipmentStatut;
import com.ITsupport.IT.support.App.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/auth/tickets")
@CrossOrigin("*")
public class TicketController {

    @Autowired
    private TicketService ticketService;

    @GetMapping("/all")
    public List<Ticket> getAllTickets() {
        return ticketService.getAll();
    }

    @PostMapping("/add")
    public Ticket addTicket(@RequestBody Ticket ticket) {
        return ticketService.addTeckit(ticket);
    }

    @PutMapping("/editditDescrption/{id}")
    public Ticket editDescrptionTicket(@PathVariable Long id, @RequestBody Ticket ticket) {
        return ticketService.editTicket(id, ticket);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteTicket(@PathVariable Long id) {
        ticketService.deleteTicket(id);
    }

    @PutMapping("/assigner/{id}")
    public Ticket linkTicket(@PathVariable Long id, @RequestBody Ticket ticket) {
        return ticketService.linkTicket(id, ticket);
    }

    @PutMapping("/editStatus/{id}")
    public Ticket editStatusTicket(@PathVariable Long id, @RequestBody Ticket ticket) {
        return ticketService.editStatusTicket(id, ticket);
    }

    @GetMapping("/byTechnicien/{id}")
    public List<Ticket> findByTechnicien(@PathVariable Long id) {
        return ticketService.findByTechnicien(id);
    }

    @GetMapping("/byUtilisateur/{id}")
    public List<Ticket> findByUtilisateur(@PathVariable Long id) {
        return ticketService.findByUtilisateur(id);
    }


}
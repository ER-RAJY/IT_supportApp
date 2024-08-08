package com.ITsupport.IT.support.App.controller;

import com.ITsupport.IT.support.App.model.Ticket;
import com.ITsupport.IT.support.App.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tickets")
public class TicketController {

    @Autowired
    private TicketService ticketService;

    @GetMapping("/all")
    public List<Ticket> getAllTickets() {
        return ticketService.getAll();
    }

    @PostMapping("/add")
    public Ticket addTeckit(@RequestBody Ticket ticket) {
        return ticketService.addTeckit(ticket);
    }

    @PutMapping("/edit/{id}")
    public Ticket editTicket(@PathVariable Long id, @RequestBody Ticket ticket) {
        return ticketService.editTicket(id, ticket);
    }

    @DeleteMapping("delete/{id}")
    public void deleteTicket(@PathVariable Long id) {
        ticketService.deleteTicket(id);
    }

    @PutMapping("/link/{id}")
    public Ticket linkTicket(@PathVariable Long id, @RequestBody Ticket ticket) {
        return ticketService.linkTicket(id, ticket);
    }
}
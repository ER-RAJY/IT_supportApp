package com.ITsupport.IT.support.App.model.enums;

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
    public List<Ticket> jibLikamlTickets() {
        return ticketService.getAll();
    }

    @PostMapping("/add")
    public Ticket zidTicketJdid(@RequestBody Ticket ticket) {
        return ticketService.addTeckit(ticket);
    }

    @PutMapping("/edit/{id}")
    public Ticket bedelTicket(@PathVariable Long id, @RequestBody Ticket ticket) {
        return ticketService.editTicket(id, ticket);
    }

    @DeleteMapping("delete/{id}")
    public void mse7Ticket(@PathVariable Long id) {
        ticketService.deleteTicket(id);
    }
}
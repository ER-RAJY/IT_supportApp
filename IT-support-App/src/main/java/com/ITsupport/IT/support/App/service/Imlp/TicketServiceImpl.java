package com.ITsupport.IT.support.App.service.Imlp;

import com.ITsupport.IT.support.App.model.Panne;
import com.ITsupport.IT.support.App.model.Ticket;
import com.ITsupport.IT.support.App.repository.TicketRepository;
import com.ITsupport.IT.support.App.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TicketServiceImpl implements TicketService {

    @Autowired
    TicketRepository ticketRepository ;
    @Override
    public List<Ticket> getAll() {
        return ticketRepository.findAll();
    }

    @Override
    public Ticket addTeckit(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    @Override
    public Ticket editTicket(Long id, Ticket ticket) {

        ticketRepository.findById(id);
        Ticket editTicket = new Ticket();
        editTicket.setDescription(ticket.getDescription());
        return ticketRepository.save(editTicket);
    }

    @Override
    public void deleteTicket(Long id) {

    }
}

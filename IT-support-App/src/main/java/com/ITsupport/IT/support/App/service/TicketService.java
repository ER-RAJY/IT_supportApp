package com.ITsupport.IT.support.App.service;

import com.ITsupport.IT.support.App.model.Ticket;

import java.util.List;

public interface TicketService {
   List<Ticket> getAll();
  Ticket addTeckit(Ticket ticket);
   Ticket editTicket(Long id , Ticket ticket);
   void deleteTicket(Long id);
    Ticket linkTicket(Long id , Ticket ticket);
    Ticket editStatusTicket(Long id ,Ticket ticket);
    List<Ticket> findByTechnicien(Long id);
    List<Ticket> findByUtilisateur(Long id);

}

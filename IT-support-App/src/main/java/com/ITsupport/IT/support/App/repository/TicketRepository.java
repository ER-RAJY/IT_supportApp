package com.ITsupport.IT.support.App.repository;

import com.ITsupport.IT.support.App.model.Technicien;
import com.ITsupport.IT.support.App.model.Ticket;
import com.ITsupport.IT.support.App.model.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TicketRepository extends JpaRepository<Ticket ,Long> {
    List<Ticket> findAllByTechnicien(Technicien technicien);
    List<Ticket> findAllByUtilisateur(Utilisateur utilisateur);
}

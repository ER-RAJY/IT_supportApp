package com.ITsupport.IT.support.App.repository;

import com.ITsupport.IT.support.App.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketRepository extends JpaRepository<Ticket ,Long> {
}

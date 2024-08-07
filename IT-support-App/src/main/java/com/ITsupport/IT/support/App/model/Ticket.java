package com.ITsupport.IT.support.App.model;

import com.ITsupport.IT.support.App.model.enums.EtatTicket;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ticketId;
    private String description;
    @Enumerated(EnumType.STRING)
    private EtatTicket statut;

    @ManyToOne
    @JoinColumn(name = "utilisateur_id")
    private Utilisateur utilisateur;

    @ManyToOne
    @JoinColumn(name = "technicien_id")
    private Technicien technicien;

    @ManyToOne
    @JoinColumn(name = "equipementId")
    private Equipment equipment;

}
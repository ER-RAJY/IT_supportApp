package com.ITsupport.IT.support.App.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Panne {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long panneId;
    private String description;
    @Enumerated(EnumType.STRING)



    @ManyToOne
    @JoinColumn(name = "utilisateurId")
    private Utilisateur utilisateur;

    @OneToMany(mappedBy = "panne")
    private List<HistoriquePanne> historiques;
}
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
    private String name;
    @Enumerated(EnumType.STRING)





    @OneToMany(mappedBy = "panne")
    private List<HistoriquePanne> historiques;
}
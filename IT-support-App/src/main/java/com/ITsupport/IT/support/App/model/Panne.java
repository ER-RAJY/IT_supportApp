package com.ITsupport.IT.support.App.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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


    @OneToMany(mappedBy = "panne", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Ticket> tickets;

}
package com.example.todo_api.model; // ajuste conforme seu pacote

import lombok.Data;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "tasks") // Nome da tabela no banco de dados
@Data // Lombok para gerar getters e setters automaticamente
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title; // Título da tarefa
    private String description; // Descrição da tarefa
    private Boolean completed = false; // Padrão como não completo
    private LocalDateTime createdAt = LocalDateTime.now(); // Data de criação

    // Não é necessário adicionar explicitamente os getters e setters
}

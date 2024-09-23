package com.example.todo_api.repository; // ajuste conforme seu pacote

import com.example.todo_api.model.Task; // ajuste conforme seu pacote
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    // Aqui você pode adicionar métodos personalizados, se necessário
}

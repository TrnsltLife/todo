package com.example.todo;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface TodoItemRepository extends MongoRepository<TodoItem, String>
{

}

package com.java.app.db;
import org.springframework.data.jpa.repository.JpaRepository;
import com.java.app.model.Student;

public interface StudentRepository extends JpaRepository<Student,Integer>{
	Student getByName(String name);

	Student findByName(String name);
}
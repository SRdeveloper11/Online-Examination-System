package com.java.app.db;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.java.app.model.Result;



public interface ResultRepository extends JpaRepository<Result,Integer> {
	
	@Query("select u from Result u where u.username = :username")
	public Result getStudentByUsername(@Param("username") String username);

}

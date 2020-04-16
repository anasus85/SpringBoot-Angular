package com.example.demo.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.example.demo.entity.Direccion;



public interface IDireccionDao  extends CrudRepository<Direccion, Long>{
	
	public Direccion findByIdDireccion(Long id);
	
	@Query("select d from Direccion d where d.idDireccion=?1")
	public Direccion findBySql(Long id);

}

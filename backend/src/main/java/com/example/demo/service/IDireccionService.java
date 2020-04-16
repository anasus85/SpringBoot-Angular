package com.example.demo.service;

import java.util.List;


import com.example.demo.entity.Direccion;

public interface IDireccionService {
	public List<Direccion> findAll();
	public void saveDireccion(Direccion direccion);
	public Direccion  findDireccion(Direccion direccion);
	public void updateDireccion(Direccion direccion);
	public void deleteDireccion(long id);
	public void deleteAllDireccion();
	public Direccion findDireccionById(long id);
	public Direccion findDireccionByIdSQL(long id);
	

}

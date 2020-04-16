package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dao.IDireccionDao;
import com.example.demo.entity.Direccion;

@Service
public class DireccionServiceImp implements IDireccionService {

	
	@Autowired
	private IDireccionDao direccionDao;
	
	@Override
	@Transactional(readOnly = true)
	public List<Direccion> findAll() {
	
		return (List<Direccion>) direccionDao.findAll();
	}
	@Transactional
	@Override
	public void saveDireccion(Direccion direccion) {
		direccionDao.save(direccion);
		
	}

	@Override
	@Transactional(readOnly = true)
	public Direccion findDireccion(Direccion direccion) {
		return (Direccion) direccionDao.findByIdDireccion(direccion.getIdDireccion());
	}

	

	@Override
	@Transactional
	public void  updateDireccion(Direccion direccion) {
		 direccionDao.save(direccion);
	}

	@Override
	@Transactional
	public void deleteDireccion(long id) {
		direccionDao.deleteById(id);
		
		
	}

	@Override
	@Transactional
	public void deleteAllDireccion() {
		direccionDao.deleteAll();
		
	}

	@Override
	@Transactional(readOnly = true)
	public Direccion findDireccionById(long id) {
		return (Direccion) direccionDao.findByIdDireccion(id);
	}

	@Override
	public Direccion findDireccionByIdSQL(long id) {
		return (Direccion) direccionDao.findBySql(id);
	}
	

}

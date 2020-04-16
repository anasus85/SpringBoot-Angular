package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dao.IDireccionDao;
import com.example.demo.dao.IEmpresaDao;
import com.example.demo.entity.Direccion;
import com.example.demo.entity.Empresa;

@Service
public class EmpresaServiceImp implements IEmpresaService{
	
	@Autowired
	private IDireccionDao direccionDao;
	
	@Autowired
	private IEmpresaDao empresaDao;
	
	

	@Override
	@Transactional(readOnly = true)
	public List<Empresa> findAll() {
		return (List<Empresa>) empresaDao.findAll();
	}
	
	@Transactional
	@Override
	public void saveEmpresa(Empresa empresa) {
		empresaDao.save(empresa);
		
	}
	
	
	@Override
	@Transactional(readOnly = true)
	public Empresa findEmpresa(Empresa empresa) {
		return (Empresa) empresaDao.findByIdEmpresa(empresa.getIdEmpresa());
	}
	
	@Override
	@Transactional(readOnly = true)
	public Empresa findEmpresaById(long id) {
		return (Empresa) empresaDao.findByIdEmpresa(id);
	}

	@Override
	@Transactional
	public void updateEmpresa(Empresa empresa) {
	empresaDao.save(empresa);
		
	}

	@Override
	@Transactional
	public void deleteEmpresa(long id) {
		empresaDao.deleteById(id);
		
	}

	@Override
	@Transactional(readOnly = true)
	public Direccion findDireccionById(long id) {
		return (Direccion) direccionDao.findByIdDireccion(id);
	}

}

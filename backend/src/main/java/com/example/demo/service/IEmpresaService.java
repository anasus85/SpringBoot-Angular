package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Direccion;
import com.example.demo.entity.Empresa;

public interface IEmpresaService {
	public List<Empresa> findAll();
	public void saveEmpresa(Empresa empresa);
	public Empresa findEmpresaById(long id);
	public Direccion findDireccionById(long id);
	public void updateEmpresa(Empresa empresa);
	public void deleteEmpresa(long id);
	public Empresa findEmpresa(Empresa empresa);

}

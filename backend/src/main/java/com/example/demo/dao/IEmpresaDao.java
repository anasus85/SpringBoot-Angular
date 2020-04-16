package com.example.demo.dao;

import org.springframework.data.repository.CrudRepository;


import com.example.demo.entity.Empresa;

public interface IEmpresaDao  extends CrudRepository<Empresa, Long>{
	
	public Empresa findByIdEmpresa(Long id);

}

package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Direccion;
import com.example.demo.entity.Empresa;
import com.example.demo.service.EmpresaServiceImp;

@RestController
@CrossOrigin(origins="*",  methods= {RequestMethod.GET, RequestMethod.PUT, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.HEAD, RequestMethod.TRACE, RequestMethod.PATCH}, allowedHeaders = "*")
@RequestMapping("/api")
public class EmpresaRestController {

	
	@Autowired
	EmpresaServiceImp empresaService;
	
	
	
	@GetMapping("/empresas/listar")
	@ResponseStatus(HttpStatus.OK)
	public List<Empresa> getEmpresas(){
		return empresaService.findAll();}
	
	@GetMapping("/empresas/{id}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<?> getEmpresaById(@PathVariable (value = "id") Long id){
		Empresa empresaDb=null;
		empresaDb = empresaService.findEmpresaById(id);
		return new ResponseEntity<>(empresaDb, HttpStatus.OK);}
	
	
	@PostMapping("/empresas")
	public ResponseEntity<Void> crearEmpresa (@RequestBody Empresa empresa){
		if(empresaService.findEmpresa(empresa)==null) {
			empresaService.saveEmpresa(empresa);
			return new ResponseEntity<Void>(HttpStatus.CREATED);
		}else {
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}
		
		
	
	}
	
	
	@PutMapping("/empresas/{id}")
	public ResponseEntity<?> editarEmpresa(@PathVariable (value = "id") Long id, @RequestBody Empresa empresa){
		
		Empresa empresaDb = empresaService.findEmpresaById(id);
		if(empresaDb!=null) {
			empresaDb.setNombreEmpresa(empresa.getNombreEmpresa());
			empresaDb.setIdDireccion(empresa.getIdDireccion());
			empresaService.updateEmpresa(empresaDb);
			return new ResponseEntity<Void>(HttpStatus.OK);
		} else 
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);}
	
	@DeleteMapping("/empresas/{id}")
	public ResponseEntity<Void> borrarEmpresa(@PathVariable(value="id") Long id){
		empresaService.deleteEmpresa(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
		}
	

}

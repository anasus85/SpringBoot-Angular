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
import com.example.demo.service.DireccionServiceImp;


@RestController
@CrossOrigin(origins="*",  methods= {RequestMethod.GET, RequestMethod.PUT, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.HEAD, RequestMethod.TRACE, RequestMethod.PATCH}, allowedHeaders = "*")
@RequestMapping("/api")
public class DireccionRestController {

	@Autowired
	DireccionServiceImp direccionService;
	
	@GetMapping("/direcciones/listar")
	@ResponseStatus(HttpStatus.OK)
	public List<Direccion> getDirecciones(){
		return direccionService.findAll();

}
	
	@GetMapping("/direcciones/{id}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<?> getDireccionById(@PathVariable (value = "id") Long id){
		Direccion direccionDb=null;
		direccionDb = direccionService.findDireccionById(id);
		return new ResponseEntity<>(direccionDb, HttpStatus.OK);
		
	}
	
	@PostMapping("/direcciones")
	public ResponseEntity<Void> crearDireccion (@RequestBody Direccion direccion){
		if(direccionService.findDireccion(direccion)==null) {
			direccionService.saveDireccion(direccion);
			return new ResponseEntity<Void>(HttpStatus.CREATED);
		}else {
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}
	}
	
	@PutMapping("/direcciones/{id}")
	public ResponseEntity<?> editarDireccion (@PathVariable (value = "id") Long id, @RequestBody Direccion direccion){
		
		Direccion direccionDb = direccionService.findDireccionById(id);
		if(direccionDb!=null) {
			direccionDb.setDireccion(direccion.getDireccion());
			direccionDb.setDestino(direccion.getDestino());
			direccionDb.setCodigoPostal(direccion.getCodigoPostal());
			direccionService.updateDireccion(direccionDb);
			return new ResponseEntity<Void>(HttpStatus.OK);
		} else 
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);}
	
	
//	@PutMapping("/direcciones")
//	public ResponseEntity<?> editarDireccion (@RequestBody Direccion direccion){
//		Direccion direccionDb=null;
//		direccionDb = direccionService.findDireccionByIdSQL(direccion.getIdDireccion());
//		if(direccionDb!=null) {
//			direccionDb.setDireccion(direccion.getDireccion());
//			direccionDb.setDestino(direccion.getDestino());
//			direccionDb.setCodigoPostal(direccion.getCodigoPostal());
//			direccionService.updateDireccion(direccionDb);
//			return new ResponseEntity<>(direccionDb, HttpStatus.OK);
//		} else 
//			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);}
	
	
	@DeleteMapping("/direcciones/{id}")
	public ResponseEntity<Void> borrarDireccion(@PathVariable(value="id") Long id){
		direccionService.deleteDireccion(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
		}
	
	
	
}

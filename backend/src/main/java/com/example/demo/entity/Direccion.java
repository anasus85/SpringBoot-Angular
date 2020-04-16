package com.example.demo.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table (name = "direcciones")
public class Direccion {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long idDireccion;
	
	@Column
	private String direccion;
	
	@Column
	private String codigoPostal;
	
	@Column
	private String destino;
	
	@OneToMany (cascade = CascadeType.PERSIST) 
	@JoinColumn (name = "idDireccion", referencedColumnName = "idDireccion")//columna asociada

	public Long getIdDireccion() {
		return idDireccion;
	}

	public void setIdDireccion(Long idDireccion) {
		this.idDireccion = idDireccion;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getCodigoPostal() {
		return codigoPostal;
	}

	public void setCodigoPostal(String codigoPostal) {
		this.codigoPostal = codigoPostal;
	}

	public String getDestino() {
		return destino;
	}

	public void setDestino(String destino) {
		this.destino = destino;
	}
	

	
}

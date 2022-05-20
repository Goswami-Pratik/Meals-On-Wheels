package com.example.MealsOnWheels.AccessingDataMySQL.Restaurant;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "restaurante")
public class Restaurante {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "postcode")
	private String postcode;

	@Column(name = "name")
	private String name;

	@Column(name = "description")
	private String description;

	public Restaurante(String postcode, String name, String description) {
		this.postcode = postcode;
		this.name = name;
		this.description = description;
	}

	@Override
	public String toString() {
		return "Restaurante{" +
				"id=" + id +
				", postcode='" + postcode + '\'' +
				", name='" + name + '\'' +
				", description='" + description + '\'' +
				'}';
	}
}

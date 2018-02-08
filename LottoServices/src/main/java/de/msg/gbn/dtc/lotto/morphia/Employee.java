package de.msg.gbn.dtc.lotto.morphia;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Field;
import org.mongodb.morphia.annotations.Id;
import org.mongodb.morphia.annotations.Index;
import org.mongodb.morphia.annotations.Indexes;
import org.mongodb.morphia.annotations.Property;
import org.mongodb.morphia.annotations.Reference;

@Entity("employees")
@Indexes(@Index(value = "salary", fields = @Field("salary")))
public class Employee {
		
	public Employee()
	{
		directReports = new ArrayList<>();
	}
	
	public Employee(String name, Double salary)
	{
		this();
		this.name = name;
		this.salary = salary;
	}

	@Id
	private ObjectId id;
	
	private String name;
	
	@Reference
	private Employee manager;
	
	@Reference
	private List<Employee> directReports;
	
	@Property("wage")
	private Double salary;

	public List<Employee> getDirectReports() {
		return directReports;
	}

	@Override
	public String toString() {
		return this.name + " " + this.salary + " - DirectReports-Count: " + directReports.size();
	}
}

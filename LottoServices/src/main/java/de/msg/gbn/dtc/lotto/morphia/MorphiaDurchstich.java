package de.msg.gbn.dtc.lotto.morphia;

import java.util.List;

import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;
import org.mongodb.morphia.query.Query;
import org.mongodb.morphia.query.UpdateOperations;
import org.mongodb.morphia.query.UpdateResults;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.WriteResult;

public class MorphiaDurchstich {

	public static void main(String[] args) {
		
		final Morphia morphia = new Morphia();

		// tell Morphia where to find your classes
		// can be called multiple times with different packages or classes
		morphia.mapPackage("org.mongodb.morphia.example");

		// create the Datastore connecting to the default port on the local host
		final Datastore datastore = morphia.createDatastore(new MongoClient(new MongoClientURI("mongodb://admin:admin@192.168.99.100:27020")), "lotto-mongo-db");
		datastore.ensureIndexes();	
		
		//Saving Data
		final Employee elmer = new Employee("Elmer Fudd", 50000.0);
		datastore.save(elmer);
		
		final Employee daffy = new Employee("Daffy Duck", 40000.0);
		datastore.save(daffy);

		final Employee pepe = new Employee("Pepé Le Pew", 25000.0);
		datastore.save(pepe);

		elmer.getDirectReports().add(daffy);		
		elmer.getDirectReports().add(pepe);

		datastore.save(elmer);
		
		//Querying
		final Query<Employee> query = datastore.createQuery(Employee.class);
		final List<Employee> employees = query.asList();
		
		employees.forEach(v -> System.out.println(v));
		
		
		List<Employee> underpaid = datastore.createQuery(Employee.class)
                .field("salary").lessThanOrEq(30000)
                .asList();

		System.out.println("--------UNDERPAID------------");
		underpaid.forEach(v -> System.out.println(v));
		
		//Updates
		final Query<Employee> underPaidQuery = datastore.createQuery(Employee.class)
                .filter("salary <=", 30000);

		final UpdateOperations<Employee> updateOperations = datastore.createUpdateOperations(Employee.class)
                .inc("salary", 10000);
		
		final UpdateResults results = datastore.update(underPaidQuery, updateOperations);
		System.out.println("Updated-Count: " + results.getUpdatedCount());

		underpaid = datastore.createQuery(Employee.class)
                .field("salary").lessThanOrEq(30000)
                .asList();

		System.out.println("--------UNDERPAID------------");
		underpaid.forEach(v -> System.out.println(v));
		
		
		//Removes
		final Query<Employee> overPaidQuery = datastore.createQuery(Employee.class)
                .filter("salary >", 100000);
		WriteResult writeResult = datastore.delete(overPaidQuery);
		System.out.println("Delete-Count: " + writeResult.getN());
		
		Query<Employee> allQuery = datastore.createQuery(Employee.class);
		writeResult = datastore.delete(allQuery);
		System.out.println("Delete-Count: " + writeResult.getN());
		
	}

}

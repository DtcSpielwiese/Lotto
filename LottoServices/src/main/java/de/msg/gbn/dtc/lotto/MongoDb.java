package de.msg.gbn.dtc.lotto;

import java.util.Arrays;

import org.bson.Document;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

public class MongoDb {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		MongoClientURI connectionString = new MongoClientURI("mongodb://admin:admin@192.168.99.100:27020");
		
		try (MongoClient mongoClient = new MongoClient(connectionString))
		{			
			MongoDatabase database = mongoClient.getDatabase("lotto-mongo-db"); 
			
			MongoCollection<Document> collection = database.getCollection("test");
			
			Document doc = new Document("name", "MongoDB")
	                .append("type", "database")
	                .append("count", 1)
	                .append("versions", Arrays.asList("v3.2", "v3.0", "v2.6"))
	                .append("info", new Document("x", 203).append("y", 102));
			
			collection.insertOne(doc);
		}
		
		System.out.println("TEST");
		

	}

}

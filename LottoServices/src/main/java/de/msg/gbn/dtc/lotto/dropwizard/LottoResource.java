package de.msg.gbn.dtc.lotto.dropwizard;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import com.codahale.metrics.annotation.Timed;

import java.util.concurrent.atomic.AtomicLong;
import java.util.Optional;

@Path("/lotto-service")
@Produces(MediaType.APPLICATION_JSON)
public class LottoResource {

	 	private final String template;
	    private final String defaultName;
	    private final AtomicLong counter;

	    public LottoResource(String template, String defaultName) {
	        this.template = template;
	        this.defaultName = defaultName;
	        this.counter = new AtomicLong();
	    }

	    @GET
	    @Timed
	    public Saying sayHello(@QueryParam("name") Optional<String> name) {
	        final String value = String.format(template, name.orElse(defaultName));
	        return new Saying(counter.incrementAndGet(), value);
	    }	
	
}

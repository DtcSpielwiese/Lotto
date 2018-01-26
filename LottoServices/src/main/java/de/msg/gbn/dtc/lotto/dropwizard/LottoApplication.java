package de.msg.gbn.dtc.lotto.dropwizard;

import io.dropwizard.Application;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;

public class LottoApplication extends Application<LottoConfiguration> {

    public static void main(String[] args) throws Exception {
        new LottoApplication().run(args);
    }

    @Override
    public String getName() {
        return "lotto-services";
    }

    @Override
    public void initialize(Bootstrap<LottoConfiguration> bootstrap) {
        // nothing to do yet
    }

    @Override
    public void run(LottoConfiguration configuration, Environment environment) {
        final LottoResource resource = new LottoResource(configuration.getTemplate(),
                configuration.getDefaultName());

        final TemplateHealthCheck healthCheck = new TemplateHealthCheck(configuration.getTemplate());

        environment.healthChecks().register("template", healthCheck);
        environment.jersey().register(resource);
    }
}

package ru.pet;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import ru.pet.service.Config;
import ru.pet.service.FileService;

@SpringBootApplication
public class Application extends SpringBootServletInitializer implements CommandLineRunner {

    private final FileService fileService;

    private final Config config;

    public Application(FileService fileService, Config config) {
        this.fileService = fileService;
        this.config = config;
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(Application.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Override
    public void run(String... args) {
        config.init();
        fileService.init();
    }
}


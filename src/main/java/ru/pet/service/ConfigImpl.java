package ru.pet.service;

import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.util.Properties;

@Component
public class ConfigImpl implements Config{
    private final Properties values = new Properties();

    @Override
    public void init() {
        try (InputStream in = ConfigImpl.class.getClassLoader().getResourceAsStream("application.properties")) {
            values.load(in);
        } catch (Exception e) {
            throw new RuntimeException("Cant read application.properties" ,e);
        }
    }

    @Override
    public String get(String key) {
        return this.values.getProperty(key);
    }
}


package ru.pet.service;

public interface Config {
    void init();
    String get(String key);
}

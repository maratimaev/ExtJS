package ru.pet;

import java.util.List;

public interface FileService {

    void init();
    List<Fio> getFioList();
    List<Fio> getFioListByName(String name);
}

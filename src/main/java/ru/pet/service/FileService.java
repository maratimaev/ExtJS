package ru.pet.service;

import ru.pet.view.Fio;

import java.util.List;

public interface FileService {
    List<Fio> getFioListByName(String name);
    List<Fio> getPagedList(List<Fio> list, int start, int limit);
    List<Fio> getFioList();
}

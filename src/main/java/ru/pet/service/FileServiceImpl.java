package ru.pet.service;

import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import ru.pet.view.Fio;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

@Service
public class FileServiceImpl implements FileService {

    private final Config config;

    private List<Fio> fioList = new ArrayList<>();

    public FileServiceImpl(Config config) {
        this.config = config;
    }

    @Override
    public void init() {
        String filename = config.get("file");
        Scanner scanner;
        try (BufferedReader buffered = new BufferedReader(new FileReader(filename))) {
            scanner = new Scanner(buffered);
            String nl = System.getProperty("line.separator");
            scanner.useDelimiter("(,)|(" + nl + ")");
            while (scanner.hasNextLine()) {
                fioList.add(new Fio(scanner.next(), scanner.next(), scanner.next()));
            }
        } catch (IOException e) {
            throw new RuntimeException(String.format("Can't read file %s", filename), e);
        }
    }

    @Override
    public List<Fio> getFioList() {
        return this.fioList;
    }

    @Override
    public List<Fio> getFioListByName(String name) {
        if(StringUtils.isEmpty(name)) {
            throw new RuntimeException(String.format("Searched username can't been empty %s", name));
        }
        List<Fio> fios = new ArrayList<>();
        for (Fio fio : this.fioList) {
            if(fio.getName().contains(name)) {
                fios.add(fio);
            }
        }
        return fios;
    }

    @Override
    public List<Fio> getPagedList(List<Fio> list, int start, int limit) {
        if(list == null) {
            throw new RuntimeException(String.format("FIO list can't be null %s", list));
        }
        int end =start + limit;
        if (end > list.size()) {
            end = list.size();
        }
        return list.subList(start, end);
    }
}

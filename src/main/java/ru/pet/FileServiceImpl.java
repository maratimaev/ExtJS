package ru.pet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

@Service
public class FileServiceImpl implements FileService {

    @Autowired
    private Config config;

    private List<Fio> fioList = new ArrayList<>();

    @Override
    public void init() {
        String filename = config.get("file");
        Scanner scanner;
        try (BufferedReader buffered = new BufferedReader(new FileReader(filename))) {
            scanner = new Scanner(buffered);
            scanner.useDelimiter("(,)|(\r\n)");
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
        List<Fio> fios = new ArrayList<>();
        for (Fio fio : this.fioList) {
            if(fio.getName().contains(name)) {
                fios.add(fio);
            }
        }
        return fios;
    }
}

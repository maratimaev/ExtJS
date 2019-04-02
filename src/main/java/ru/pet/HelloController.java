package ru.pet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class HelloController {

    @Autowired
    private FileService fileService;

    @GetMapping("/")
    public String hello() {
        return "index";
    }

    @GetMapping("/user")
    @ResponseBody
    public List<Fio> getCar() {
//        [{"name":"Иванов", "surname":"Иван", "patronymic":"Иванович"},{"name":"Петров", "surname":"Петр", "patronymic":"Петрович"}]
        return fileService.getFioList();
    }

    @GetMapping("/user/{name}")
    @ResponseBody
    public List<Fio> getCarByName(@PathVariable String name) {
        return fileService.getFioListByName(name);
    }
}

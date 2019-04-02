package ru.pet.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import ru.pet.service.FileService;
import ru.pet.view.Fio;
import ru.pet.view.Wrapper;

import java.util.List;

@Controller
public class UserController {

    private final FileService fileService;

    public UserController(FileService fileService) {
        this.fileService = fileService;
    }

    @GetMapping("/")
    public String hello() {
        return "index";
    }

    @GetMapping("/user")
    @ResponseBody
    public Wrapper getCar(@RequestParam(value = "start", required = false) int start,
                          @RequestParam(value = "limit", required = false) int limit) {
        List <Fio> list = fileService.getFioList();
        return new Wrapper(list.size(), fileService.getPagedList(list, start, limit));
    }

    @GetMapping("/user/{name}")
    @ResponseBody
    public Wrapper getCarByName(@PathVariable String name,
                                  @RequestParam(value = "start", required = false) int start,
                                  @RequestParam(value = "limit", required = false) int limit) {
        List <Fio> list = fileService.getFioListByName(name);
        return new Wrapper(list.size(), fileService.getPagedList(list, start, limit));
    }
}

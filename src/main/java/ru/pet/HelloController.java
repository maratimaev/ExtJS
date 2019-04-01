package ru.pet;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {
    @GetMapping("/")
    public String hello(Model model) {
        return "index";
    }

    @GetMapping("/car")
    @ResponseBody
    public String getCar(Model model) {
//        [{"id":1, "name":"a", "price":1},{"id":2, "name":"b", "price":2}]
        String list = "[{\"id\":1, \"name\":\"a\", \"price\":1},{\"id\":2, \"name\":\"b\", \"price\":2}]";
        String json = "{\"id\": 1, \"name\": \"aaa\", \"price\": 1}";
        return list;
    }

    @GetMapping("/car/{name}")
    @ResponseBody
    public String getCarByName(@PathVariable String name, Model model) {
        String list = "[{\"id\":1, \"name\":\"a\", \"price\":1}]";
        return list;
    }
}

package ru.pet.view;

import java.util.List;

public class Wrapper {
    private Integer total;
    private List<Fio> users;

    public Wrapper(Integer total, List<Fio> users) {
        this.total = total;
        this.users = users;
    }

    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }

    public List<Fio> getUsers() {
        return users;
    }

    public void setUsers(List<Fio> users) {
        this.users = users;
    }
}

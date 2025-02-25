package com.example.demo;

import jakarta.persistence.Entity;

@Entity
public class example_entity {
    private String name;

    public example_entity(){}

    public example_entity(String name){
        this.name = name;
    }
    public String getName(){
        return this.name;
    }
    public void setName(String name){
        this.name = name;
    }
    public String getContent() {
        return this.name;
    }
}

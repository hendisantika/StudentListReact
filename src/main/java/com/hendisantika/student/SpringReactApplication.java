package com.hendisantika.student;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.hendisantika.student.domain.Student;
import com.hendisantika.student.domain.StudentRepository;
import com.hendisantika.student.domain.User;
import com.hendisantika.student.domain.UserRepository;

@SpringBootApplication
public class SpringReactApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringReactApplication.class, args);
    }

    @Bean
    public CommandLineRunner studentDemo(StudentRepository repository, UserRepository urepository) {
        return (args) -> {
            User user1 = new User("user", "$2a$06$3jYRJrg0ghaaypjZ/.g4SethoeA51ph3UD4kZi9oPkeMTpjKU5uo6", "USER");
            User user2 = new User("admin", "$2a$10$0MMwY.IQqpsVc1jC8u7IJ.2rT8b0Cd3b3sfIBGV2zfgnPGtT4r0.C", "ADMIN");
            urepository.save(user1);
            urepository.save(user2);

            repository.save(new Student("Hendi", "Santika", "hendisantika@konohagakure.com"));
            repository.save(new Student("Uzumaki", "Naruto",  "uzumaki_naruto@konohagakure.com"));
            repository.save(new Student("Hatake", "Kakashi",  "kakashi_hatake@konohagakure.com"));
            repository.save(new Student("Sakura", "Haruno",  "sakura_haruno@konohagakure.com"));
            repository.save(new Student("Sasuke", "Uchiha",  "sasuke_uchiha@konohagakure.com"));
        };
    }
}

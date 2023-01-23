package com.weed.weed.entitiy;

import lombok.*;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {
    private String name;
    @Id
    private String email;
    private int password;

}

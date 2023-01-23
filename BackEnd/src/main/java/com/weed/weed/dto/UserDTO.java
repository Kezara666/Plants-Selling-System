package com.weed.weed.dto;

import lombok.*;

import javax.persistence.*;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserDTO {
    private String name;
    private String email;
    private int password;
}


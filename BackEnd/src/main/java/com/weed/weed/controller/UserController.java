package com.weed.weed.controller;


import com.weed.weed.dto.*;
import com.weed.weed.service.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping(value = "api/v1/user")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

    //http://localhost:9800/api/v1/user/getUser
    @GetMapping("/getUser")
    public List<UserDTO> getuser(){
        return userService.getAllUsers();

    }
    //http://localhost:9800/api/v1/user/saveUser
    @PostMapping("/saveUser")
    public UserDTO SaveUser(@RequestBody UserDTO userDTO){
        return userService.saveUser(userDTO);
    }




}

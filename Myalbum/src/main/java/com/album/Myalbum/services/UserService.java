package com.album.Myalbum.services;

import com.album.Myalbum.model.User;

import java.util.List;

public interface UserService {

    List<User> findAllUsers();

    User findByUsename(String userName);

    User save(User user);


    User findByUserName(String userName);
}

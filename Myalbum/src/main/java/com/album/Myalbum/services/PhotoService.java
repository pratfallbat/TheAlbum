package com.album.Myalbum.services;


import com.album.Myalbum.model.Photo;
import com.album.Myalbum.model.User;

import java.util.List;

public interface PhotoService {
	Photo save(Photo photo);

    List<Photo> findAll();

    List<Photo> findByUser(User user);

    Photo findByPhotoId(Long photoId);

    void deleteAll();

}

package com.album.Myalbum.services.impl;


import java.util.List;

import com.album.Myalbum.dao.PhotoDao;
import com.album.Myalbum.model.Photo;
import com.album.Myalbum.model.User;
import com.album.Myalbum.services.PhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class PhotoServiceImpl implements PhotoService {

    @Autowired
    private PhotoDao photoDao;

    public Photo save(Photo photo) {
        return photoDao.save(photo);
    }

    public List<Photo> findAll() {
        return photoDao.findAll();
    }

    public List<Photo> findByUser(User user) {
        return photoDao.findByUser(user);
    }

    public Photo findByPhotoId(Long photoId) {
        return photoDao.findByPhotoId(photoId);
    }

    @Override
    public void deleteAll() {
        photoDao.deleteAll();
    }
}

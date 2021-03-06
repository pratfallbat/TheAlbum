package com.album.Myalbum.controller;

import com.album.Myalbum.model.Photo;
import com.album.Myalbum.services.PhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
    @RequestMapping("/photo")
public class PhotoController {
    @Autowired
    private PhotoService photoService;


    @RequestMapping("/allPhotos")
    public List<Photo> allPhoto()
    {
        return photoService.findAll();

    }
    @RequestMapping("/deleteAll")
    public void allPhotoDelete()
    {
         photoService.deleteAll();

    }


}

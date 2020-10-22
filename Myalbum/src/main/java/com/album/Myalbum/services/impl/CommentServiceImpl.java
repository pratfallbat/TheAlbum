package com.album.Myalbum.services.impl;

import com.album.Myalbum.dao.CommentDao;
import com.album.Myalbum.model.Comment;
import com.album.Myalbum.services.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    CommentDao commentDao;


    @Override
    public Comment save(Comment comment) {
        return commentDao.save(comment);
    }

    @Override
    public List<Comment> findByPhotoId(Long photoId) {
        return commentDao.findByPhotoId(photoId);
    }

    @Override
    public Comment findOne(Long commentId) {
        return  null;
//        return commentDao.findOne(commentId);
    }
}

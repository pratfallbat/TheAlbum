package com.album.Myalbum.dao;

import com.album.Myalbum.model.Comment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentDao extends CrudRepository<Comment,Long> {
    Comment save(Comment comment);

//    Comment findOne(Long commentId);

    List<Comment> findByPhotoId(Long photoId);
}

import { Injectable } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { Post} from '../models/post.model';

@Injectable()
export class PostService {

    postsSubject = new Subject<Post[]>();

    private posts : Post [] = [
        {  
        id: 0,
        created_at: new Date('2021-09-27 10:31:00'),
        loveIts: 0,
        title: "Mon premier post",  
        content: "contenu du post",  
        },
        {  
          id: 1,
          created_at: new Date('2021-09-18 10:31:00'),
          loveIts: 0,
          title: "Mon deuxieme post",  
          content: "contenu du post",  
        },
        {  
          id: 2,
          created_at: new Date('2021-09-20 10:31:00'),
          loveIts: 0,
          title: "Mon troisième post",  
          content: "contenu du post",  
        }    
      ];

  constructor() {
    this.emitPostSubject();
  }

  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  getPosts()  {
      return this.posts;
  }

  getPostById(id: number) {
      const post = this.posts.find(
          (s) => {
              return s.id === id;
          }
      );
      return post;
  }

  incLoveIts(post: Post, inc: number)
  {
    const postIndexToRemove = this.posts.findIndex(
        (postE1) => {
            if( postE1 === post ) {
                return true;
            }
            return false;
        }
    )
    this.posts[postIndexToRemove].loveIts += inc;
  }

  addPost(title: string, content: string)
  {
        const postObject: Post = {
            id: 0,
            title: title,
            content: content,
            loveIts: 0,
            created_at: new Date()
        };
        postObject.id = this.posts[(this.posts.length-1)].id+1;
        this.posts.push(postObject);
  }

  removePost(post: Post)
  {
      const postIndexToRemove = this.posts.findIndex(
          (postE1) => {
              if( postE1 === post ) {
                  return true;
              }
              return false;
          }
      )
      this.posts.splice(postIndexToRemove,1);
      this.emitPostSubject();
  }



}
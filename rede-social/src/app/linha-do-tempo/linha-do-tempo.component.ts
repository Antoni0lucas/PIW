import { Component, OnInit, Input } from '@angular/core';
import {Post} from './../post-model/post.model';
import { PostService } from '../post.service';


@Component({
  selector: 'app-linha-do-tempo',
  templateUrl: './linha-do-tempo.component.html',
  styleUrls: ['./linha-do-tempo.component.css']
})
export class LinhaDoTempoComponent implements OnInit {
  
  posts : Post [];
  
  constructor( private postService:PostService) { }
  
  ngOnInit() {
    this.postService.getPosts() 
    .subscribe(data => {this.posts = data});
  }
}
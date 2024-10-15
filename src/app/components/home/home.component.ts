import { totPost } from '../../../../public/tot-post';
import { GetPostsService } from '../../services/get-posts.service';
import { Ipost } from './../../modules/ipost';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private AllPost: GetPostsService) {}

  postArr: Ipost[] = [];

  tagArr: string[] = [];

  selectedTag!: string;

  ngOnInit() {
    this.postArr = this.AllPost.getPosts();
    // this.postArr = this.AllPost.getPosts().slice(0, 4);
    console.log('totpost', totPost);

    this.tagArr = this.AllPost.getTags();
  }

  filterTag(tag: string) {
    this.postArr = this.AllPost.getPostsByTag(tag);
  }
}

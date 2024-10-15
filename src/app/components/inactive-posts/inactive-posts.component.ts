import { Component } from '@angular/core';
import { Ipost } from '../../modules/ipost';
import { GetPostsService } from '../../services/get-posts.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss',
})
export class InactivePostsComponent {
  constructor(private AllPost: GetPostsService) {}

  postArr: Ipost[] = [];

  ngOnInit() {
    this.postArr = this.AllPost.getInactivePosts().slice(0, 4);
  }
}

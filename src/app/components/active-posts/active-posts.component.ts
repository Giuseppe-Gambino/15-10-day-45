import { Component } from '@angular/core';
import { Ipost } from '../../modules/ipost';
import { GetPostsService } from '../../services/get-posts.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss',
})
export class ActivePostsComponent {
  constructor(private AllPost: GetPostsService) {}

  postArr: Ipost[] = [];

  ngOnInit() {
    this.postArr = this.AllPost.getActivePosts().slice(0, 4);
  }
}

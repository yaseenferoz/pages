import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {title: 'neat tree',
    userName:'nature',
    imageUrl:'assets/tree.jpeg',
    content:'i saw this tree'
  },
    {title: 'Snowy Mountain tree',
    userName:'mount lover',
    imageUrl:'assets/mountain.jpeg',
    content:'i saw this mountain'
  },
    {title: 'mountain biking',
    userName:'mountain bikinbg',
    imageUrl:'assets/biking.jpeg',
    content:'i saw this biking'
  },
    {title: 'mountain biking',
    userName:'mountain bikinbg',
    imageUrl:'assets/biking.jpeg',
    content:'i saw this biking'
  
  },
    {title: 'mountain biking',
    userName:'mountain bikinbg',
    imageUrl:'assets/biking.jpeg',
    content:'i saw this biking'
  }
  ,
    {title: 'mountain biking',
    userName:'mountain bikinbg',
    imageUrl:'assets/biking.jpeg',
    content:'i saw this biking'
  }
  ]
}

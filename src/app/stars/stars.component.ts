import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  //  父组件传递输入装饰器
  @Input()

  // 接收产品组件传递的数值
  private rating: number = 0;

  //  五个星星的类型（数组:布尔类型的数组）。
  private stars: boolean[];

  constructor() { }

  ngOnInit() {
    //  初始化星星
    this.stars = [];
    for (let i = 1; i<=5; i++) {
      // 判断数值多少如果小于则等于false(星星).push添加到星星类型数组中
      this.stars.push(i > this.rating);
    }
  }

}

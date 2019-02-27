import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // 存储商品信息数据
  private products: Array<Product>;    //  products的类型是：Product数组

  private imgUrl = 'http://placehold.it/320x150';

  constructor() { }

  //  初始化数组：组件实例化之后调用一次。
  ngOnInit() {

    // 初始化商品
    this.products = [
      new Product(1,"第一个商品",1.99,3.5,"这是商城的第一个商品描述...",["电子产品","硬件设备"]),
      new Product(2,"第二个商品",2.99,2.5,"这是商城的第二个商品描述...",["图书","硬件类型"]),
      new Product(3,"第三个商品",3.99,4.5,"这是商城的第三个商品描述...",["硬件设备"]),
      new Product(4,"第四个商品",4.99,1.5,"这是商城的第四个商品描述...",["电子产品","硬件类型"]),
      new Product(5,"第五个商品",5.99,3.5,"这是商城的第五个商品描述...",["电子产品"]),
      new Product(6,"第六个商品",6.99,2.5,"这是商城的第六个商品描述...",["图书"]),
    ]
  }

}

//  封装产品对象，这个类描述了产品信息
export class Product {

  // 声明产品属性
  constructor (
    public id: number,                //  number类型的ID
    public title: string,             //  商品名称
    public price: number,             //  价格
    public rating: number,            //  评分
    public desc: string,              //  商品描述
    public categories: Array<string>   //  字符串类型的数组
  ) {}
}

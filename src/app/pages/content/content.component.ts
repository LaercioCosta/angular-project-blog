import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  contentCoverPhoto:string = "https://images4.alphacoders.com/132/1329876.png"
  contentTitle:string = "NOTICIA"
  contentDescription:string = "orem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsa illum corporis beatae odit possimus. Similique eius, expedita magnam voluptatum distinctio corrupti et beatae quidem voluptate dolorem. Nesciunt, nulla enim."
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  id:number = 0
  constructor(private rou:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.id)
    this.id = this.rou.snapshot.params['id']
    console.log(this.id)
    console.log("funca")
  }

}

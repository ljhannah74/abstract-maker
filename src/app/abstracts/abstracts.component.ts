import { Component, OnInit } from '@angular/core';
import { TitleAbstract } from '../abstract';
import { AbstractService } from '../abstract.service';

@Component({
  selector: 'app-abstracts',
  templateUrl: './abstracts.component.html',
  styleUrls: ['./abstracts.component.css']
})
export class AbstractsComponent implements OnInit {
  titleAbstracts: TitleAbstract[] = [];
  
  constructor(private abstractService: AbstractService) { }

  ngOnInit(): void {
      this.getAbstracts();
  }

  getAbstracts(): void {
    this.abstractService.getAbstracts().subscribe(titleAbstracts => this.titleAbstracts = titleAbstracts);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { TitleAbstract } from '../abstract';
import { AbstractService } from '../abstract.service';
import { Deed } from '../deed';

@Component({
  selector: 'app-abstract-deeds',
  templateUrl: './abstract-deeds.component.html',
  styleUrls: ['./abstract-deeds.component.css']
})
export class AbstractDeedsComponent implements OnInit {
  @Input() abstractId: any;
  abstractSelected!: TitleAbstract;

  constructor(public abstractService: AbstractService) { }

  ngOnInit(): void {
    this.abstractService.getAbstract(this.abstractId).subscribe(abstract => this.abstractSelected = abstract);
  }
}

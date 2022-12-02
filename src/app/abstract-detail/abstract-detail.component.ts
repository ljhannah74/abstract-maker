import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AbstractService } from '../abstract.service';
import { TitleAbstract } from '../abstract';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-abstract-detail',
  templateUrl: './abstract-detail.component.html',
  styleUrls: ['./abstract-detail.component.css']
})
export class AbstractDetailComponent implements OnInit {

  abstractSelected: TitleAbstract | undefined;

  constructor(
    private route: ActivatedRoute,
    private abstractService: AbstractService,
    private location: Location,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getAbstract();
  }

  getAbstract(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.abstractService.getAbstract(id).subscribe(abstract => this.abstractSelected = abstract);
  }
}

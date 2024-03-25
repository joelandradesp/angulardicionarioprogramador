import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent implements OnInit{

  @Input() name: string = 'CDFs';

  constructor() {}

  ngOnInit(): void{

  }
}

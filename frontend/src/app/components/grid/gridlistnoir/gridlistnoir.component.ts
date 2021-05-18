import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

/**
 * @title Dynamic grid-list
 */

@Component({
  selector: 'app-gridlistnoir',
  templateUrl: './gridlistnoir.component.html',
  styleUrls: ['./gridlistnoir.component.scss']
})
export class GridlistnoirComponent implements OnInit {

  tiles: Tile[] = [

    {text: 'Two', cols: 1, rows: 6, color: 'lightgreen'},
    {text: 'Two', cols: 1, rows: 6, color: 'lightgreen'},
    {text: 'Two', cols: 1, rows: 6, color: 'lightgreen'},

  ];
  constructor() { }

  ngOnInit(): void {
  }

}

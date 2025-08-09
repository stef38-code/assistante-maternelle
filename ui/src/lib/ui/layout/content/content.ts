import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'lib-content',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {}

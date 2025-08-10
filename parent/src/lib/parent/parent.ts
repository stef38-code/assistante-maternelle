import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'parent-parent',
  imports: [CommonModule],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {}

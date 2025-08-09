import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Content } from './content/content';
import { Sidebar } from './sidebar/sidebar';

@Component({
  selector: 'lib-layout',
  imports: [CommonModule, Header, Sidebar, Content, Footer],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}

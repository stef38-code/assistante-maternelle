import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Layout } from '@assistante-maternelle/ui';

@Component({
  imports: [RouterModule, Layout],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'assistante-maternelle';
}

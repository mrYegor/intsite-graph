import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvas.min';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const dataPoints = [];
    let y = 0;
    for (let i = 0; i < 1000; i++) {
      y += Math.round(5 + Math.random() * (-5 - 5));
      dataPoints.push({ y });
    }
    const chart = new CanvasJS.Chart('chartContainer', {
      zoomEnabled: true,
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Random 1000 Points',
      },
      data: [
        {
          type: 'line',
          dataPoints,
        },
      ],
    });

    chart.render();
  }
}

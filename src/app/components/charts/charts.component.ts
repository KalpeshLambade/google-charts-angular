import { Component, AfterViewInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    this.loadGoogleCharts();
  }

  loadGoogleCharts(): void {
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart);
  }

  drawChart(): void {
    const data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work', 11],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 7],
    ]);

    const options = {
      title: 'My Daily Activities',
      width: '100%',
      height: 400,
    };

    const chart = new google.visualization.PieChart(
      document.getElementById('piechart')
    );
    chart.draw(data, options);
  }

}

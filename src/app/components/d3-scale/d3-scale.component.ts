import { Component, OnInit, AfterContentInit } from '@angular/core';
  declare let d3: any;
 // import * as d3 from 'd3';

@Component({
  selector: 'app-d3-scale',
  templateUrl: './d3-scale.component.html',
  styleUrls: ['./d3-scale.component.css']
})
export class D3ScaleComponent implements OnInit {

  options;
  data;
  subcategorycolor;
  subcategorygradColor;
  constructor() { }

  ngOnInit() {
   const COLORS = {
      'red': {
          'strong': '#d9534f',
          'light': '#dd7f7c'
      },
      'red_white': {
          'strong': '#f19292',
          'light': '#fbdada'
      },
      'yellow': {
          'strong': '#ffbf0a',
          'light': '#ffed6c'
      },
      'yellow_white': {
          'strong': '#ffec9d',
          'light': '#fffae3'
      },
      'green': {
          'strong': '#5cb85c',
          'light': '#b2e3b2'
      },
      'green_white': {
          'strong': '#e0f3d7',
          'light': '#f2ffec'
      },
      'grey': {
          'strong': '#d2d2d2',
          'light': '#f3f2f2'
      },
      'white': {
          'strong': '#B3B3B3',
          'light': '#EEE'
      }
  };
    const subcategoryprogressClass = 'red';
    this.subcategorygradColor = d3.scale.ordinal().domain(['closed', 'opened'])
                            .range([COLORS.red.light, COLORS.red_white.light]);
    this.subcategorycolor = d3.scale.ordinal().domain(['closed', 'opened'])
                            .range([COLORS.red.strong, COLORS.red_white.strong]);
    this.options = {
      chart: {
          type: 'pieChart',
          color: (d, i) => {
              return this.subcategorycolor;
          },
          dispatch: {
              renderEnd: (e) => {
                  d3.select('#chart_container' + ' svg defs').remove();
                  const grads = d3.select('#chart_container' + ' svg').append('defs')
                      .selectAll('linearGradient').data(this.data)
                      .enter().append('linearGradient')
                      .attr('x1', '0%')
                      .attr('y1', '0%')
                      .attr('x2', '0%')
                      .attr('y2', '100%')
                      .attr('id', (d, i) => {
                          return 'grad_subcategoryId_' + '_' + i;
                      });
                  grads.append('stop').attr('offset', '0%')
                      .style('stop-opacity', '1').style('stop-color', (d, i) => {
                      return this.subcategorygradColor(i);
                  });
                  grads.append('stop').attr('offset', '100%')
                      .style('stop-opacity', '1').style('stop-color', (d, i) => {
                      return this.subcategorycolor(i);
                  });
                  d3.selectAll('#chart_container' + ' .nv-slice').attr('fill', (d, i) => {
                      return 'url(#grad_subcategoryId_' + '_' + i + ')';
                  });
              }
          },
          height: 33,
          width: 33,
          x: (d) => {
              return d.key;
          },
          y: (d) => {
              return d.y;
          },
          showLabels: false,
          duration: 500,
          labelThreshold: 0.01,
          labelSunbeamLayout: true,
          showLegend: false,
          tooltip: {
              enabled: false
          },
          growOnHover: false,
          margin: {
              left: 0,
              top: 0,
              bottom: 0,
              right: 0
          },
          legend: {
              margin: {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0
              }
          }
      }
  };

 this.data = [{
    key: 'Finished',
    y: 0,
    id: 1
}, {
    key: 'In working',
    y: 100,
    id: 2
}];
// this.options = {
//     chart: {
//       type: 'pieChart',
//      // useInteractiveGuideline: true,
//       height: 450,
//      // transitionDuration: 350,
//       showLegend: false,
//       margin: {
//         top: 20,
//         right: 20,
//         bottom: 40,
//         left: 55
//       },
//       x: (d) => { return d.x; },
//       y: (d) => { return d.y; },
//       xScale: d3.time.scale(),
//       xAxis: {
//         ticks: d3.time.months,
//         tickFormat: (d) => {
//             return d3.time.format('%b')(new Date(d));
//         }
//       },
//       yAxis: {
//         axisLabel: 'Gross volume',
//         tickFormat: (d) => {
//             if (d == null) {
//                 return 0;
//             }
//             return d3.format('.02f')(d);
//         },
//         axisLabelDistance: 400
//       }
//     }
//   }

//   this.data = [
//     {
//       key: "Cumulative Return",
//       values: [
//         {
//           "label" : "A" ,
//           "value" : -29.765957771107
//         } ,
//         {
//           "label" : "B" ,
//           "value" : 0
//         } ,
//         {
//           "label" : "C" ,
//           "value" : 32.807804682612
//         } ,
//       ]
//     }
//   ];
 }



}

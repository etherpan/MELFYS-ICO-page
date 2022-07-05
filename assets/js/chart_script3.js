/*!
 * Chart_script.js
 * Author       : Bestwebcreator.
 * Template Name: Cryptocash – ICO, Cryptocurrency Website & ICO Landing Page HTML + Dashboard Template
 * Version      : 1.7
*/
var config3 = {
  type: 'doughnut',
  data: {
    datasets: [
    {
     data: [7.23, 10.845, 13.855, 9.64, 8.43],
      backgroundColor: ['#f17776','#0eadc9','#5b5da8','#f69040','#78c596'],
	  borderWidth: 1,
	  labels: [
      "Private/Pre Sale",
      "Public ICO",
      "Team & Advisor",
	  "Marketing & General",
	  "Bounty"
	  ]
    },
    /* Outer doughnut data ends*/
    /* Inner doughnut data starts*/
    {
      data: [13.97, 6.12, 12.2, 7.12, 10.59],
      backgroundColor: ['#9a46cc','#d3b62f','#d26187','#00e1f4','#4449cc'],
	  borderWidth: 1,
	  labels: [
	  "interconnection Dev",
	  "Marketing & General",
	  "Mobile Ad Platform",
	  "Ad Platform Integration",
	  "Operational Overhead"
    ]
    }
    /* Inner doughnut data ends*/
    ],

  },
  options: {
    maintainAspectRatio : false,
    responsive: true,
    legend: {
      display: false,
    },
	tooltips: {
		callbacks: {
			label: function(tooltipItem, data) {
				var dataset = data.datasets[tooltipItem.datasetIndex];
				var index = tooltipItem.index;
				return dataset.labels[index] ;
			}
		}
	},
    title: {
      display: false,
      text: 'Chart.js Doughnut Chart'
    },
	 pieceLabel: {
	  render: 'percentage',
	  fontColor: ['#fff','#fff','#fff','#fff','#fff'],
	  fontSize: 16,
	  arc: true,
	  fontStyle: 'bold',
	  position: 'inside',
	  precision: 2
	 },
    animation: {
      animateScale: true,
      animateRotate: true
    },
  }
};

window.onload = function() {
var ctx3 = document.getElementById("token_dist2").getContext("2d");
window.myDoughnut = new Chart(ctx3, config3);
};
$(document).ready(function() {

				   $(".buttonc").on("click", function() {
			  $(".buttonc").removeClass("active");
			  $(this).addClass("active");
			});
				var ctx = document.getElementById("myChart").getContext("2d");
			ctx.canvas.height = 300;
			var data = {
				//labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "],
				labels: ["", "","","","","","","","","","",""],
				datasets: [
					{
						fillColor: '#f0f0f0',
						data: [650, 640, 640, 420, 640, 650, 620, 640, 630, 660, 670, 680],
						spanGaps:false,
						backgroundColor: 'rgb(256,256,256)',
						strokeColor: '#f9b018',
						fillColor: '#f9b018',
						lineTension: 0,
						borderColor:"rgba(114,114,229,1)",
      pointBorderColor:"rgba(114,114,229,1)",
      pointBackgroundColor:"rgba(114,114,229,1)",
      pointHoverBackgroundColor:"rgba(114,114,229,1)",
      pointHoverBorderColor:"rgba(114,114,229,1)"
					}
				]
			};
			var myChart = new Chart(ctx, {
				height: 260,
				type: 'line',
				data: data,
				maintainAspectRatio: false,
				options:{
					scales: {
						height: 260,

						xAxes: [{
							gridLines:{
								display: false,
							}
						}],
						yAxes: [{
							display: false,
							gridLines:{
								display: false,
							}
						}]
					},
					legend: {
						display: false,
					},
					tooltips: {
						display: false,
					},
					bezierCurve: false
				}
			});
});
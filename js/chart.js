/* Auto Run */
	$(function(){
		LoadChart();
	});
/* /Auto Run */
/* Charts */
		function LoadChart()
		{
			ChartDayTemp0();
			ChartDayTemp1();
			ChartDayTemp2();
			ChartWeekTemp0();
			ChartWeekTemp1();
			ChartWeekTemp2();
			ChartFortnightTemp0();
			ChartFortnightTemp1();
			ChartFortnightTemp2();
			ChartMonthTemp0();
			ChartMonthTemp1();
			ChartMonthTemp2();
			ChartYearTemp0();
			ChartYearTemp1();
			ChartYearTemp2();
		}
	/* Chart Day */
		function ChartDayTemp0()
		{
			var options = {
				chart: {
					renderTo: 'chart_day_temp0',
					type: 'spline'
				},
				title: {
					text: 'Мониторинг температуры и влажности за день'
				},
				subtitle: {
					text: 'В подполе'
				},
				xAxis: {
					title: {
						text: 'Время в часах',
						style: {
							'font-size': '16px',
						}
					},
					labels: {
						style: {
							'font-size': '14px'
						}
					},
					categories: [{}]
				},
				yAxis: {
					title: {
						text: 'Значение',
						style: {
							'font-size': '16px'
						}
					},
					labels: {
						style: {
							'font-size': '14px'
						}
					},
					gridLineDashStyle: 'longdash'
				},
				plotOptions: {
					series: {
						dataLabels: {
							enabled: true,
							formatter: function(){
								if(this.series.name == "Температура")
								{
									return this.y + " °C";
								}
								if(this.series.name == "Влажность")
								{
									return this.y + " %";
								}
							}
						}
					}
				},
				tooltip: {
					headerFormat: 'Время <b>{point.x}</b> часа(ов)<br>',
					formatter: function(){
						if(this.series.name == "Температура")
						{
							return "Время: " + '<b>' + this.x + ' час (а)</b><br>' + "Температура: " + '<b>' + this.y + ' °C</b>';
						}
						if(this.series.name == "Влажность")
						{
							return "Время: " + '<b>' + this.x + ' час (а)</b><br>' + "Влажность: " + '<b>' + this.y + ' %</b>';
						}
					}
				},
				series: [{}]
			};
			
			$.getJSON("../ajax/sensor/temp0/day.php", function(response){
				options.series[0].name = "Температура";
				options.series[0].data = response.temp;
				options.series[0].color = "#F88C0D";
				options.series[1].name = "Влажность";
				options.series[1].data = response.hum;
				options.series[1].color = "#0D91F8";
				options.xAxis.categories = response.date;
				var chart = new Highcharts.Chart(options);
			});
		}
		function ChartDayTemp1()
		{
			var options = {
				chart: {
					renderTo: 'chart_day_temp1',
					type: 'spline'
				},
				title: {
					text: 'Мониторинг температуры и влажности за день'
				},
				subtitle: {
					text: 'В квартире'
				},
				xAxis: {
					title: {
						text: 'Время в часах',
						style: {
							'font-size': '16px',
						}
					},
					labels: {
						style: {
							'font-size': '14px'
						}
					},
					categories: [{}]
				},
				yAxis: {
					title: {
						text: 'Значение',
						style: {
							'font-size': '16px'
						}
					},
					labels: {
						style: {
							'font-size': '14px'
						}
					},
					gridLineDashStyle: 'longdash'
				},
				plotOptions: {
					series: {
						dataLabels: {
							enabled: true,
							formatter: function(){
								if(this.series.name == "Температура")
								{
									return this.y + " °C";
								}
								if(this.series.name == "Влажность")
								{
									return this.y + " %";
								}
							}
						}
					}
				},
				tooltip: {
					headerFormat: 'Время <b>{point.x}</b> часа(ов)<br>',
					formatter: function(){
						if(this.series.name == "Температура")
						{
							return "Время: " + '<b>' + this.x + ' час (а)</b><br>' + "Температура: " + '<b>' + this.y + ' °C</b>';
						}
						if(this.series.name == "Влажность")
						{
							return "Время: " + '<b>' + this.x + ' час (а)</b><br>' + "Влажность: " + '<b>' + this.y + ' %</b>';
						}
					}
				},
				series: [{},{}]
			};
			
			$.getJSON("../ajax/sensor/temp1/day.php", function(response){
				options.series[0].name = "Температура";
				options.series[0].data = response.temp;
				options.series[0].color = "#F88C0D";
				options.series[1].name = "Влажность";
				options.series[1].data = response.hum;
				options.series[1].color = "#0D91F8";
				options.xAxis.categories = response.date;
				var chart = new Highcharts.Chart(options);
			});
		}
		function ChartDayTemp2()
		{
			var options = {
				chart: {
					renderTo: 'chart_day_temp2',
					type: 'spline'
				},
				title: {
					text: 'Мониторинг температуры и влажности за день'
				},
				subtitle: {
					text: 'На улице'
				},
				xAxis: {
					title: {
						text: 'Время в часах',
						style: {
							'font-size': '16px',
						}
					},
					labels: {
						style: {
							'font-size': '14px'
						}
					},
					categories: [{}]
				},
				yAxis: {
					title: {
						text: 'Значение',
						style: {
							'font-size': '16px'
						}
					},
					labels: {
						style: {
							'font-size': '14px'
						}
					},
					gridLineDashStyle: 'longdash'
				},
				plotOptions: {
					series: {
						dataLabels: {
							enabled: true,
							formatter: function(){
								if(this.series.name == "Температура")
								{
									return this.y + " °C";
								}
								if(this.series.name == "Влажность")
								{
									return this.y + " %";
								}
							}
						}
					}
				},
				tooltip: {
					headerFormat: 'Время <b>{point.x}</b> часа(ов)<br>',
					formatter: function(){
						if(this.series.name == "Температура")
						{
							return "Время: " + '<b>' + this.x + ' час (а)</b><br>' + "Температура: " + '<b>' + this.y + ' °C</b>';
						}
						if(this.series.name == "Влажность")
						{
							return "Время: " + '<b>' + this.x + ' час (а)</b><br>' + "Влажность: " + '<b>' + this.y + ' %</b>';
						}
					}
				},
				series: [{},{}]
			};
			
			$.getJSON("../ajax/sensor/temp2/day.php", function(response){
				options.series[0].name = "Температура";
				options.series[0].data = response.temp;
				options.series[0].color = "#F88C0D";
				options.series[1].name = "Влажность";
				options.series[1].data = response.hum;
				options.series[1].color = "#0D91F8";
				options.xAxis.categories = response.date;
				var chart = new Highcharts.Chart(options);
			});
		}
	/* /Chart Day */
	/* Chart Week */
		function ChartWeekTemp0()
		{
			var options = {
				chart: {
					renderTo: 'chart_week_temp0',
					type: 'spline'
				},
				title: {
					text: 'Мониторинг температуры и влажности за неделю'
				},
				subtitle: {
					text: 'В подполе'
				},
				xAxis: {
					title: {
						text: 'Дни недели',
						style: {
							'font-size': '16px'
						}
					},
					labels: {
						style: {
							'font-size': '14px'
						}
					},
					categories: [{}]
				},
				yAxis: {
					title: {
						text: 'Значение',
						style: {
							'font-size': '16px'
						}
					},
					labels: {
						style: {
							'font-size': '14px'
						}
					},
					gridLineDashStyle: 'longdash'
				},
				plotOptions: {
					series: {
						dataLabels: {
							enabled: true,
							formatter: function(){
								if(this.series.name == "Температура")
								{
									return this.y + " °C";
								}
								if(this.series.name == "Влажность")
								{
									return this.y + " %";
								}
							}
						}
					}
				},
				tooltip: {
					headerFormat: 'Время <b>{point.x}</b> часа(ов)<br>',
					formatter: function(){
						if(this.series.name == "Температура")
						{
							return "Дата: " + '<b>' + this.x + '</b><br>' + "Температура: " + '<b>' + this.y + ' °C</b>';
						}
						if(this.series.name == "Влажность")
						{
							return "Дата: " + '<b>' + this.x + '</b><br>' + "Влажность: " + '<b>' + this.y + ' %</b>';
						}
					}
				},
				series: [{},{}]
			};
			
			$.getJSON("../ajax/sensor/temp0/week.php", function(response){
				options.series[0].name = "Температура";
				options.series[0].data = response.temp;
				options.series[0].color = "#F88C0D";
				options.series[1].name = "Влажность";
				options.series[1].data = response.hum;
				options.series[1].color = "#0D91F8";
				options.xAxis.categories = response.date;
				var chart = new Highcharts.Chart(options);
			});
		}
		function ChartWeekTemp1()
		{
			var options = {
				chart: {
					renderTo: 'chart_week_temp1',
					type: 'spline'
				},
				title: {
					text: 'Мониторинг температуры и влажности за неделю'
				},
				subtitle: {
					text: 'В квартире'
				},
				xAxis: {
					title: {
						text: 'Дни недели',
						style: {
							'font-size': '16px'
						}
					},
					labels: {
						style: {
							'font-size': '14px'
						}
					},
					categories: [{}]
				},
				yAxis: {
					title: {
						text: 'Значение',
						style: {
							'font-size': '16px'
						}
					},
					labels: {
						style: {
							'font-size': '14px'
						}
					},
					gridLineDashStyle: 'longdash'
				},
				plotOptions: {
					series: {
						dataLabels: {
							enabled: true,
							formatter: function(){
								if(this.series.name == "Температура")
								{
									return this.y + " °C";
								}
								if(this.series.name == "Влажность")
								{
									return this.y + " %";
								}
							}
						}
					}
				},
				tooltip: {
					headerFormat: 'Время <b>{point.x}</b> часа(ов)<br>',
					formatter: function(){
						if(this.series.name == "Температура")
						{
							return "Дата: " + '<b>' + this.x + '</b><br>' + "Температура: " + '<b>' + this.y + ' °C</b>';
						}
						if(this.series.name == "Влажность")
						{
							return "Дата: " + '<b>' + this.x + '</b><br>' + "Влажность: " + '<b>' + this.y + ' %</b>';
						}
					}
				},
				series: [{},{}]
			};
			
			$.getJSON("../ajax/sensor/temp1/week.php", function(response){
				options.series[0].name = "Температура";
				options.series[0].data = response.temp;
				options.series[0].color = "#F88C0D";
				options.series[1].name = "Влажность";
				options.series[1].data = response.hum;
				options.series[1].color = "#0D91F8";
				options.xAxis.categories = response.date;
				var chart = new Highcharts.Chart(options);
			});
		}
		function ChartWeekTemp2()
		{
			var options = {
				chart: {
					renderTo: 'chart_week_temp2',
					type: 'spline'
				},
				title: {
					text: 'Мониторинг температуры и влажности за неделю'
				},
				subtitle: {
					text: 'На улице'
				},
				xAxis: {
					title: {
						text: 'Дни недели',
						style: {
							'font-size': '16px'
						}
					},
					labels: {
						style: {
							'font-size': '14px'
						}
					},
					categories: [{}]
				},
				yAxis: {
					title: {
						text: 'Значение',
						style: {
							'font-size': '16px'
						}
					},
					labels: {
						style: {
							'font-size': '14px'
						}
					},
					gridLineDashStyle: 'longdash'
				},
				plotOptions: {
					series: {
						dataLabels: {
							enabled: true,
							formatter: function(){
								if(this.series.name == "Температура")
								{
									return this.y + " °C";
								}
								if(this.series.name == "Влажность")
								{
									return this.y + " %";
								}
							}
						}
					}
				},
				tooltip: {
					headerFormat: 'Время <b>{point.x}</b> часа(ов)<br>',
					formatter: function(){
						if(this.series.name == "Температура")
						{
							return "Дата: " + '<b>' + this.x + '</b><br>' + "Температура: " + '<b>' + this.y + ' °C</b>';
						}
						if(this.series.name == "Влажность")
						{
							return "Дата: " + '<b>' + this.x + '</b><br>' + "Влажность: " + '<b>' + this.y + ' %</b>';
						}
					}
				},
				series: [{},{}]
			};
			
			$.getJSON("../ajax/sensor/temp2/week.php", function(response){
				options.series[0].name = "Температура";
				options.series[0].data = response.temp;
				options.series[0].color = "#F88C0D";
				options.series[1].name = "Влажность";
				options.series[1].data = response.hum;
				options.series[1].color = "#0D91F8";
				options.xAxis.categories = response.date;
				var chart = new Highcharts.Chart(options);
			});
		}
	/* /Chart Week */
	/* Chart FortNight */
		function ChartFortnightTemp0()
		{
			var options = {
				chart: {
					renderTo: 'chart_fortnight_temp0',
					type: 'spline'
				},
				title: {
					text: 'Мониторинг температуры и влажности за две недели'
				},
				subtitle: {
					text: 'В подполе'
				},
				xAxis: {
					title: {
						text: 'Дни недели',
						style: {
							'font-size': '16px'
						}
					},
					labels: {
						style: {
							'font-size': '14px'
						}
					},
					categories: [{}]
				},
				yAxis: {
					title: {
						text: 'Значение',
						style: {
							'font-size': '16px'
						}
					},
					labels: {
						style: {
							'font-size': '14px'
						}
					},
					gridLineDashStyle: 'longdash'
				},
				plotOptions: {
					series: {
						dataLabels: {
							enabled: true,
							formatter: function(){
								if(this.series.name == "Температура")
								{
									return this.y + " °C";
								}
								if(this.series.name == "Влажность")
								{
									return this.y + " %";
								}
							}
						}
					}
				},
				tooltip: {
					headerFormat: 'Время <b>{point.x}</b> часа(ов)<br>',
					formatter: function(){
						if(this.series.name == "Температура")
						{
							return "Дата: " + '<b>' + this.x + '</b><br>' + "Температура: " + '<b>' + this.y + ' °C</b>';
						}
						if(this.series.name == "Влажность")
						{
							return "Дата: " + '<b>' + this.x + '</b><br>' + "Влажность: " + '<b>' + this.y + ' %</b>';
						}
					}
				},
				series: [{},{}]
			};
			
			$.getJSON("../ajax/sensor/temp0/fortnight.php", function(response){
				options.series[0].name = "Температура";
				options.series[0].data = response.temp;
				options.series[0].color = "#F88C0D";
				options.series[1].name = "Влажность";
				options.series[1].data = response.hum;
				options.series[1].color = "#0D91F8";
				options.xAxis.categories = response.date;
				var chart = new Highcharts.Chart(options);
			});
		}
		function ChartFortnightTemp1()
		{
			var options = {
				chart: {
					renderTo: 'chart_fortnight_temp1',
					type: 'spline'
				},
				title: {
					text: 'Мониторинг температуры и влажности за две недели'
				},
				subtitle: {
					text: 'В квартире'
				},
				xAxis: {
					title: {
						text: 'Дни недели',
						style: {
							'font-size': '16px'
						}
					},
					labels: {
						style: {
							'font-size': '14px'
						}
					},
					categories: [{}]
				},
				yAxis: {
					title: {
						text: 'Значение',
						style: {
							'font-size': '16px'
						}
					},
					labels: {
						style: {
							'font-size': '14px'
						}
					},
					gridLineDashStyle: 'longdash'
				},
				plotOptions: {
					series: {
						dataLabels: {
							enabled: true,
							formatter: function(){
								if(this.series.name == "Температура")
								{
									return this.y + " °C";
								}
								if(this.series.name == "Влажность")
								{
									return this.y + " %";
								}
							}
						}
					}
				},
				tooltip: {
					headerFormat: 'Время <b>{point.x}</b> часа(ов)<br>',
					formatter: function(){
						if(this.series.name == "Температура")
						{
							return "Дата: " + '<b>' + this.x + '</b><br>' + "Температура: " + '<b>' + this.y + ' °C</b>';
						}
						if(this.series.name == "Влажность")
						{
							return "Дата: " + '<b>' + this.x + '</b><br>' + "Влажность: " + '<b>' + this.y + ' %</b>';
						}
					}
				},
				series: [{},{}]
			};
			
			$.getJSON("../ajax/sensor/temp1/fortnight.php", function(response){
				options.series[0].name = "Температура";
				options.series[0].data = response.temp;
				options.series[0].color = "#F88C0D";
				options.series[1].name = "Влажность";
				options.series[1].data = response.hum;
				options.series[1].color = "#0D91F8";
				options.xAxis.categories = response.date;
				var chart = new Highcharts.Chart(options);
			});
		}
		function ChartFortnightTemp2()
		{
			var options = {
				chart: {
					renderTo: 'chart_fortnight_temp2',
					type: 'spline'
				},
				title: {
					text: 'Мониторинг температуры и влажности за две недели'
				},
				subtitle: {
					text: 'На улице'
				},
				xAxis: {
					title: {
						text: 'Дни недели',
						style: {
							'font-size': '16px'
						}
					},
					labels: {
						style: {
							'font-size': '14px'
						}
					},
					categories: [{}]
				},
				yAxis: {
					title: {
						text: 'Значение',
						style: {
							'font-size': '16px'
						}
					},
					labels: {
						style: {
							'font-size': '14px'
						}
					},
					gridLineDashStyle: 'longdash'
				},
				plotOptions: {
					series: {
						dataLabels: {
							enabled: true,
							formatter: function(){
								if(this.series.name == "Температура")
								{
									return this.y + " °C";
								}
								if(this.series.name == "Влажность")
								{
									return this.y + " %";
								}
							}
						}
					}
				},
				tooltip: {
					headerFormat: 'Время <b>{point.x}</b> часа(ов)<br>',
					formatter: function(){
						if(this.series.name == "Температура")
						{
							return "Дата: " + '<b>' + this.x + '</b><br>' + "Температура: " + '<b>' + this.y + ' °C</b>';
						}
						if(this.series.name == "Влажность")
						{
							return "Дата: " + '<b>' + this.x + '</b><br>' + "Влажность: " + '<b>' + this.y + ' %</b>';
						}
					}
				},
				series: [{},{}]
			};
			
			$.getJSON("../ajax/sensor/temp2/fortnight.php", function(response){
				options.series[0].name = "Температура";
				options.series[0].data = response.temp;
				options.series[0].color = "#F88C0D";
				options.series[1].name = "Влажность";
				options.series[1].data = response.hum;
				options.series[1].color = "#0D91F8";
				options.xAxis.categories = response.date;
				var chart = new Highcharts.Chart(options);
			});
		}
	/* /Chart FortNight */
	/* Chart Month */
		function ChartMonthTemp0()
		{
			var options = {
				chart: {
					renderTo: 'chart_month_temp0',
					type: 'spline'
				},
				title: {
					text: 'Мониторинг температуры и влажности за месяц'
				},
				subtitle: {
					text: 'В подполе'
				},
				xAxis: {
					title: {
						text: 'Дни недели',
						style: {
							'font-size': '16px'
						}
					},
					labels: {
						style: {
							'font-size': '14px'
						}
					},
					categories: [{}]
				},
				yAxis: {
					title: {
						text: 'Значение',
						style: {
							'font-size': '16px'
						}
					},
					labels: {
						style: {
							'font-size': '14px'
						}
					},
					gridLineDashStyle: 'longdash'
				},
				plotOptions: {
					series: {
						dataLabels: {
							enabled: true,
							formatter: function(){
								if(this.series.name == "Температура")
								{
									return this.y + " °C";
								}
								if(this.series.name == "Влажность")
								{
									return this.y + " %";
								}
							}
						}
					}
				},
				tooltip: {
					headerFormat: 'Время <b>{point.x}</b> часа(ов)<br>',
					formatter: function(){
						if(this.series.name == "Температура")
						{
							return "Дата: " + '<b>' + this.x + '</b><br>' + "Температура: " + '<b>' + this.y + ' °C</b>';
						}
						if(this.series.name == "Влажность")
						{
							return "Дата: " + '<b>' + this.x + '</b><br>' + "Влажность: " + '<b>' + this.y + ' %</b>';
						}
					}
				},
				series: [{},{}]
			};
			
			$.getJSON("../ajax/sensor/temp0/month.php", function(response){
				options.series[0].name = "Температура";
				options.series[0].data = response.temp;
				options.series[0].color = "#F88C0D";
				options.series[1].name = "Влажность";
				options.series[1].data = response.hum;
				options.series[1].color = "#0D91F8";
				options.xAxis.categories = response.date;
				var chart = new Highcharts.Chart(options);
			});
		}
		function ChartMonthTemp1()
		{
			var options = {
				chart: {
					renderTo: 'chart_month_temp1',
					type: 'spline'
				},
				title: {
					text: 'Мониторинг температуры и влажности за месяц'
				},
				subtitle: {
					text: 'В квартире'
				},
				xAxis: {
					title: {
						text: 'Дни недели',
						style: {
							'font-size': '16px'
						}
					},
					labels: {
						style: {
							'font-size': '14px'
						}
					},
					categories: [{}]
				},
				yAxis: {
					title: {
						text: 'Значение',
						style: {
							'font-size': '16px'
						}
					},
					labels: {
						style: {
							'font-size': '14px'
						}
					},
					gridLineDashStyle: 'longdash'
				},
				plotOptions: {
					series: {
						dataLabels: {
							enabled: true,
							formatter: function(){
								if(this.series.name == "Температура")
								{
									return this.y + " °C";
								}
								if(this.series.name == "Влажность")
								{
									return this.y + " %";
								}
							}
						}
					}
				},
				tooltip: {
					headerFormat: 'Время <b>{point.x}</b> часа(ов)<br>',
					formatter: function(){
						if(this.series.name == "Температура")
						{
							return "Дата: " + '<b>' + this.x + '</b><br>' + "Температура: " + '<b>' + this.y + ' °C</b>';
						}
						if(this.series.name == "Влажность")
						{
							return "Дата: " + '<b>' + this.x + '</b><br>' + "Влажность: " + '<b>' + this.y + ' %</b>';
						}
					}
				},
				series: [{},{}]
			};
			
			$.getJSON("../ajax/sensor/temp1/month.php", function(response){
				options.series[0].name = "Температура";
				options.series[0].data = response.temp;
				options.series[0].color = "#F88C0D";
				options.series[1].name = "Влажность";
				options.series[1].data = response.hum;
				options.series[1].color = "#0D91F8";
				options.xAxis.categories = response.date;
				var chart = new Highcharts.Chart(options);
			});
		}
		function ChartMonthTemp2()
		{
			var options = {
				chart: {
					renderTo: 'chart_month_temp2',
					type: 'spline'
				},
				subtitle: {
					text: 'На улице'
				},
				title: {
					text: 'Мониторинг температуры и влажности за месяц'
				},
				xAxis: {
					title: {
						text: 'Дни недели',
						style: {
							'font-size': '16px'
						}
					},
					labels: {
						style: {
							'font-size': '14px'
						}
					},
					categories: [{}]
				},
				yAxis: {
					title: {
						text: 'Значение',
						style: {
							'font-size': '16px'
						}
					},
					labels: {
						style: {
							'font-size': '14px'
						}
					},
					gridLineDashStyle: 'longdash'
				},
				plotOptions: {
					series: {
						dataLabels: {
							enabled: true,
							formatter: function(){
								if(this.series.name == "Температура")
								{
									return this.y + " °C";
								}
								if(this.series.name == "Влажность")
								{
									return this.y + " %";
								}
							}
						}
					}
				},
				tooltip: {
					headerFormat: 'Время <b>{point.x}</b> часа(ов)<br>',
					formatter: function(){
						if(this.series.name == "Температура")
						{
							return "Дата: " + '<b>' + this.x + '</b><br>' + "Температура: " + '<b>' + this.y + ' °C</b>';
						}
						if(this.series.name == "Влажность")
						{
							return "Дата: " + '<b>' + this.x + '</b><br>' + "Влажность: " + '<b>' + this.y + ' %</b>';
						}
					}
				},
				series: [{},{}]
			};
			
			$.getJSON("../ajax/sensor/temp2/month.php", function(response){
				options.series[0].name = "Температура";
				options.series[0].data = response.temp;
				options.series[0].color = "#F88C0D";
				options.series[1].name = "Влажность";
				options.series[1].data = response.hum;
				options.series[1].color = "#0D91F8";
				options.xAxis.categories = response.date;
				var chart = new Highcharts.Chart(options);
			});
		}
	/* /Chart Month */
	/* Chart Year */
		function chart_year()
		{
			var options = {
				chart: {
					renderTo: 'chart_year',
					type: 'column'
				},
				title: {
					text: 'Мониторинг температуры и влажности за год'
				},
				subtitle: {
					text: 'По месяцам'
				},
				xAxis: {
					title: {
						text: 'Месяцы',
						style: {
							'font-size': '16px'
						}
					},
					labels: {
						style: {
							'font-size': '14px'
						}
					},
					categories: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
				},
				yAxis: {
					title: {
						text: 'Значение',
						style: {
							'font-size': '16px'
						}
					},
					labels: {
						style: {
							'font-size': '14px'
						}
					},
					gridLineDashStyle: 'longdash'
				},
				plotOptions: {
					column: {
						pointPadding: 0.1
					}
				},
				tooltip: {
					headerFormat: '<span style="font-size:14px;font-weight:bold;">{point.key}</span><table>',
					pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} °C</b></td></tr>',
					footerFormat: '</table>',
					shared: true,
					useHTML: true
				},
				/*credits: {
					enabled: false
				},*/
				series: [{},{},{}]
			};
			
			var path = sessionStorage.getItem("path");
			
			$.ajax({
				url: "../ajax/weather/" + path + "/get_weather_year.php",
				type: "POST",
				dataType: "json",
				beforeSend: function(){
					$("#chart_year .loader").show();
				},
				complete: function(){
					$("#chart_year .loader").hide();
				},
				success: function(data){
					options.series[0].name = "Макс.темп";
					options.series[0].color = "#FF463D";
					options.series[0].data = data.max_temperature;
					options.series[1].name = "Мин.темп";
					options.series[1].color = "#3D89FF";
					options.series[1].data = data.min_temperature;
					options.series[2].name = "Ср.темп";
					options.series[2].color = "#FF863D";
					options.series[2].data = data.avg_temperature;
					var chart = new Highcharts.Chart(options);
				},
				error: function(){
					$("#chart_year").html("Ошибка подгрузки данных");
				}
			});
		}
	/* /Chart Year */
/* /Charts */
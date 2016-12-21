/* Auto Run */
	$(function(){
		LoadNow();
	});
/* /Auto Run */
/* Informer Sensor */
	function LoadNow()
	{
		NowTemp0();
		NowTemp1();
		NowTemp2();
		NowWater0();
		ListenUpdate();
	}
	function NowTemp0()
	{
		$.getJSON("../ajax/sensor/temp0/now.php", function(response){
			$("#now_temp0").html(response.temp);
			$("#now_hum0").html(response.hum);
			$("#now_date0").html(response.date);
		});
	}
	function NowTemp1()
	{
		$.getJSON("../ajax/sensor/temp1/now.php", function(response){
			$("#now_temp1").html(response.temp);
			$("#now_hum1").html(response.hum);
			$("#now_date1").html(response.date);
		});
	}
	function NowTemp2()
	{
		$.getJSON("../ajax/sensor/temp2/now.php", function(response){
			$("#now_temp2").html(response.temp);
			$("#now_hum2").html(response.hum);
			$("#now_date3").html(response.date);
		});
	}
	function NowWater0()
	{
		$.getJSON("../ajax/sensor/water0/now.php", function(response){
			$("#now_water0").html(response.water);
			$("#now_date2").html(response.date);
		});
	}
	function ListenUpdate()
	{
		$("#btn_update0").on("click", function(){
			//alert("Нажали на Update0");
			NowTemp0();
		});
		$("#btn_update1").on("click", function(){
			//alert("Нажали на Update1");
			NowTemp1();
		});
		$("#btn_update2").on("click", function(){
			NowWater0();
		});
	}
/* /Informer  Sensor */
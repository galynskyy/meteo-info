<?php
	/* SQL */
		/* Connect */
			try
			{
				$connection = new PDO("mysql:host=localhost;dbname=meteo","root","");
			}
			catch (PDOException $e)
			{
				echo "Connection error: " . $e->getMessage();
			}
		/* /Connect */
		/* Query */
			$query = $connection->prepare("SELECT temp, hum, date FROM meteo_temp0 ORDER BY id DESC LIMIT 1");
			$query->execute();
			
			$result = $query->fetchAll();
		/* /Query */
	/* /SQL */
	/* Data Processing */
		/* Check */
			if($query->rowCount() < 1)
			{
				$temp = "Ошибка";
				$hum = "Ошибка";
				$date = "Ошибка";
			}
			else
			{
				$temp = $result[0]["temp"]." °C";
				$hum = $result[0]["hum"]." %";
				$date = $result[0]["date"];
			}
		/* /Check */
		/* Return JSON */
			echo json_encode(array(
				"temp" => $temp,
				"hum" => $hum,
				"date" => $date
			), JSON_NUMERIC_CHECK);
		/* /Return JSON */
	/* /Data Processing */
?>
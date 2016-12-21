<?php
	/* SQL */
		/* Connect */
			try
			{
				$connection = new PDO("mysql:host=178.62.251.159;dbname=meteo","meteouser","drNTWnI8xO3fUOioUN");
			}
			catch (PDOException $e)
			{
				echo "Connection error: " . $e->getMessage();
			}
		/* /Connect */
		/* Query */
			$query = $connection->prepare("SELECT MAX(temperature) AS Maximum, MIN(temperature) AS Minimum, AVG(temperature) AS Average, date FROM weather WHERE date > NOW() - INTERVAL 1 YEAR AND date < NOW() GROUP BY MONTH(date) ORDER BY date ASC");
			$query->execute();
			$result = $query->fetchAll();
			
			//print_r($result);
			
			foreach($result as $row)
			{
				$max_temperature[] = $row["Maximum"];
			}
			
			foreach($result as $row)
			{
				$min_temperature[] = $row["Minimum"];
			}
			
			foreach($result as $row)
			{
				$avg_temperature[] = round($row["Average"]);
			}
			
			/*foreach($result as $row)
			{
				$date_temperature[] = date("m.d.y", strtotime($row["date"]));
			}*/
			
			/*foreach($result as $row)
			{
				$humidity[] = $row["humidity"];
			}
			
			foreach($result as $row)
			{
				$date[] = date("d", strtotime($row["date"]));
			}*/
			
			echo json_encode(array(
				"max_temperature" => $max_temperature,
				"min_temperature" => $min_temperature,
				"avg_temperature" => $avg_temperature
				//"humidity" => $humidity,
				//"date" => $date_temperature
			), JSON_NUMERIC_CHECK);
		/* /Query */
	/* /SQL */
?>
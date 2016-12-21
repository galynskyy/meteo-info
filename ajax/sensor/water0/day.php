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
			$query = $connection->prepare("SELECT temp, hum, date FROM meteo_temp0 WHERE DATE_ADD(CURDATE(), INTERVAL -1 DAY) GROUP BY DATE_FORMAT(date, '%H') LIMIT 24");
			$query->execute();
			//echo "Строк - ".$query->fetchColumn();
			$result = $query->fetchAll();
			//var_dump($result);
			
			foreach($result as $row)
			{
				$temperature[] = $row["temp"];
			}
			
			foreach($result as $row)
			{
				$humidity[] = $row["hum"];
			}
			
			foreach($result as $row)
			{
				$date[] = date("H", strtotime($row["date"]));
			}
			
			echo json_encode(array(
				"temp" => $temperature,
				"hum" => $humidity,
				"date" => $date
			), JSON_NUMERIC_CHECK);
		/* /Query */
	/* /SQL */
?>
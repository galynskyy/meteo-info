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
			$query = $connection->prepare("SELECT temperature, humidity, date FROM weather WHERE (date >= DATE_SUB(CURRENT_DATE, INTERVAL 7 DAY)) AND (TIME(date) BETWEEN :time_start AND :time_end)");
			$query->bindValue(':time_start', "12:00:00", PDO::PARAM_STR);
			$query->bindValue(':time_end', "13:00:00", PDO::PARAM_STR);
			$query->execute();
			$result = $query->fetchAll();
			
			foreach($result as $row)
			{
				$temperature[] = $row["temperature"];
			}
			
			foreach($result as $row)
			{
				$humidity[] = $row["humidity"];
			}
			
			foreach($result as $row)
			{
				$date[] = date("m.d.y", strtotime($row["date"]));
			}
			
			echo json_encode(array(
				"temperature" => $temperature,
				"humidity" => $humidity,
				"date" => $date
			), JSON_NUMERIC_CHECK);
		/* /Query */
	/* /SQL */
?>
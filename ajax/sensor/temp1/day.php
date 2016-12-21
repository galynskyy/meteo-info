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
			$query = $connection->prepare("SELECT temp, hum, date FROM meteo_temp1 WHERE DATE(date) = CURRENT_DATE() GROUP BY EXTRACT(HOUR FROM(date)) ORDER BY EXTRACT(HOUR FROM(date))");
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

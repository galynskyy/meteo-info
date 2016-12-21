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
			$query = $connection->prepare("SELECT water, date FROM meteo_water0 ORDER BY id DESC LIMIT 1");
			$query->execute();
			
			$result = $query->fetchAll();
		/* /Query */
	/* /SQL */
	/* Data Processing */
		/* Check */
			if($query->rowCount() < 1)
			{
				$water = "Ошибка";
				$date = "Ошибка";
			}
			else
			{
				$water = $result[0]["water"];
				$date = $result[0]["date"];
			}
			
			if($water == 0)
			{
				$result_water = "Нет";
			}
			else
			{
				$result_water = "Есть";
			}
		/* /Check */
		/* Return JSON */
			echo json_encode(array(
				"water" => $result_water,
				"date" => $date
			), JSON_NUMERIC_CHECK);
		/* /Return JSON */
	/* /Data Processing */
?>

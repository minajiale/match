<?php
	$severname = "localhost";
	$username = "root";
	$password = "";
	$link = mysqli_connect($severname, $username, $password,'personal');
	if(!$link){
		die("could not connect:" . mysqli_connect_error($link));
	}
?>
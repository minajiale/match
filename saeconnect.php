<?php
$db = mysql_connect(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS);
if($db){
	mysql_select_db(SAE_MYSQL_PORT,$db);
}
else{
	die('could not connect:'.mysql_error());
}
?>
<!-- 用户名　 :  SAE_MYSQL_USER
密　　码 :  SAE_MYSQL_PASS
主库域名 :  SAE_MYSQL_HOST_M
从库域名 :  SAE_MYSQL_HOST_S
端　　口 :  SAE_MYSQL_PORT
数据库名 :  SAE_MYSQL_DB -->
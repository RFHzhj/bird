<?php
	 $success = array('msg'=>'ok');	
	 if($_GET['res'] == bannerImg){
	 	//如果发来的请求是图片请求
	 	$success['bannerImg'] = ['img/indexbj.png'];
	 }else if($_GET['res'] == bannerText){
	 	$success['bannerText'] == ['bannerText'];
	 }
	 echo json_encode($success);
?>
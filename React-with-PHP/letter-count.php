<?php

// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');
    header('Access-Control-Allow-Headers: content-type');
  }
  

  if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $wordArr = str_split($data['payload']);
    $letterCount = Array();
    foreach($wordArr as $key => $val){
      if (array_key_exists($val, $letterCount)){
        $letterCount[$val]++;
      } else {
        $letterCount = array_merge($letterCount, array($val => 1));
      };
    };
    echo json_encode($letterCount);
  };

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>Document</title>
</head>
<body>
  

<?php  

// $arr = [1, 3, 2, 2, 2, 2, 3, 3, 3, 10];


// function maxIntArray($a)
// {

// $arr = array_count_values($a);


// sort($arr);
// print_r($arr);
// $pop = array_key_last($arr);

// echo $pop;

// }

// maxIntArray($arr);



// $string1 = "school master";
// $string2 = "the classroom";

// function checkString($str1, $str2)
// {
//     $sum = 0;
//     if(strlen($str1) != strlen($str2)){
//         echo 'NO';
//         exit;
//     }

// for ($i=0; $i <strlen($str1) ; $i++) 
// { 
//     for ($j=0; $j < strlen($str2); $j++) { 
       
//         if ($str1[$i] == $str2[$j]) 
//         {
//             $sum++;
//             break;
//         }
           
//     }
// }

// if($sum == strlen($str1)){
//     echo 'YES';
// }else{
//     echo 'no';
// }

// }

// checkString($string1, $string2);



// $arr = [1, 2, 3, 4, 5];

// function evenInt($a){

//     for ($i=0; $i <= count($a)+1; $i++) { 
//         if ($a[$i] % 2 != 0 ) {
//             unset($a[$i]);
//         }
//     }
  
// print_r($a);
// }


// evenInt($arr);


// $str = 'dimadeveloper';

// function strRevers($str)
// {
//     for ($i=strlen($str); $i >= 0; $i--) { 
//         echo @($str[$i]);
//     }

// }
// strRevers($str);

// $array = [1, 3, 2, 2, 3, 0];
// $arr = [];

// function doubleInt(&$array, &$arr)
// {
//   for ($i = 0; $i <count($array); $i++) {
//       for ($j=$i; $j <$i + 1 ; $j++) { 

//         if($array[$i] == $array[$j]){
//             array_push($arr, $array[$i]);
//           }
//       }
     
//   }

// print_r($arr);
// }

// doubleInt($array, $arr);

// for ($i=0; $i < 6; $i++) { 
//   if ($i % 3 == 0) 
//     continue;
// echo $i % 3 . "<br>";
// }


// function myfunc(&$a){
//   $a++;return $a;
// }

// $b =5;
// $c = myfunc($b)+myfunc(2);
// echo $c;

// function byRefi(&$apples){
//   $apples++;
// }
// $oranges = 5;
// $apples = 5;
// byRefi($oranges);

// echo "У меня $apples яблок и $oranges апельсинв";

function func($r){
  $r++;
}
$r =1;
func(func($r));
echo $r;

?>
<script src="/app.js"></script>
</body>
</html>
   
   
   
   
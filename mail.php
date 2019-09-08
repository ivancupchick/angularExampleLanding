<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

$data = json_decode(file_get_contents('php://input'), true);

if(isset($data['name'])) {
	$name = $data['name'];
	$phone = $data['phone'];
	$price = $data['price'];
	$percentage = $data['percentage'];
	$period = $data['period'];
	$percentageStavka = $data['percentageStavka'];
	$mountyPayment = $data['mountyPayment'];
	$subject = "Заявка на машину от AV-Finance";
	$type = $data['lisingOrCredit'];
	$from = $data['from'];

	$to = "av-financeby@yandex.by"; // Здесь нужно написать e-mail, куда будут приходить письма
	$from = "info@av-finance.by";

	$mail_to_myemail = "
	Имя: $name\r\n
	Телефон: $phone\r\n
	Стоимость автомобиля: $price\r\n
	Процент первого платежа: $percentage\r\n
	Срок кредита/лизинга: $period\r\n
	Тип финансирования: $type\r\n
	Ставка кредита: $percentageStavka\r\n
	Ежемесячный платеж: $mountyPayment\r\n
	$from\r\n
	";

	$headers = "From: $from \r\n" .
	'Reply-To: vanya.cupchick@yandex.by' . "\r\n";

	/* Отправка сообщения, с помощью функции mail() */
	mail($to, $subject, $mail_to_myemail, $headers . 'Content-type: text/plain; charset=utf-8');
}
else
{
    echo "веденные данные некорректны";
}
?>

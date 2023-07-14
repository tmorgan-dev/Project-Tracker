var welcomeTime = dayjs().format('dddd, MMMM D YYYY, h:mm:');

$('#welcometime').text(welcomeTime);


var secondsLeft = dayjs(welcomeTime).format('ss');



setInterval(function () {
    $("#welcometime").html(welcomeTime + secondsLeft);
    ++secondsLeft;
}, 1000);
console.log(secondsLeft)

var counter=0;

var increaseCounter = function() {
	$("span").html(++counter);
};

$("button").on("click",function() {
	increaseCounter();
});

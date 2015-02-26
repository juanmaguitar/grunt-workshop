var addElement = function( text ) {
	$("ul")
		.append(
			$("<li>")
				.html( text  )
		);
};

$("button").on("click",function(){
	addElement ( $("input").val() );
});


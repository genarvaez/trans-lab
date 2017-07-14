$(document).ready(function(){

		var localKey = [];
		var clave;
		for(var i = 1; i< localStorage.length-1; i++){
			clave = localStorage.key(i);
			localKey.push(localStorage.getItem(clave));
		}

	$(".button-collapse").sideNav();
 	$('select').material_select();

 	$(".form button").click(function(e){
 		var email = $("#email").val();
 		var password = $("#password").val();
 		if(email == "" || !(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))){
 			e.preventDefault();
 			alert("Debe ingresar un email válido");
 			$("#email").val("")
 		}
 		else if(!(/^\d{8}([0-9])*$/.test(password))){
 			e.preventDefault();
 			alert("Debe ingresar una contraseña válida");
 			$("#password").val("")
 		}
 		else{
 			localStorage.setItem("email", email);
 		}
 		
 	})

/************************USUARIO***********************************/
    var saveEmail =  localStorage.getItem("email");
 	$("#usuario-email").val(saveEmail);
 	localKey.forEach(function(e, i){
 		$(".tarjetas ul").append('<li>'+ e+ '</li>');
 		$(".select-saldo ul").append('<li><span>' + e + '</span></li>' )
 	});

 	
 	

 	$("#addTarjeta").click(function(){
 		var numTarjeta = $("#numTarjeta").val();
 		localStorage.setItem("tarjeta" + localStorage.length, numTarjeta)
 		$(".tarjetas ul").append('<li>' + numTarjeta + '</li>');
 		$("#numTarjeta").val("");
 	})

/*************************************VER SALDO **************************************/

	
	$(".verSaldo").click(function(){
		$(".saldoDeTarjeta span").html("");
 	$(".tarjetaSaldo").val();

 	$.ajax({
  			url: 'https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + $(".tarjetaSaldo").val() + '',
  			type: 'GET',
  			dataType: 'json',
  		})
  		.done(function(respuesta) {
  			localStorage.setItem("tarjeta1", $(".tarjetaSaldo").val())
  			sessionStorage.setItem("saldo", respuesta.saldoTarjeta)
  			console.log(respuesta);
  			console.log(localStorage);

  			$(".saldoDeTarjeta").append('<span>' + sessionStorage.getItem("saldo") + '</span>')
  		})
  		.fail(function() {
  			console.log("error");
  			
  		})
  		.always(function() {
  			console.log("complete");
  		});
})
/***************************************CONSULTAR TARIFA***********************/
	
	$(".calcular").click(function(){
		$(".pasaje span").html("");
		$(".final span").html("");
		var valor = $("#tarifa").val();
		console.log(valor);
		var saldo = sessionStorage.getItem("saldo");
		var nuevoSaldo = saldo.replace(/[$.]/gi,'');


		if(valor == 740 || ){
			$(".pasaje").append('<span>'+ valor +'</span>');
			$(".final").append('<span>'+( nuevoSaldo - valor )+ '</span>');

			console.log(nuevoSaldo - valor)
		}
		else if(valor == 680){
			$(".pasaje").append('<span>'+ valor +'</span>');
			$(".final").append('<span>'+( nuevoSaldo - valor )+ '</span>');
		}
		else if(valor == 640){
			$(".pasaje").append('<span>'+ valor +'</span>');
			$(".final").append('<span>'+( nuevoSaldo - valor )+ '</span>');
		}
	})

})
 
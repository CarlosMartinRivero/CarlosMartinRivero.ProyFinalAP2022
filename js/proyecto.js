  /*Leer archivo Json*/
  /*const requestURL = 'https://raw.githubusercontent.com/CarlosMartinRivero/CarlosMartinRivero.github.io/main/dat/datos.json'*/
  const requestURL = 'https://raw.githubusercontent.com/CarlosMartinRivero/CarlosMartinRivero.ProyFinalAP2022/main/dat/datos.json'
  
   
  const request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {  
	const datos = request.response;
	CargarDatos(datos);  
	};
  
  
	/*Separo datos que me interesan en este momento*/
	function CargarDatos(datosCV){
		/*console.log(datosCV);*/
		/*console.log(datosCV.results);	*/
		let aux = datosCV.results[0];            		
		CargarDatosAuxiliar(aux);	
	};


	/*Separo datos que voy a cargar*/
	function CargarDatosAuxiliar(aux){    				
		let nombre = aux['name']['first'];    
		let apellido = aux['name']['last'];
		let telefono = aux['phone'];
		let telefonoCelular = aux['cell'];
		let email = aux['email'];
		let calle = aux['location']['street']['name'];
		let calleNro = aux['location']['street']['number'];
		let ciudad = aux['location']['city'];
		let estado = aux['location']['state'];
		let pais = aux['location']['country'];
		let codpost = aux['location']['postcode'];
		let latitud = aux['location']['coordinates']['latitude'];
		let longitud = aux['location']['coordinates']['longitude'];	
		let fechaNac = aux['dob']['date'];
		let edad = aux['dob']['age'];
		let acercademi = aux['Acercademi'];		
		let nacionalidad = aux['nat'];		
		let trabajos = aux['trabajos'];
		let formaciones = aux['formacion'];
		let habilidades = aux['habilidades'];
		
		
		ponerTitulo(nombre + ' ' + apellido);
		ponerNombreYApellido(nombre , apellido);
		ponerNacionalidad(nacionalidad);
		ponerFechaDeNacimiento(fechaNac , edad);  	
		ponerMapa(latitud, longitud);	
		ponerEmail(email);
		ponerDireccion(calle, calleNro , ciudad , codpost , estado , pais);
		ponerTelefono(telefono);
		ponerTelefonoCelular(telefonoCelular);
		ponerAcercademi(acercademi);
		ponerTrabajos(trabajos);
		ponerFormacion(formaciones);
		ponerhabilidades(habilidades);
};



	/*Cargo el mapa*/
	function ponerMapa(latitud, longitud){
		let map = L.map('map').setView([latitud, longitud],20);	
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);	
	};
	
	/*Cargo el parrafo hacerca de mi*/
	/*esta funcion o parecida voy a intentar aplicar para las demas secciones, no se si llego con el tiempo*/
	function ponerAcercademi(acercademi){
		const divAcercaDeMi = document.getElementById('div-acerca-de-mi');    
		const myPara1 = document.createElement('p');		
		myPara1.textContent = acercademi;		
		divAcercaDeMi.appendChild(myPara1);		
		const regex = /\n\r/g;
		divAcercaDeMi.innerHTML= divAcercaDeMi.innerHTML.replace(regex,'<br>');				
	};
	
	/*Cargo trabajos*/
	function ponerTrabajos(trabajos){		
		let texto ="";
		for (let i = 0; i < trabajos.length; i++) {			
			trabajo=trabajos[i];			
			const divExperiencia = document.getElementById('div-experiencia');    
			let myPara1 = document.createElement('h3');
			texto =trabajo['puesto'];
			myPara1.textContent = texto;
			divExperiencia.appendChild(myPara1);	
			
			
			
			let myPara2 = document.createElement('h4');
			texto = trabajo['empresa'];
			myPara2.textContent = texto;
			divExperiencia.appendChild(myPara2);
			
			
			let myPara3 = document.createElement('h4');
			texto = trabajo['fecha'];
			myPara3.textContent = texto;
			divExperiencia.appendChild(myPara3);
			
			texto="";
			let myPara4 = document.createElement('ul');			
			myPara4.textContent = texto;
			divExperiencia.appendChild(myPara4);
			let renglones=trabajo['renglones'];
			
			for (let y = 0; y < renglones.length; y++) {			
				texto = renglones[y];
				let myPara5 = document.createElement('li');
				myPara5.textContent = texto;
				myPara4.appendChild(myPara5);
			};
			
			
			const regex = /\n\r/g;
			divExperiencia.innerHTML= divExperiencia.innerHTML.replace(regex,'<br>');
			
			
			
			
			
		};
		
	};


/*Cargo Habilidades*/
	function ponerhabilidades(habilidades){		
		let texto ="";		
		const divExperiencia = document.getElementById('div-habilidades');    					
		texto="";
		let myPara4 = document.createElement('ul');			
		myPara4.textContent = texto;
		divExperiencia.appendChild(myPara4);		
		for (let i = 0; i < habilidades.length; i++) {
			texto = habilidades[i];
			let myPara5 = document.createElement('li');
			myPara5.textContent = texto;
			myPara4.appendChild(myPara5);
		};
		const regex = /\n\r/g;
		divExperiencia.innerHTML= divExperiencia.innerHTML.replace(regex,'<br>');
	};

/*Cargo formacion*/
function ponerFormacion(formaciones){		
		let texto ="";
		for (let i = 0; i < formaciones.length; i++) {			
			formacion=formaciones[i];			
			console.log(formacion);
			const divFormacion = document.getElementById('div-formacion');    
			let myPara1 = document.createElement('h3');
			texto =formacion['titulo'];
			myPara1.textContent = texto;
			divFormacion.appendChild(myPara1);	
			
			
			
			let myPara2 = document.createElement('h3');
			texto = formacion['universidad'];
			myPara2.textContent = texto;
			divFormacion.appendChild(myPara2);
			
			
			let myPara3 = document.createElement('h3');
			texto = formacion['fecha'];
			myPara3.textContent = texto;
			divFormacion.appendChild(myPara3);
			
			texto="";
			let myPara4 = document.createElement('ul');			
			myPara4.textContent = texto;
			divFormacion.appendChild(myPara4);
			let renglones=formacion['renglones'];
			
			for (let y = 0; y < renglones.length; y++) {			
				texto = renglones[y];
				let myPara5 = document.createElement('li');
				myPara5.textContent = texto;
				myPara4.appendChild(myPara5);
			};
			
			
			const regex = /\n\r/g;
			divFormacion.innerHTML= divFormacion.innerHTML.replace(regex,'<br>');
				
		};
		
	};


	/*Cargo el telefono*/
	function ponerTelefono(telefono){
		document.getElementById('contacto-telefono').href = "tel:+" + telefono;
		document.getElementById('contacto-telefono').innerHTML =  telefono;
	};

	/*Cargo el celular*/
	function ponerTelefonoCelular(telefonoCelular){
		let auxiliartelefonoCelular=telefonoCelular;
		auxiliartelefonoCelular = auxiliartelefonoCelular.replace("("	,"");
		auxiliartelefonoCelular = auxiliartelefonoCelular.replace(")"	,"");
		auxiliartelefonoCelular = auxiliartelefonoCelular.replace("%"	,"");
		auxiliartelefonoCelular = auxiliartelefonoCelular.replace(" "	,"");
		auxiliartelefonoCelular = auxiliartelefonoCelular.replace(" "	,"");
		auxiliartelefonoCelular = auxiliartelefonoCelular.replace("-"	,"");
		document.getElementById('contacto-chat').href = "https://wa.me/" + auxiliartelefonoCelular;
	};

	/*Cargo la dereccion*/
	function ponerDireccion(calle, calleNro , ciudad , codpost , estado , pais){
		document.getElementById('contacto-direccion').innerHTML =calle + ' ' + calleNro + ' ' + ciudad + '(' + codpost + ') '//+ estado + ' ' + pais;
	};

	/*Cargo el Email*/
	function ponerEmail(email){
		document.getElementById('contacto-email').innerHTML =email
	};

	/*Cargo el nombre y apellido*/
	function ponerNombreYApellido(nombre , apellido){
		const eldivdatosdePerfil = document.querySelector('#datos-Perfil.datosdePerfil');    
		const myPara1 = document.createElement('h5');
		myPara1.textContent = ' ' + nombre + ' ' + apellido ;
		eldivdatosdePerfil.appendChild(myPara1);	
		
	};
	
	/*Cargo el titulo*/
	function ponerTitulo(titulo){
		document.title= titulo;    
	};

	
	/*Cargo fecha de nacimiento y la edad*/
	function ponerFechaDeNacimiento(fechaNac , edad){
		const eldivdatosdePerfil = document.querySelector('#datos-Perfil.datosdePerfil');    
		const myPara1 = document.createElement('h5');
		myPara1.textContent = ' Edad: ' + edad + ' (' + fechaNac +')';
		eldivdatosdePerfil.appendChild(myPara1);
	};

	/*Cargo la nacionalidad*/
	function ponerNacionalidad(nacionalidad){
		const eldivdatosdePerfil = document.querySelector('#datos-Perfil.datosdePerfil');    
		const myPara1 = document.createElement('h5');
		myPara1.textContent = ' Nacionalidad:' + nacionalidad;
		eldivdatosdePerfil.appendChild(myPara1);
	};

	/*el click del boton pone y  agrega la clase desaparece segun corresponda*/
	document.getElementById("nav-buttonmenu").addEventListener("click", function(){    
		let ancla = document.getElementsByClassName('nav-enlace');
		for(let i=0; i<ancla.length;i++){
			ancla[i].classList.toggle('desaparece');
		}
	});

	/*el click en la foto de perfil muestra datos adicionales*/
	document.getElementById("foto-Perfil").addEventListener("click", function(){        
    if (document.getElementById('datos-Perfil').style.display =='inline-block'){
			document.getElementById('datos-Perfil').style.display ='none';        
		}else{
			document.getElementById('datos-Perfil').style.display ='inline-block';
    };});


 




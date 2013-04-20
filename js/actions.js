//funcionalidad
$(document).ready(function(e){
	document.addEventListener("deviceready", function(){
		var src="";
		$('#main ul li a').tap(function(){
			src=$(this).attr('rel');
			$('#descargar').attr('title',$(this).text());
		});
		$('#descargar a').tap(function(){
			if($(this).text()=='Descargar'){
				//Descarga de archivos con transaction
			}
			if($(this).text()=='Probar'){
				//Play de media
				// Create Media object from src
				my_media = new Media(src, null, function(){
					alert('Error');
				});
	
				// Play audio
				my_media.play();
			}
		});
	}, false);
});
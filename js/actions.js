//funcionalidad
$(document).ready(function(e){
	document.addEventListener("deviceready", function(){
		var src="";
		var nom="";
		$('#main ul li a').tap(function(){
			src=$(this).attr('rel');
			nom=$(this).text();
			$('#descargar').attr('title',nom);
		});
		$('#descargar a').tap(function(){
			alert(src);
			if($(this).text()=='Descargar'){
				//Descarga de archivos con transaction
				var fileTransfer = new FileTransfer();

				fileTransfer.download(src,'file:///mnt/sdcard/ringtoneApp/'+nom+'.mp3',function(entry){//Verificar que no exista el nombre de la carpeta
					navigator.notification.alert("Archivos Descargado", null, "Completado", "OK");
				},function(error) {
					navigator.notigication.alert("upload error code" + error.code, null, "Error", "Aceptar");
				});
			}
			if($(this).text()=='Probar'){
				//Play de media
				// Create Media object from src
				my_media = new Media(src,null, function(){
					alert('Error');
				});
	
				// Play audio
				my_media.play();
			}
		});
	}, false);
});
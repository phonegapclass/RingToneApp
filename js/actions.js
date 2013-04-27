//funcionalidad
/*$(document).ready(function(e){
	document.addEventListener("deviceready", function(){
		var src="";
		var nom="";
		$('#main ul li a').tap(function(){
			src=$(this).attr('rel');
			nom=$(this).text();
			$('#descargar').attr('title',nom);
		});
		$('#descargar a').tap(function(){
			if($(this).text()=='Descargar'){
				//Descarga de archivos con transaction
				var fileTransfer = new FileTransfer();

				fileTransfer.download(src,'file:///mnt/sdcard/ringtoneApp/'+nom+'.mp3',function(entry){//Verificar que no exista el nombre de la carpeta
					navigator.notification.alert("Archivos Descargado", null, "Completado", "OK");
				},function(error) {
					navigator.notification.alert("upload error code" + error.code, null, "Error", "Aceptar");
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
	$('#descargar a').tap(function(){
		alert('s');
		$.ui.showMask('text');
	});
});*/
$(document).ready(function(e) {
	document.addEventListener("deviceready",function(){
		var src = "";
		var nom="";
		$('#main ul li a').tap(function(){
			src=$(this).attr('rel');
			nom=$(this).text();
			$('#descargar').attr('title',nom);
		});
		var audio = document.getElementById('Reproductor');
		$('#descargar a').tap(function(){
			if($(this).text()=='Descargar'){//Acción de descargar
				window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){
					var ruta = fileSystem.root.fullPath;
				}, null);
				var fileTransfer = new FileTransfer();
				fileTransfer.download(src,ruta+'/ringtoneApp/'+nom+'.mp3',function(entry){//Verificar que no exista el nombre de la carpeta
					navigator.notification.alert("Archivo Descargado", null, "Completado", "OK");
				},function(error) {
					navigator.notification.alert("Código de error " + error.code, null, "Error", "Aceptar");
				});
			}else{//Reproducir Audio
				audio.src = src;
				audio.play();
			}
		});
	}, false);
});


//tinymce.init({selector:'textarea'});

$(document).ready(function(){
 
// EDITOR CKEDITOR  

    
 
    
 ClassicEditor
        .create(document.querySelector('#body'))
        .catch(error=>{
          console.error(error);
        }
                 ); 
  
  
//ALERT PRUEBAS JS

 // alert('HELLOOO MOTHERFUCKERS');
    
    
//SELECT ALL BOXES   
   
$('#selectAllBoxes').click(function(event){
    
    if(this.checked){
        
        $('.checkBoxes').each(function(){
            
            this.checked = true;
            
        });
        
    }else{
        
       $('.checkBoxes').each(function(){
            
            this.checked = false;
            
        });        
        
        
   }   
    
});

    
 // REST OF THE CODE 
    
 
  
    var div_box = "<div id='load-screen'><div id='loading'></div></div>";
    
    $("body").prepend(div_box);
    
    $('#load-screen').delay(500).fadeOut(600, function(){
        $(this).remove();
    });
    
    
 });

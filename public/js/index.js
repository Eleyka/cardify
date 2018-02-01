
$.fn.cardify = function (){
    img =$('#container').find('img');
 
     //para envolver en figure la img
    img.wrap('<figure/>');
    img.after('<figcaption id="alt"/>');
   /*  img.each(function(){
        let alt = img.attr('alt');
        console.log(img);
        
    }); */
    let alt = img.attr('alt');
    let show = img.next().text(alt);
    
   
     //Selección de la etiqueta img y darle un efecto hover de opacidad
     img.hover(function(){
        $(this).css("opacity", "0.5");
        $(this).
       
       
        }, function(){
        $(this).css("opacity", "1");
        
        });
   


};

  
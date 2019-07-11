$(function() {

    $('.block .well').matchHeight();
    
    function closeSection(e){
       e.preventDefault();

       $(this).unbind('click',closeSection);
       $(this).bind('click',openSection);

       $(this).children().children().removeClass('section-open');
       $(this).children().children().addClass('section-close');
    }

    function openSection(e){
       e.preventDefault();

       $(this).unbind('click',openSection);
       $(this).bind('click',closeSection);
       
       $(this).children().children().removeClass('section-close');
       $(this).children().children().addClass('section-open');
    }

    $('section.block').bind('click',openSection);

});
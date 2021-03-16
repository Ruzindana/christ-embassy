
$(document).ready(function(){
    var $locator;
    let $pan=$(document).find('.app');
    let $nav = $(document).find(".header .nav ul>li");
    $($nav).on('click',function(){
     $locator=$(this).attr('data-toggle');
        if($locator !== 'drop' || $locator !== 'undefined'){
            render($locator);
            console.log($locator);
        }
    });
    render('home');
    function render($loc){
        $.ajax({
        url:'./fragments/'+$loc+'.html',
        success:function(data){
        if(data !== ''){
        $pan.html(data);
        }
            
        }
        });
    }






})
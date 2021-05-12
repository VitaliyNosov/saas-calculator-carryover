var CloudFw_jQueried = function( key, element ){
    "use strict";
    if ( typeof element === 'undefined' ) {
        return true;
    }

    if( element.parents('.dont-make-ui').length ) {
        return true;
    }

    if ( jQuery.data(element, key) === true ) {
        return true;
    }

    jQuery.data(element, key, true);
    return false;
};

/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);

/**
 * Sticky Header
 * 
 * @return void
 */
(function(){
    "use strict";

    var cloudfw_sticky_header = function(){
        
        if ( ! CloudFwOp.sticky_header ) {
            return false;
        }

        var header_container = jQuery('#header-container'); 

        if ( ! jQuery.isFunction( jQuery.fn.cloudfw_waypoint ) ) {      
            return true;
        }


        var device = detectDeviceViaPageWidth(); 

        if ( device == 'widescreen' ) {
            if ( header_container.parent().hasClass('sticky-wrapper') ) {
                header_container.cloudfw_waypoint('unsticky');
            }
            header_container.cloudfw_waypoint('sticky', {
                wrapper: '<div class="sticky-wrapper" />',
                stuckClass: 'stuck',
                offset: parseInt(CloudFwOp.sticky_header_offset, 10) || 0
            });
        }

    }

    jQuery(window).load(function(){
        cloudfw_sticky_header();
        jQuery(window).smartresize( cloudfw_sticky_header );
    });
    
})(jQuery);

/**
 * Debouncing function from John Hann
 * 
 * http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
 */
(function($,sr){
  "use strict";

    var debounce = function (func, threshold, execAsap) {
    var timeout;

        return function debounced () {
            var obj = this, args = arguments;
            function delayed () {
                if (!execAsap) {
                    func.apply(obj, args);
                }
                timeout = null;
            }

            if (timeout) {
                clearTimeout(timeout);
            } else if (execAsap) {
                func.apply(obj, args);
            }

            timeout = setTimeout(delayed, threshold || 100);
        };

    };

    // smartresize
    jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');


function cloudFwGetViewportWidth() {
    "use strict";
    var xWidth = null;
    if(window.screen !== null)
        xWidth = window.screen.availWidth;

    if(window.innerWidth !== null)
        xWidth = window.innerWidth;

    if(document.body !== null)
        xWidth = document.body.clientWidth;

    return xWidth;
}

var CloudFwParseAttribute = function( input ){
    "use strict";
    var data = {};

    if ( input ) {
        try {
            if ( typeof input !== 'object' )
                data = jQuery.parseJSON( input );

        } catch (e) {}

        return data;
    }
};


var CloudFwGetColumByClassname = function( elements ){
    "use strict";
    var columns_array = new Array( 1, 2, 3, 4, 6 ),
        classes_array = new Array('span12', 'span6','span4','span3','span2'),
        first_item = elements.first(),
        classes = first_item.attr('class');

    var span = classes.match(/span(\d+)/)[1];
    if ( span )
        span = 'span' + span;

    var position = jQuery.inArray( span, classes_array );

    if ( position !== -1 ) {
        return columns_array[ position ];
    } else {
        return 1;
    }
};


var cloudfw_load_css_file = function( id, filepath ) {
    "use strict";

    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');

    link.id   = id;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = filepath;
    link.media = 'all';
    head.appendChild(link);
};

/**
 * Add Window Loaded Classname to HTML
 * 
 * @return void
 */
(function(){
    "use strict";

    jQuery(window).load(function(){
        jQuery('html').addClass('ui--win-loaded');
    });
})(jQuery);


jQuery("#ArendaservesaUSA").click(function($){ 
    document.addEventListener( 'wpcf7mailsent', function( event ) { 
            gtag('event', 'ArendaservesaUSA', { 'event_category': 'ArendaUSA', 'event_action': 'ServesaUSA' });
            console.log("ArendaservesaUSA");
            window.location.reload();
    });
});

(function(){    


document.addEventListener( 'wpcf7mailsent', function( event ) {  
    if(event.detail.inputs[0].value == "116" || event.detail.inputs[0].value == "65"){
        if(event.detail.id == "wpcf7-f116-p39-o3" || event.detail.id == "wpcf7-f65-p12-o3"){
            gtag('event', 'Arenda1C', { 'event_category': 'Zakazat', 'event_action': 'Arenda' });
            console.log("Arenda1C"); 
        }
        else if(event.detail.id == "wpcf7-f116-p1573-o3" || event.detail.id == "wpcf7-f65-p1575-o3"){
            gtag('event', 'Arendaotraslevoy', { 'event_category': 'Arendaotr', 'event_action': 'Otraslevoyaren' });
            console.log("Arendaotraslevoy"); 
        }
    }
    
    else if(event.detail.inputs[0].value == "4748" || event.detail.inputs[0].value == "4721"){
        gtag('event', 'Testdrayv', { 'event_category': 'Testd', 'event_action': 'Zakazatestd' });
        console.log("4748"); 
    }
    else if(event.detail.inputs[0].value == "118" || event.detail.inputs[0].value == "61" || event.detail.inputs[0].value == "120" || event.detail.inputs[0].value == "63" ){
        gtag('event', 'Office365', { 'event_category': 'Offise', 'event_action': 'Zakazatbiznes' });
        console.log("118"); 
    }
    
    else if(event.detail.inputs[0].value == "59" || event.detail.inputs[0].value == "58"){
        gtag('event', 'Pokupatarendovat', { 'event_category': 'Pokupat', 'event_action': 'Arendovat' });
        console.log("Pokupatarendovat"); 
    }
    else if(event.detail.inputs[0].value == "793"){
        gtag('event', 'Bitrix24z', { 'event_category': 'Bitrixz', 'event_action': 'Bitrixzakaz' });
        console.log("Bitrix24z"); 
    }
    else if(event.detail.inputs[0].value == "34"){
        console.log(event.detail);
        if(event.detail.id == "wpcf7-f34-p651-o1" ){
            gtag('event', 'Bitrix24integr', { 'event_category': 'Bitrixint', 'event_action': 'Bitrixinteg' });
            console.log("Bitrix24integr")
        }
        else if(event.detail.id == "wpcf7-f34-p651-o2" ){
            gtag('event', 'Bitrix24internet', { 'event_category': 'Bitrixmag', 'event_action': 'Bitrixmagazin' });
            console.log("Bitrix24internet")
        }
        else if(event.detail.id == "wpcf7-f34-p651-o3" ){
            gtag('event', 'Bitrix24telephon', { 'event_category': 'Bitrixtel', 'event_action': 'Bitrixtele' });
            console.log("Bitrix24telephon")
        }       
    }   
    else if(event.detail.inputs[0].value == "874"){
        console.log(event.detail);
        if(event.detail.id == "wpcf7-f874-p692-o1" ){
            gtag('event', 'Bitrix24integr', { 'event_category': 'Bitrixint', 'event_action': 'Bitrixinteg' });
            console.log("Bitrix24integr")
        }
        else if(event.detail.id == "wpcf7-f874-p692-o2"){
            gtag('event', 'Bitrix24internet', { 'event_category': 'Bitrixmag', 'event_action': 'Bitrixmagazin' });
            console.log("Bitrix24internet")
        }
        else if(event.detail.id == "wpcf7-f874-p692-o3" ){
            gtag('event', 'Bitrix24telephon', { 'event_category': 'Bitrixtel', 'event_action': 'Bitrixtele' });
            console.log("Bitrix24telephon")
        }       
    }
    else if(event.detail.inputs[0].value == "4935" || event.detail.inputs[0].value == "4940" ){
       gtag('event', 'Zakazatkonsylt', { 'event_category': 'Konsultsp', 'event_action': 'Spetsialistzakaz' });
        console.log("4935"); 
    }
    else if(event.detail.inputs[0].value == "4940" ){
       gtag('event', 'Zakazatkonsylt', { 'event_category': 'Konsultsp', 'event_action': 'Spetsialistzakaz' });
        console.log("4935"); 
    }
    else if(event.detail.inputs[0].value == "4942" ){
       gtag('event', 'Zakazatzvonok', { 'event_category': 'Zvonoks', 'event_action': 'Spetsialistazvon' });
        console.log("4942"); 
    }
    else if(event.detail.inputs[0].value == "4954" ){
       gtag('event', 'Zakazatzvonok', { 'event_category': 'Zvonoks', 'event_action': 'Spetsialistazvon' });
        console.log("4954"); 
    }
    
}, false );



})(jQuery);



jQuery("#Arendaservesa").click(function($){
              document.addEventListener( 'wpcf7mailsent', function( event ) { 
            gtag('event', 'Arendaservesa', { 'event_category': 'Arenda', 'event_action': 'Servesa' });
            console.log("Arendaservesa");
            window.location.reload();
    });
});
jQuery("#ArendaservesaES").click(function($){
    document.addEventListener( 'wpcf7mailsent', function( event ) { 
            gtag('event', 'ArendaservesaES', { 'event_category': 'ArendaES', 'event_action': 'ServesaES' });
            console.log("ArendaservesaES");
            window.location.reload();
    });
});

    if(window.location.search == "?lang=ru"){
		jQuery(".b24-web-form-popup-btn-10 ").text('Заказать звонок специалиста');
		if(jQuery(".modal-title").text('Не знайшли що шукали?')){
		jQuery(".modal-title").text('Не нашли ответ?');
		jQuery(".modal-two-title").text('Остались вопросы ? Мы вам перезвоним и поможем !')
		jQuery(".request-consultation-button-hover-call").text('Звонок бесплатный')
		}
	}else{
jQuery(".b24-web-form-popup-btn-10 ").text('Замовити дзвінок фахівця');
	}
	jQuery(".main-sale").next().addClass("main-sale-post")
	jQuery(".main-sale-post .btn-mini").text('Дізнатися деталі');
	jQuery("#custom-title-h4-1").next().addClass("main-partners-post");
	jQuery("#custom-title-h4-1").next().next().addClass("main-partners-post-mob") 
	jQuery(".footer-emil-btn").css("background","white");
	if(window.location.search == "?lang=ru"){
		jQuery("main-sale-post .btn-mini").text('Узнать детали');
	}


// calculator script


console.log('calculator')


jQuery(function($){

    $(document).ready(function(){
      

        $('#button-click').click(function () {
            $('#content-block').slideToggle(500);
        });
        // $(window).resize(function () {
        //     if ($(window).width() > 500) {
        //         $('#content-block').removeAttr('style');
        //     }
        // });
        
        // Украина	
        
        // block one 
        
        $('.input-server-ukr').click(function () {
            $('.form-price-ukr').slideDown();
        });
        
        // block two
        
        $('.price-ukr').click(function () {
            $('.form-support-system-ukr').slideDown();
        });
        
        
        // block three
        
        $('.suport-system-ukr').click(function () {
            $('.form-software-about-ukr').slideDown();
        });
        
        // block four
        
        $('.software-about-ukr').click(function () {
            $('.total-amount-ukr').slideDown();
        });
        
        
        // выделяем только один чекбокс
        
        $(".group-ukr input").on("click", function() {
        
            if($(".group-ukr input:checked").length >= 1) { // Не больше 2-х checkbox
                
                $(".group-ukr input:not(:checked)").attr("disabled", true);
            
            } else {
                
                $(".group-ukr input:disabled").attr("disabled", false);
            
            }
        
        });
        
        // Украина
        
        
        // Европа
        
        // block one 
        
        $('.input-server-eur').click(function () {
            $('.form-price-eur').slideDown();
        });
        
        // block two
        
        $('.price-eur').click(function () {
            $('.form-support-system-eur').slideDown();
        });
        
        // block three
        
        $('.suport-system-eur').click(function () {
            $('.form-software-about-eur').slideDown();
        });
        
        // block four
        
        $('.software-about-eur').click(function () {
            $('.total-amount-eur').slideDown();
        });
        
        // выделяем только один чекбокс group-eur
        
        $(".group-eur input").on("click", function() {
        
            if($(".group-eur input:checked").length >= 1) { // Не больше 2-х checkbox
                
                $(".group-eur input:not(:checked)").attr("disabled", true);
            
            } else {
                
                $(".group-eur input:disabled").attr("disabled", false);
            
            }
        
        });
        
        // выделяем только один чекбокс group-ukr
        
        $(".group-ukr input").on("click", function() {
        
            if($(".group-ukr input:checked").length >= 1) { // Не больше 2-х checkbox
                
                $(".group-ukr input:not(:checked)").attr("disabled", true);
            
            } else {
                
                $(".group-ukr input:disabled").attr("disabled", false);
            
            }
        
        });
        
        // выделяем только один чекбокс system-block 1
        
        $("#system-ukr-block input").on("click", function() {
        
            if($("#system-ukr-block input:checked").length >= 1) { // Не больше 2-х checkbox
                
                $("#system-ukr-block input:not(:checked)").attr("disabled", true);
            
            } else {
                
                $("#system-ukr-block input:disabled").attr("disabled", false);
            
            }
        
        });
        
        // выделяем только один чекбокс system-block 2
        
        $("#system-eur-block input").on("click", function() {
        
            if($("#system-eur-block input:checked").length >= 1) { // Не больше 2-х checkbox
                
                $("#system-eur-block input:not(:checked)").attr("disabled", true);
            
            } else {
                
                $("#system-eur-block input:disabled").attr("disabled", false);
            
            }
        
        });
        
        // Европа
        
        
        // выпадающий список показывать скрывать разные сервера
        
        $(function() {
            $('#servers-select').change(function(){
                $('.servers-wrapper').hide();
                $('#' + $(this).val()).show();
            });
        });



// Логика калькулятора


// Украина:
	
	// Значения radio кнопок
	
	$('.radio-block input').on('click', function() {
		// $('#outputUkrOne').text('Cервер: ' + $('.radio-block input:checked').val());
		$('#outputUkrOne').val( $('.radio-block input:checked').val());
		
	});
	
	// Значения первого ряда checkbox
	
	$('.system-block-content input').on('click', function() {
		// $('#outputUkrTwo').text('Операционная система: ' + $('.system-block-content input:checked').val() );
		$('#outputUkrTwo').val( $('.system-block-content input:checked').val() );
	});
	
	// Значения третего ряда checkbox
	
	$('.group-ukr-content input').on('click', function() {
		// $('#outputUkrThree').text('Лицензия: ' + $('.group-ukr-content input:checked').val() );
		$('#outputUkrThree').val( $('.group-ukr-content input:checked').val() );
	});
	
	
		// Переменные с нуливыми значениями	
		
		var ukr=0, ukrInput=0, check1=0, skidka=0;	
		
		// Обработка поля с radio input 
	
		
		$("input[name='ukr']").change(function() {
			if ($("input[name='ukr']").prop("checked")) {
				ukr = $(this).data('check');
			} else {
				ukr = $(this).data('check');
			}
			summ1();
		});
			
		// Обработка полей с checkbox input 
		
		$('.ukr-check').on('change', function(){
			check1 = 0;
			$('input:checkbox:checked').each(function(){
				if($(this).prop("checked")){
                check1 = Number(check1) + Number( $(this).data('check') );
				}
			});
			summ1();
		});
		
		
		// Обработка и вывод суммы
	
		
		function summ1(){
			ukr = Number(ukr);
			ukrInput = Number(check1);
            $("#summ1").val( (ukr+ukrInput).toFixed(10) - (skidka / 100 * (ukr+ukrInput)) + ' Euro' );
		};
		summ1();
	
	
// Европа:
	
	
	// Значения radio кнопок
	
	$('.radio input').on('click', function() {
		// $('#outputEuroOne').text('Сервер: ' + $('.radio input:checked').val());
		$('#outputEuroOne').val( $('.radio input:checked').val());
		
	
	});
	
	// Значения первого ряда checkbox
	
	$('.system-block-content-two input').on('click', function() {
		// $('#outputEuroTwo').text('Операционная система: ' + $('.system-block-content input:checked').val() );
		$('#outputEuroTwo').val( $('.system-block-content-two input:checked').val() );
	});
	
	// Значения третего ряда checkbox
	
	$('.group-eur-content input').on('click', function() {
		// $('#outputEuroThree').text('Лицензия: ' + $('.group-eur-content input:checked').val() );
		$('#outputEuroThree').val( $('.group-eur-content input:checked').val() );
	});
	
	
		// Переменные с нуливыми значениями	
		
		var euro=0, euroInput=0, check2=0, skidka=0;	
		
		// Обработка поля с radio input 
		
		$("input[name='euro']").change(function() {
			if ($("input[name='euro']").prop("checked")) {
				euro = $(this).data('check');
			} else {
				euro = $(this).data('check');
			}
			summ2();
		});
			
		// Обработка полей с checkbox input 
		
		$('.euro-check').on('change', function(){
			check2 = 0;
			$('input:checkbox:checked').each(function(){
				if($(this).prop("checked")){
                check2 = Number(check2) + Number( $(this).data('check') );
				}
			});
			summ2();
		});
		
		
		// Обработка и вывод суммы
	
		
	
		
		function summ2(){
			euro = Number(euro);
			euroInput = Number(check2);
            $("#summ2").val( (euro+euroInput).toFixed(10) - (skidka / 100 * (euro+euroInput).toFixed(10)) + ' Euro' );
		};
		summ2();


// Логика калькулятора
    
    });

});







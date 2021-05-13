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

// 123


// Украина:
	
	// Значения radio кнопок
	
	$('.radio-block input').on('click', function() {
		// $('#outputUkrOne').text('Cервер: ' + $('.radio-block input:checked').val());
		$('#outputUkrOne').val( $('.radio-block input:checked').val());
		
	});
	
	// Значения первого ряда checkbox
	
	$('.system-block-content input').on('click', function() {
		// $('#outputUkrTwo').text('Операционная система: ' + $('.system-block-content input:checked').val() );
		$('#outputUkrTwo').val( $('.system-block-content input:checked').val());
	});
	
	// Значения третего ряда checkbox
	
	$('.group-ukr-content input').on('click', function() {
		// $('#outputUkrThree').text('Лицензия: ' + $('.group-ukr-content input:checked').val() );
		$('#outputUkrThree').val( $('.group-ukr-content input:checked').val());
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
			summOne();
		});
			
		// Обработка полей с checkbox input 
		
		$('.ukr-check').on('change', function(){
			check1 = 0;
			$('.ukr-check').each(function(){
				if($(this).prop("checked")){
                check1 = Number(check1) + Number( $(this).data('check') );
				}
			});
			summOne();
		});
		
        // input:checkbox:checked
		
		// Обработка и вывод суммы
	
		
		function summOne(){
            skidka = Number(skidka);
			ukr = Number(ukr);
			ukrInput = Number(check1);
            $("#summ1").val( (ukr+ukrInput).toFixed(10) - (skidka / 100 * (ukr+ukrInput) ) + ' Euro' );
		};
		summOne();



// Европа:
	
	
	// Значения radio кнопок
	
	$('.radio input').on('click', function() {
		// $('#outputEuroOne').text('Сервер: ' + $('.radio input:checked').val());
		$('#outputEuroOne').val( $('.radio input:checked').val());
		
	
	});
	
	// Значения первого ряда checkbox
	
	$('.system-block-content-two input').on('click', function() {
		// $('#outputEuroTwo').text('Операционная система: ' + $('.system-block-content input:checked').val() );
		$('#outputEuroTwo').val( $('.system-block-content-two input:checked').val());
	});
	
	// Значения третего ряда checkbox
	
	$('.group-eur-content input').on('click', function() {
		// $('#outputEuroThree').text('Лицензия: ' + $('.group-eur-content input:checked').val() );
		$('#outputEuroThree').val( $('.group-eur-content input:checked').val());
	});
	
	
		// Переменные с нуливыми значениями	
		
		var euro=0, euroInput=0, check2=0, skid=0;	
		
		// Обработка поля с radio input 
		
		$("input[name='euro']").change(function() {
			if ($("input[name='euro']").prop("checked")) {
				euro = $(this).data('check');
			} else {
				euro = $(this).data('check');
			}
			summTwo();
		});
			
		// Обработка полей с checkbox input 
		
		$('.euro-check').on('change', function(){
			check2 = 0;
			$('.euro-check').each(function(){
				if($(this).prop("checked")){
                check2 = Number(check2) + Number( $(this).data('check') );
				}
			});
			summTwo();
		});
		
        // input:checkbox:checked
		
		// Обработка и вывод суммы
	
		
		
		function summTwo(){
            skid = Number(skid);
			euro = Number(euro);
			euroInput = Number(check2);
            $("#summ2").val( (euro+euroInput).toFixed(10) - (skid / 100 * (euro+euroInput) ) + ' Euro' );
		};
		summTwo();
	
	



// Логика калькулятора
    
    });


});






(function($){
	$.fn.image360 = function(options) {
		
		// настройки
		var settings = $.extend( {
			'count_loop': 10, // количество оборотов на ширину блока
		}, options);
		
		var $main_div = this, // блок с картинками
			div_width, // ширирна блока
			count_imgs = 0, // количество картинок
			start_drag = false, // старт анимации
			position_X = 0, // положение курсора над картикой
			index_img = 0, // индекс отображаемой картинки
			last_perc = 0, // предыдущее положение курсора относительно блока в процентах
			direction = true; // напавление движения мыши true - влево, false -  вправо
						
		var methods = {
			
			init: function(settings) { 	
				// ширина блока
				div_width = $main_div.width();
				// подготовка картинок
				$main_div.find("img").each(function(num){
					if(num != 0){
						$(this).hide();
					}
				});
				count_imgs = $main_div.find("img").length;
			},
			
			move_imgs: function(positionX){
				if(positionX < 0 ) positionX = 0;
				if(positionX > div_width) positionX = div_width;
				var percent_div = (positionX / div_width) * 100;
				var percent_img = 100 / (settings.count_loop * count_imgs); 	
				if( Math.abs(percent_div - last_perc) > percent_img){
					last_perc = percent_div;	
					if(direction){
						index_img--;
					}else{
						index_img++;
					}
					if(index_img < 0) index_img = (count_imgs - 1);
					if(index_img > (count_imgs - 1)) index_img = 0;
					$main_div.find("img").hide();
					$main_div.find("img").eq(index_img).show();
				}			
			},
			
			resize: function(){
				div_width = $main_div.width();
			},
			
		};
		
		$main_div.bind('mousedown touchstart touchmove touchend mousemove click', function (e) {				
			e.preventDefault();
			if(e.type === 'mousedown' || e.type === 'touchstart'){
				// клик или тач
				// старт
				start_drag = true;
				position_X = e.pageX;
				
			}else if(e.type === 'touchmove'){
				// движение тач
				if(start_drag){
					var touch = e.originalEvent.touches[0];
					// движение влево
					if(position_X > touch.pageX){
						direction = true;
					}
					// движение вправо
					if(position_X < touch.pageX){
						direction = false;
					}
					position_X = touch.pageX;
					var offset_div = $main_div.offset();
					var positionX = (touch.pageX - offset_div.left);
					// анимация
					methods.move_imgs(positionX);					
				}
			} else if (e.type === 'touchend') {
				// отпустили тач
				start_drag = false;
			}
		});
		
		// движение мышки
		$main_div.bind('mousemove', function (e) {
			e.preventDefault();
			if(start_drag){				
				// движение влево
				if(position_X > e.pageX){
					direction = true;
				}
				// движение вправо
				if(position_X < e.pageX){
					direction = false;
				}
				position_X = e.pageX;
				var offset_div = $main_div.offset();
				var positionX = (e.pageX - offset_div.left);
				// анимация
				methods.move_imgs(positionX);					
			}
		});
		
		// остановка, если отпустили конпку мышки
		$(document).bind('mouseup', function (e) {
			start_drag = false;
		});	
		
		$(window).resize(function() {
			methods.resize();
		});
			
		methods.init(settings);
	};
})( jQuery );
;(function($){

	$.fn.extend({

		'wapButton':function(color){
			this.css({'position':'relative','display':'inline-block','cursor':'pointer',});
			for (var i = 1; i < 5; i++) {
				$("<span class='line line"+ i +"'>").css({
					'position':'absolute',
					'backgroundColor':color,
					'transition':'all 1s ease-out 0s',
				}).appendTo(this);
			};
			this.find('span.line1').css({'left':0,'top':0,'height':10});
			this.find('span.line2').css({'right':0,'top':0,'width':10});
			this.find('span.line3').css({'bottom':0,'right':0,'height':10});
			this.find('span.line4').css({'left':0,'bottom':0,'width':10});

			this.hover(function(){
				console.log(this);
				$(this).find("span.line").each(function(e,v){
					// console.log(e);
					console.log($(v).width());
					console.log('****************')
					if($(v).width() == 0){
						$(v).width('100%');
						console.log($(v).width());
					}
					else{
						$(v).height('100%');
					}
				})
			},function(){
				$(this).find("span.line").each(function(e,v){
					console.log($(v).width()/$(v).parent().width());
					if($(v).width()/$(v).parent().width() == 1){
						$(v).width('0');
					}else{
						$(v).height('0');
					}
				});
			})
			return this;
		},


	});


})(jQuery);
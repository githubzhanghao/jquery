;(function($){
	// console.log($('.nav').parent().get()[0]);
	//全局
	// $.extend({
	// 	'nav':function(){
	// 		$('.nav').parent().hover(function(){
	// 			$(this).find('.nav').stop().slideDown('normal');
	// 		},function(){
	// 			$(this).find('.nav').stop().slideUp('normal');
	// 		})
	// 	}
	// })
	
	//局部性的定义:全局的问题 在于调用一次之后对所有的.nav都有效
	$.fn.extend({
		'nav':function(color){
			this.find('.nav').css({
				'list-style':'none',
				'margin':0,
				'padding':0,
				'display':'none',
				'background-color':'#444'
				/*
				.nav>li{
					text-align:center;
					line-height: 30px;
					height: 30px;
					background-color: #111;
				}
				.nav>li:hover{
					color:orange;
					background-color: #222;
				}
				*/
			}).find('li').hover(function(){
				// console.log(this);
				$(this).css({'color':color});
			},function(){
				$(this).css({'color':'#fff'});
			});
			// $(this).find('.nav li');
			this.find('.nav').parent().hover(function(){
				$(this).find('.nav').stop().slideDown('normal');
			},function(){
				$(this).find('.nav').stop().slideUp('normal');
			});
			return this;//完成jquery的链式操作，所以返回原对象。
		},
	})
	
})(jQuery);
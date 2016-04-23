;//下拉菜单
//divStyle 父盒子样式
//items 下拉选项
//itemStyle 选项样式
//itemHoverStyle 选项悬浮样式

//

(function($){
	$.fn.extend({
		'slideInput':function(items,divStyle,itemStyle,itemHoverStyle){
			if(!items){
				alert('请赋值选项后重新使用此插件');
			}
			var span = $('<span>');//show text
			var downImg = $('<i>');
			var ul = $('<ul>');
			
			for(var i = 0;i<items.length;i++){
				var li = $('<li>');
				ul.append(li.text(items[i]));
			}
			
			var lis = ul.find('li');
			
			//默认选中第一个
			var itemsOne =(items[0])?(items[0]):'';
			span.text(itemsOne);
			
			
			
			//已选中的默认加背景
//			function itemActive(itemArr){
//				itemArr.each(function(index,el){
//					if($(el).text() == span.text()){
//						$(el).css({
//							'background-color': '#08BBF2',
//							'color':'#fff',
//						})
//					}else{
//						$(el).css({
//							'background-color':'#fff',
//							'color':'#000',
//						})
//					}
//				})
//			}
//			itemActive(lis);
			this.css({
				'position':'relative',
				'width':'80px',
				'height':'30px',
				'border':'1px solid #ccc',
				'border-radius':'4px',
				'line-height':divStyle?(divStyle.height+'px'):'30px',
			}).css(divStyle);
			downImg.css({
				'position':'absolute',
				'width':'40%',
				'height':'30px',
				'background': 'url(img/trunDown.png) no-repeat center center',
				'right':'0px',
				'top':'0px',
				'border-top-right-radius':'4px',
				'border-bottom-right-radius':'4px',
				'cursor': 'pointer',
				'background-color': '#ccc',
			}).on('click',function(){
				ul.stop().slideToggle(200);
			});
			span.css({
				'float': 'left',
				'width':'60%',
				'height':'100%',
				'line-height': '30px',
				'text-align': 'center',
				'color':'#08BBF2',
			});
			ul.css({
				'display':'none',
				'width':'100px',
				'position': 'absolute',
				'left':'-1px',
				'top':'31px',
				'border': '1px solid #ccc',
				'border-top':'none',
				'border-radius':'2px',
				'z-index':2000,
			});
			lis.css({
				'cursor': 'pointer',
				'text-align': 'center',
				'height':'30px',
				'line-height': '30px',
			}).css(itemStyle?itemStyle:{}).hover(function(){
				$(this).css({
					'background-color': '#08BBF2',
					'color':'#fff',
				}).css(itemHoverStyle?itemHoverStyle:{});
			},function(){
				$(this).css({
					'background-color':'#fff',
					'color':'#000',
				})
			});
			var that = this;
			lis.on('click',function(e){
				span.text($(e.target).text());
				ul.stop().slideUp(200);
				
//				$(this).css({
//					'background-color': '#08BBF2',
//					'color':'#fff',
//				}).siblings().css({
//					'background-color':'#fff',
//					'color':'#000',
//				});
				that.attr('value',span.text());
			});
			this.attr('value',span.text());
			this.value = function(){
				return this.attr('value');
			}
			this.append(span).append(downImg).append(ul);
			return this;
		}
	})
})(jQuery);














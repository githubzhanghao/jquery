;
//jquery 插件:confirm 弹出框
/*
 *【 结构】 
 * data-confirm='main' 主容器 ,其他在调用插件的时候自己生成
 * 讲弹出框body部分写在[data-confirm='main']节点中，样式自定义；注意：content默认有padding
 * 【使用说明】:
 * $('selector').confirm(width,height,titleText,buttonText);
参数1，弹出框的宽度
参数2，弹出框的高度
参数3，标题宽度
参数4，弹出框标题文本
参数5，弹出框底部的按钮文本
hasCloseImg 设置右上角是否有关闭图片

【事件】：
 * 	data-confirm = '[open/false]' //带有这个属性的可以关闭/打开弹窗
*/


(function($){
	
	$.fn.extend({
		'confirm':function(_width,_height,titleWidth,titleText,btnText,ajaxFn){
			var content_html =  this.html();//获取content的值
			if(content_html){
				this.empty();//拿到值后，清空，开始添加其他元素
			}
			// console.log($(window).height());
			// console.log($(window).width());
//			console.log(content_html);
			//避免遮盖层边出现缝隙
			$('html,body').height('100%').css({'margin':0,'padding':0});
			var div = $('<div>');
			this.width(_width?_width:600);//设置默认值
			this.height(_height?_height:350).css({//设置默认值
				'background-color': '#fff',
				'position':'fixed',
				'margin-left':'50%',
				'left':-$(this).width()/2,
				'top':($(window).height()-this.height())/2,
				'z-index': 1002,
				'border-radius':'30px',
				'display': 'none',
			});
			//右上角关闭图标
			this.append(div.clone().attr('data-confirm','close').css({
				'background':'url(/Teacherimages/login_close.png) no-repeat center 10px',
				'width':'28px',
				'height': '48px',
				'position':'absolute',
				'right':'20px',
				'top':'-48px',
				'cursor':'pointer',
				'z-index':'1001',
			}));
			
			//加入遮盖层
			var cover = div.clone().width('100%').height('100%').css({
				'position': 'fixed',
				'left':0,
				'top':0,
				'background-color': 'black',
				'width':'100%',
				'height':'100%',
				'opacity': '.5',
				'z-index':'1000',
				'display': 'none',
			}).attr('data-confirm','cover').appendTo($("body"));
//			this.before(cover);
			//加入标题及标题文本

			this.append(div.clone().html(titleText ? titleText:'titleText').css({
				'position': 'absolute',
				'left':'0px',
				'top':'30px',
				'width':titleWidth?titleWidth:'170',
				'line-height': '40px',
				'height':'40px',
				'background-color': '#0fa6ee',
				'color':'#fff',
				'border-bottom-right-radius':'20px',
				'border-top-right-radius':'20px',
				'padding-left':'30px',
			})).addClass('titleStyle');
			//初始化提交按钮
			var closeBtn = $("<a href='javascript:;' class='closeConfirm'>").attr('data-confirm','submit'+this.attr('data-confirm-ajaxFn')).html(btnText ? btnText:'buttonText').css({
				'cursor':'pointer',
				'position': 'absolute',
				'outline':'none',
				'border':'none',
				'border-radius':'15px',
				'margin-left': '-50px',
				'left':'50%',
				'bottom':'20px',
				'width':'100px',
				'line-height': '30px',
				'height':'30px',
				'color':'#fff',
				'background-color': '#0fa6ee',
				'text-align':'center',
				'text-decoration':'none',
			});
			//初始化内容部分
			var confirm_content =  div.clone().height(_height-120).css({
				'margin':'0 auto',
				'margin-top':'80px',
				'width':'80%',
				//'padding':'8px',
				'overflow-y':'auto',
			}).append(div.clone().css({
				'background-color': 'lightskyblue',
			})).html(content_html).append(closeBtn);
			//添加进main里面
			this.append(confirm_content);

			var that = this;

			// var ajaxFn ;

			$('body').on('click', '*[data-confirm="close"]', function () {
			    that.hide();
			    cover.hide();
			    $(document).off();
			});
			// console.log(this.attr('data-confirm-ajaxFn'));
			console.log(this.attr('data-confirm-ajaxFn'));
			var thisParent_confirmValue = $(this).parent().parent().attr('data-confirm');
			$('body').on('click','[data-confirm="submit' + this.attr('data-confirm-ajaxFn')+ '"]',function(e){
				// console.log(this);
				// eval(ajaxFn);
				if(ajaxFn){
					ajaxFn()
				}
				else{
					that.hide();
					cover.hide();
				}
				// console.log(ajaxFn);
				// $(document).ajaxSuccess(function(){
				// 	that.hide();
				// 	cover.hide();
				$(document).off();
				// // })
			});
			$('body').on('click','*[data-confirm="open"][data-confirm-target=' +$(this).attr('data-confirm')+']',function(){

				that = $('[data-confirm="'+$(this).attr('data-confirm-target')+'"]');
				var scrollT = $(document).scrollTop();
				$(document).on('scroll',function(){
					$(document).scrollTop(scrollT);
				})

				that.show();
				cover.show();
			});
			return this;
		}
	});
})(jQuery);

;(function($){
	//--------------放大镜--------------------
	function brows(){
			var oBox=$(".detail").find(".middel_left .magnifying .magin_box1");
			var oBox2=$(".detail").find(".middel_left .magnifying .magin_box2");
			var oSpan=$(".detail").find(".middel_left .magnifying .magin_box1 span");
		//移入时放大镜事件
		oBox.mousemove(function(ev){
			oSpan=$(".detail").find(".middel_left .magnifying .magin_box1 span");
			//显示
			oSpan.show();
			oBox2.show();
			var l=ev.pageX-$(this).offset().left-oSpan.width()/2;
			var t=ev.pageY-$(this).offset().top-oSpan.height()/2;
			if(l<0){
				l=0;
			}
			if(t<0){
				t=0;
			}
			var max_w=$(oBox).width()-oSpan.width();
			var max_h=$(oBox).height()-oSpan.height();
			if(l>max_w){
				l=max_w;
			}
			if(t>max_h){
				t=max_h;
			}
//			
			$(oSpan).css({"left":l,"top":t})
			oBox2.find("img").css({"left":-l*3,"top":-t*3})
		});
		//移出时隐藏
		oBox.mouseleave(function(){
			oSpan.hide();
			oBox2.hide();
		})
	};
	brows();
	//-----点击切换图片--------------------------------------------------------------
	
	function picTab(){
		//找到对象；
		var oBox=$(".detail").find(".middel_left .magnifying .magin_box1");
		var oBox2=$(".detail").find(".middel_left .magnifying .magin_box2")
		var oMovein=$(".detail").find(".middel_left .magni_list .qian");
		var oMoveout=$(".detail").find(".middel_left .magni_list .hou");
		var aMinpic=$(".detail").find(".middel_left .magni_list .minpic");
		var n=1;//初始显示图片索引；
		//封装改变函数；
		function change(index){
			aMinpic.eq(index-1).css({"borderColor":"red"}).siblings().css({"borderColor":"transparent"})
			oBox.html(aMinpic.eq(index-1).html()+"<span></span>")
			oBox2.html(aMinpic.eq(index-1).html())	
		};
		
		//点击事件组；
		aMinpic.on("click",function(){//点击事件切换图片；			
			n=$(this).index()	;
			change(n);
		});
		
		oMovein.on("click",function(){	
			n--;
			if(n<=1){
				n=1;
			};
			change(n);
		});
		
		oMoveout.on("click",function(){	
			n++;
			if(n>=5){
				n=5;
			};
			console.log(n);
			change(n);
		});
	};
	//调用；
	picTab();
//-----单选框-----------------------------------------------------------		
	function listChange(){
		var arr=["￥118","￥112","￥100","￥99","￥55",'￥44',"￥33","￥25","￥22","￥11"];
		var listchange=$(".detail").find(".middel_mid .selects .option");
		var listPrice=$(".detail").find(".middel .middel_mid .text1 .em");
		$(listchange).on("click",function(){
			$(this).addClass("ac").siblings().removeClass("ac");
			$(listPrice).text(arr[$(this).index()]);//改变价格
		})
	};
	listChange();
//---------------点击增减数量和购物车	
	//给数字绑定事件，加减购买数量；
	//加事件
	function numberChange(){
		var oJia=$(".detail").find('.middel_mid .number #jia');
		var oText = $(".detail").find ('.middel_mid .number #text_text');
		
			oJia.on("click",function(ev){
				console.log(11);
				oText.val(parseInt(oText.val())+1);
				ev.stopPropagation();
			})
			//减事件
		var oJian=$(".detail").find ('.middel_mid .number #jian');	
			oJian.on("click",function(ev){
				if(parseInt(oText.val())-1<=0){
					oText.val(1);
				}else{
					oText.val(parseInt(oText.val())-1);		 	  
				}
					ev.stopPropagation();
			});	
			//点击购物车
			var buy=$(".detail").find('.middel_mid .button')
			buy.on("click",function(){
				alert("购买成功");
			})
	};
	numberChange();
//-------------详情页切换选项卡----------------------------
	function memberChange(){
		var oLi=$(".detail").find(".bottom .nav ul li");
		var aList=$(".detail").find(".bottom .list_pic");
		oLi.on("click",function(){
			console.log($(this).index())
			console.log(aList.eq(0));
			$(this).addClass("ac").siblings().removeClass("ac");
			aList.eq($(this).index()).removeClass("hide");
			aList.eq($(this).index()).siblings().addClass("hide");
		});
	};
	memberChange();
//-----回到顶部----------------------------------------------------------------------------	
	function toTop(){
		$(".returntop").find("ul li .up1").click(function(){
			$('body,html').animate({"scrollTop":0},1000);
		});
	};
	toTop();
	//----------导航二级菜单--------------------------
	function twoList(){
		$(".top").find(".t_inner .up ul .hasSub").hover(function(){
			$(this).find("a").addClass("active");
			$(this).children("ul").show();
		},function(){
			$(this).find("a").removeClass("active");
			$(this).children("ul").hide();
		})
	};
	twoList();
	
	
	
	
	
	
})(jQuery);

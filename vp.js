$(function(){

				var vp_player=100,
				ses=0.5,
				vpvideo=document.getElementById("vp_video"),
				 sure=vpvideo.currentTime,
				 set;
				
			vpvideo.volume=ses;
				
			$(".vp_cubuk").slider({min:0,max:560,value:0,step:0.1,animate:true,range:"min",
				change: function() {
					if (vpvideo.paused){
							vpvideo.currentTime=$(this).slider("value");
					}
				},
				slide: function(){
						vpvideo.currentTime=$(this).slider("value");
				}
			});
			
			
			$("#vp_genis").click(function(){
				$(this).hide();
				$("#vp_kucuk").show(); tc();
				$(".vp_ana").css({"width":"850px","height":"500px" })
				$(".vp_kontrol").css({"width":"850px"})
				$(".vp_cubuk").css({"width":"850px"})
				$("#vp_video").css({"width":"850px","height":"485px" })
			});
			
			$("#vp_kucuk").click(function(){
				$(this).hide();
				$("#vp_genis").show(); tc();
				$(".vp_ana").css({"width":"560px","height":"360px" })
				$(".vp_kontrol").css({"width":"560px"})
				$(".vp_cubuk").css({"width":"560px"})
				$("#vp_video").css({"width":"560px","height":"315px" })
			});
			
			$("#vp_tamekran").click(function(){
				$(this).hide();$("#vp_tamekran2").show();
				var vu=($(window).width()-$(".vp_kontrol").width())/2;
				if (vpvideo.requestFullscreen) {
					vpvideo.requestFullscreen();$(".vp_kontrol").css("left",vu+"px")
				} else if (vpvideo.msRequestFullscreen) {
					vpvideo.msRequestFullscreen();$(".vp_kontrol").css("left",vu+"px")
				} else if (vpvideo.mozRequestFullScreen) {
					vpvideo.mozRequestFullScreen();$(".vp_kontrol").css("left",vu+"px")
				} else if (vpvideo.webkitRequestFullscreen) {
					 vpvideo.webkitRequestFullscreen();$(".vp_kontrol").css("left",vu+"px")
				}
			});
			
			$("#vp_tamekran2").click(function(){
				$(this).hide();$("#vp_tamekran").show();
				tc();
			});
			
			$(window).keyup(function(e){
				if(e.which==27){
					$(".vp_kontrol").css("left","0px")
				}
			})
			
			$(".vp_sescubuk").slider({min:0,max:1,value:0.5,step:0.01,animate:true,range:"min",
				change: function() {
					ses=$(this).slider("value");
					vpvideo.volume=ses;
					if(ses==0){
						$("#vp_ses").css("background-position","-20px -33px");
					}else{
						$("#vp_ses").css("background-position","-20px -5px");
					}
				}
			});
			
			$("#vp_ses").click(function(){
				if(ses>0){
					$(".vp_sescubuk").slider({value:0}); ses=0;
					$("#vp_ses").css("background-position","-20px -33px");
				}else{
					$(".vp_sescubuk").slider({value:0.5}); ses=0.5;
					$("#vp_ses").css("background-position","-20px -5px");
				}
			})
			
			$("#vp_tekrar").click(function(){
				vpvideo.pause(); 
				$( ".vp_cubuk" ).slider({ value:0 });
				vpvideo.currentTime=0;
				vpvideo.play(); 
			})
			
			$("#vp_oynat").click(function(){
						vpvideo.play(); 
						$(this).hide();
						$("#vp_dur").show();
						var tsure=vpvideo.duration;
						$( ".vp_cubuk" ).slider({ max:tsure });
							set=setInterval(function(){
							sure=vpvideo.currentTime;
							$( ".vp_cubuk" ).slider({ value:sure });
								if(tsure==sure){
									vpvideo.pause(); 
									$("#vp_dur").hide();
									$("#vp_oynat").show();
									clearInterval(set);
								}
							},200);
			});
			
			$("#vp_dur").click(function(){
						vpvideo.pause(); 
						$("#vp_oynat").show();
						$(this).hide();
						clearInterval(set)
			});
			
			function tc(){
				$(".vp_kontrol").css("left","0px")
				if (document.exitFullscreen) {
					document.exitFullscreen();
				} else if (document.msExitFullscreen) {
					document.msExitFullscreen();
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if (document.webkitExitFullscreen) {
					document.webkitExitFullscreen();
				}
			}
			
});
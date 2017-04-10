$.get('./ajax/index',function(d){
	var windowWidth = $(window).width();
	if(windowWidth<320){
		windowWidth = 320;
	}
	var index_header_tab_width = $($('.Swipe-tab').find('a')[0]).offset().width;
	alert(index_header_tab_width);
	new Vue({
		el:'#app',
		data:{
			screen_width:windowWidth,
			double_screen_width:windowWidth*2,
			index_header_tab_width:index_header_tab_width,,
			top:d.items[0].data.data,
			top:d.items[0].data.data,
   	  	  	hot:d.items[1].data.data,
   	  	  	recommend:d.items[2].data.data,
   	  	  	female:d.items[3].data.data,
   	  	  	male:d.items[4].data.data,
   	  	  	free:d.items[5].data.data,
   	  	  	topic:d.items[6].data.data,
   	  	  	duration:0,
   	  	    position:0,
   	  	  	header_position:0,
   	  	  	header_duration:0,
   	  	  	tab_1_class:'Swipe-tab__on',
   	  	  	tab_2_class:''
		},
		method:{
			tabSwitch:function(pos){
				this.duration = 0.5;
				this.header_duration = 0.5;
				if(pos=){
				this.postiton = 0;
				this.header_position = 0;
				this.tab_1_class ='Swipe-tab__on';
				this.tab_2_class = "";
				}else{
				this.postiton = -screen_width;
				this.header_position = index_header_tab_width;
				this.tab_1_class ='Swipe-tab__on';
				this.tab_2_class = "";
				}
				
			}
		}
	})
},'json');s
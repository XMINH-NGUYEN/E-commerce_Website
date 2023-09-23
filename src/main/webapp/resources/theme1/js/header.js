const $$ = document.querySelectorAll.bind(document);

//Save the position of banner images 
let bannerPosition = new Array($(".header_banner .banner_item").length);

//Arrange the position of banner images according to the displayed image
function bannerArrange() {
	let a = $(".header_banner .banner_item");
	let b = window.innerWidth < 280 ? 280 : window.innerWidth;
	let c = $(".header_banner .controller_item");
	for (i = 0; i < a.length; i++) {
		$(a[i]).css({"visibility":"hidden"});
		$(a[i]).addClass("banner_drag");
		if ($(c[i]).hasClass("controller_active")) {
			for (j = 0; j < a.length; j++) {
				bannerPosition[j] = (j - i) * b;
			}
			$(a[i]).css({"visibility":"visible"});
		}
	}
	for (i = 0; i < a.length; i++) {
		$(a[i]).css({"transform":"translateX(" + bannerPosition[i] + "px)"});
	}
}
//Create motion for the banner
function bannerMoving() {
	let a = $(".header_banner .controller_item");
	let b = $(".header_banner .banner_item");
	for (i = 0; i < a.length; i++) {
		if ($(a[i]).hasClass("controller_active")) {
			let x = 0 - bannerPosition[i];
			for (j = 0; j < a.length; j++) {
				bannerPosition[j] += x;
				$(b[j]).removeClass("banner_drag");
				$(b[j]).css({"transform": "translateX(" + bannerPosition[j] + "px)", "visibility":"visible"});	
			}
			break;	
		}
	}
}

//Drag banner
function bannerDrag(x,y) {
	let a = $(".header_banner .banner_item");
	let b = $(".header_banner .controller_item");
	if (a.length == 1) return;
	if ($(b[0]).hasClass("controller_active")) {
		if (x > 0 && (y == 0 || y == -1)) {
			y[0] = 1;
			bannerPosition[a.length-1] = -bannerPosition[1];
			$(a[a.length-1]).css({"transform": "translateX(" + bannerPosition[a.length-1]  + "px)"});
		} else if (x < 0 && (y == 0 || y == 1)) {
			y[0] = -1;
			bannerPosition[1] = bannerPosition[1] > 0 ? bannerPosition[1] : -bannerPosition[1];
			$(a[1]).css({"transform": "translateX(" + bannerPosition[1] + "px)"});
		}
	} 
	if ($(b[a.length-1]).hasClass("controller_active")) {
		if (x < 0 && (y == 0 || y == 1)) {
			y[0] = -1;
			bannerPosition[0] = -bannerPosition[a.length-2]
			$(a[0]).css({"transform": "translateX(" + bannerPosition[0] + "px)"});
		} else if (x > 0 && (y == 0 || y == -1)) {
			y[0] = 1;
			bannerPosition[a.length-2] = bannerPosition[a.length-2] < 0 ? bannerPosition[a.length-2] : -bannerPosition[a.length-2];
			$(a[a.length-2]).css({"transform": "translateX(" + bannerPosition[a.length-2] + "px)"});
		}
	}
	if (x == 0) y[0] = 0;
	for (i = 0; i < a.length; i++) {
		$(a[i]).addClass("banner_drag");
		$(a[i]).css({"transform": "translateX(" + (bannerPosition[i] + x) + "px)","visibility":"visible"});
	}
}

//Movement to the right
function bannerRight() {
	let a = $(".header_banner .controller_item");
	for (i = 0; i < a.length; i++) {
		if ($(a[i]).hasClass("controller_active")) {
			$(a[i]).removeClass("controller_active");
			if (i == 0) {
				$(a[a.length - 1]).addClass("controller_active");
			} else {
				$(a[i-1]).addClass("controller_active");
			}
			break;
		}
	}
	bannerMoving();
}

//Movement to the left
function bannerLeft() {
	let a = $(".header_banner .controller_item");
	for (i = 0; i < a.length; i++) {
		if ($(a[i]).hasClass("controller_active")) {
			$(a[i]).removeClass("controller_active");
			if (i == a.length-1) {	
				$(a[0]).addClass("controller_active");
			} else {
				$(a[i+1]).addClass("controller_active");
			}
			break;
		}
	}
	bannerMoving();
}

//Banner autoRun
function autoRun() {
	setTimeout(()=>{
			bannerLeft();
		},100);
	bannerArrange();
	let a = $(".header_banner .controller_item");
	let b = $(".header_banner .banner_item");
	if ($(a[a.length-1]).hasClass("controller_active")) {
		bannerPosition[0] = -bannerPosition[b.length-2];
		$(b[0]).css({"transform": "translateX(" + bannerPosition[0] + "px)"});
	}
} 

let bannerRun = setInterval(autoRun,4000);

//Main

$(function() {
	//Mobile navigation bar
	$(".header_bar .bar").click(function() {
		$(".header_nav .nav").css({"left": 0});
		$(".header_nav").css({"left": 0});
		$(".header_nav").addClass("mask");
	});
	
	$(".header_nav .close").click(function() {
		$(".header_nav .nav").css({ "left": "-100%"});
		$(".header_nav").css({ "left": "-100%"});
		$(".header_nav").removeClass("mask");
	});
	
	//Banner
	bannerArrange();
	
	$(window).resize(function(){
		bannerArrange();
	});
	
	//Controll banner autorun desktop
	document.onmousedown = function(e) {
		if (e.target.closest(".header_banner") && bannerRun != 0) {
			clearInterval(bannerRun);
			bannerRun = 0;
		} else if (!e.target.closest(".header_banner") && bannerRun == 0) {
			bannerRun = setInterval(autoRun,4000);
		}
	}
	
	//Controll banner autorun mobile
	document.ontouchstart = function(e) {
		if (e.target.closest(".header_banner") && bannerRun != 0) {
			clearInterval(bannerRun);
			bannerRun = 0;
		} else if (!e.target.closest(".header_banner") && bannerRun == 0) {
			bannerRun = setInterval(autoRun,4000);
		}
	}
	
	
	//Controll banner by click
	$(".header_banner .controller_item").mousedown(function() {
		bannerArrange();
		$(".header_banner .controller_item").mouseup(function() {
			$(".header_banner .controller_item").removeClass("controller_active");
			$(this).addClass("controller_active");
			bannerMoving();
		});
	});
	
	//Drag banner on mobile devices
	$$(".header_banner .banner")[0].ontouchstart = function(e) {
		bannerArrange();
       	let dragStart = e.touches[0].clientX;
	  	let dragBefore;
        let dragAfter;
		let equal = [0];
		document.ontouchmove = function(e) {
			dragBefore = dragAfter;
    		dragAfter = e.touches[0].clientX;
	       	bannerDrag(dragAfter - dragStart, equal);
		}
		document.ontouchend = function() {
	        document.ontouchmove = null;
	        document.ontouchend = null;
	    	if ((dragAfter - dragStart) <-50 && (dragAfter - dragBefore) <= 0) {
				bannerLeft();
			} else if ((dragAfter - dragStart) > 50 && (dragAfter - dragBefore) >= 0) {
				bannerRight();
			} else {
				bannerMoving();
			}
		}
	}
	
	//Drag banner on desktop
	$(".header_banner .banner").mousedown(function(e) {
		bannerArrange();
		e = e || window.event;
    	e.preventDefault();
        let dragStart = e.clientX;
        let dragBefore;
        let dragAfter;
        let equal = [0];
		document.onmousemove = function(e) {
			$(".header_banner .banner").addClass("mask_100");
			e = e || window.event;
    		e.preventDefault(e);
    		dragBefore = dragAfter;
    		dragAfter = e.clientX;
    		bannerDrag(e.clientX - dragStart,equal);
		}
		document.onmouseup = function(e) {
			document.onmousemove = null;
	    	document.onmouseup = null;
			$(".header_banner .banner").removeClass("mask_100");
	    	if ((e.clientX - dragStart) <-50 && (dragAfter - dragBefore) <= 0) {
				bannerLeft();
			} else if ((e.clientX - dragStart) > 50 && (dragAfter - dragBefore) >= 0) {
				bannerRight();
			} else {
				bannerMoving();
			}
		}
	});
	
	
});
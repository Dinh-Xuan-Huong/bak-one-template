$(".portfolio button").click(function(event) {
	/* Act on the event */
	if ($(this).hasClass('active')) {
		//kết thúc hàm => kết thúc sự kiện click
		return;
	}
	var dataValue = $(this).attr("data");
	var allSelector = '.portfolio .row > div';//8 div
	$(this).addClass('active');

	// $(this).siblings('button.active'): chọn thằng anh em của nút được click thõa mãn tiêu chí:
	// Tiêu chí: button và có class active
	$(this).siblings('button.active').removeClass('active');

	if (dataValue == "all") {
		$(allSelector).show();
	}
	else {
		var shownSelector = `.portfolio .row > div[data=${dataValue}]`;//div được chọn

		var allDivs = $(allSelector);//all divs - 8 divs
		var shownDivs = $(shownSelector);//divs hiện
		var hideDivs = allDivs.not(shownDivs);//divs ẩn

		hideDivs.hide();
		shownDivs.show();
	}
});

// Hiển thị animation menu
$(window).scroll(function(event) {
	/* Act on the event */
	// console.log($(window).scrollTop());
	if ($(window).scrollTop() >= $("#portfolio").offset().top) {
		//người dùng cuộn chuột đến phần portfolio
		$("header .navbar").addClass('fixed-top');
		$("header").addClass('dummy-padding');
	}
	else {
		$("header .navbar").removeClass('fixed-top');
		$("header").removeClass('dummy-padding');
	}
	//gọi hàm 
	toggleBackToTop();
	
	
});

//gọi hàm 
toggleBackToTop();

// khai báo hàm
function toggleBackToTop() {
	if ($(window).scrollTop() == 0) {
		//Ẩn button back-to-top
		$(".back-to-top").fadeOut();
	}
	else {
		//Hiển thị button back-to-top
		$(".back-to-top").fadeIn();
	}
}
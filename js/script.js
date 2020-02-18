$('#mobileMenu').on('click', function (e) {
	e.preventDefault;
	$('.menu_btn').toggleClass('menu_btn_active');
	$('.menu_list').toggleClass('menu_list_active');
});

$(document).ready(function() {
	console.log("ready!");
	checkTextLeng($('.easy_block .text p'), 100);
	checkTextLeng($('.mono_box_text p'), 50);
});

function checkTextLeng( elements, count) {
	elements.map(function(i, item) {
		var a = $(item).text().trim();
		$(item).text(a.length > count ? `${a.substring(0, count)}...` : a);
		if (a.length > count) {
			$(item).text(`${a.substring(0, count)}...`);
		} else {
			$(item).text(a);
		}
	})
}
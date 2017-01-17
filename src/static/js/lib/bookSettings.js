$(function(){
	var page = {
		init: function(){
			this.renderPage();
			this.initPage();
			this.renderNav();
			this.pageNavigation();
			this.sideListToggle();
		},
		renderPage: function(){
			if(!(window.SiteConfig)) return;
			var hash = window.location.hash;
			var fileNum = hash.replace("#page","");
			var pageFile = hash.replace("#","");
			var pageNum = window.SiteConfig.files[fileNum].num;
			flippingBook.pages = [];
			for(var i=0;i<pageNum;i++){
				if(i==0){
					flippingBook.pages.push("../images/"+pageFile+"/front.jpg");
				}
				else if(i==pageNum-1){
					flippingBook.pages.push("../images/"+pageFile+"/back.jpg");
				}
				else{
					var j = i.toString();
					if(j.length<2){
						j = "0"+j;
					}
					flippingBook.pages.push("../images/"+pageFile+"/"+j+".jpg");
				}
			}
		},
		initPage: function(){
			flippingBook.settings.bookWidth = 1080;
			flippingBook.settings.bookHeight = 779;
			flippingBook.settings.pageBackgroundColor = 0xffffff;
			flippingBook.settings.backgroundColor = 0xf5dcbf;
			flippingBook.settings.zoomUIColor = 0xffffff;
			flippingBook.settings.useCustomCursors = false;
			flippingBook.settings.dropShadowEnabled = false;
			flippingBook.settings.zoomEnabled= true;
			flippingBook.create();
		},
		renderNav: function(){
			if(!(window.SiteConfig)) return;
			var hash = window.location.hash;
			var fileNum = hash.replace("#page","");
			var navInfo = window.SiteConfig.files[fileNum].catalog;
			var navItem = "";
			for(var i in navInfo){
				navItem += '<span data-page="${page}">${title}</span>'.template({
					page: navInfo[i],
					title: i
				});
			}
			$("#nav").append(navItem);
			$("#nav span").hide();
			$("#nav").on("mouseenter",function(){
				$("#nav span").fadeIn();
			});
			$("#nav").on("mouseleave",function(){
				$("#nav span").fadeOut();
			})
		},
		pageNavigation: function(){
			$("#nav span").on("click",function(e){
				var $node = $(e.currentTarget);
				var page = Number($node.data("page")) + 1;
				if(page){
					flippingBook.getFlippingBookReference().flipGotoPage(page);
				}
			});
		},
		sideListToggle: function(){
			var self = this;
			$(".listBtn").on("mouseenter",function(){
				$(".allList").animate({
					"left" : "0"
				}, function(){
					var nicescroll = $("#thumb-list").data("__nicescroll");
					if(nicescroll){
						nicescroll.remove && nicescroll.remove();
					}
					self.sideListScroll();
				});
			});
			$(".allList").on("mouseover", function(){
				clearTimeout(self.leaveScrollTime);
			});
			$(".allList").on("mouseleave",function(){
				self.leaveScrollTime = setTimeout(function(){
					var nicescroll = $("#thumb-list").data("__nicescroll");
					if(nicescroll){
						nicescroll.hide();
					}
					$(".allList").animate({
						"left" : "-120px"
					});
				}, 600)
			});
		},
		sideListScroll: function(){
			$("#thumb-list").niceScroll({
				cursorcolor:"#ccc",
				cursoropacitymax:1,
				touchbehavior:false,
				cursorwidth:"5px",
				cursorborder:"0",
				cursorborderradius:"5px"
			});
		}
	};
	page.init();
});

String.prototype.template = function (data, regexp) {
	return this.replace(regexp || /\${([^{}]*)}/g, function (str, p1) {
		return (data[p1]!==undefined&&data[p1]!==null&&data[p1].toString())||"";});
}






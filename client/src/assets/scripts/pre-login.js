"use strict";$(document).ready(function(){window.preLogin={elements:{status:$(".status"),nav_scroll:$("nav.scroll"),nav_scroll_trigger:$(".trigger-nav-scroll"),map:$(".map-scroll"),map_element:$(".map-element"),car:$(".car"),car_icon:$(".car-element"),car_container:$(".car-container"),car_stop:$(".car-stop"),path:$("#pathy"),path_m:$("#pathm"),map_path_m:$(".map-path-m"),mobile_map:$(".mobile-map"),scroll_box:$(".white-box.on-scroll"),scroll_info:$(".map-info.on-scroll"),alert:$(".alert-circle.on-scroll"),map_stats:$(".map-stats")},methods:{_scroll:function e(){window.requestAnimationFrame(function(){if(window.preLogin.elements.status.length){var e=window.preLogin.elements.status.offset().top,n=window.pageYOffset,t=window.innerHeight;n>e-.75*t&&window.preLogin.elements.status.addClass("play"),n>window.preLogin.elements.nav_scroll_trigger.offset().top?window.preLogin.elements.nav_scroll.addClass("show"):window.preLogin.elements.nav_scroll.removeClass("show");var o=window.innerWidth>767?window.preLogin.elements.map_element.outerWidth()/807:1,a=window.innerWidth>767?150:-70*o,i=window.preLogin.elements.map_element.offset().top-a*(1-o+1),s=window.innerWidth>767?document.getElementById("pathy"):document.getElementById("pathm"),r=window.innerWidth>767?window.preLogin.elements.path.offset().top-Math.abs(i-window.preLogin.elements.path.offset().top):window.preLogin.elements.mobile_map.offset().top-Math.abs(i-window.preLogin.elements.mobile_map.offset().top);if(s){var l=window.innerWidth>767?1896:1748,w=s.getPointAtLength((n-r)/(l*o)*Math.floor(s.getTotalLength()));if(w.x=w.x*o,w.y=w.y*o,window.preLogin.elements.mobile_map.css({transform:"translateX(50%) scale("+o+")","-webkit-transform":"translateX(50%) scale("+o+")"}),n>i)if(window.preLogin.elements.car.addClass("fixed"),w.x>=0){window.preLogin.elements.car_container.css({transform:"translateX("+w.x+"px) scale("+o+")","-webkit-transform":"translateX("+w.x+"px) scale("+o+")"});var d=window.preLogin.elements.car_container.data("point");if(d){var m=180*Math.atan2(w.y-d.y,w.x-d.x)/Math.PI-90;window.preLogin.elements.car_icon.css({transform:"rotate("+m+"deg)","-webkit-transform":"rotate("+m+"deg)"})}window.preLogin.elements.car_container.data("point",w)}else window.preLogin.elements.car_container.css({transform:"scale("+o+")","-webkit-transform":"scale("+o+")"});else window.preLogin.elements.car.removeClass("fixed");n>window.preLogin.elements.car_stop.offset().top-275?window.preLogin.elements.car.addClass("hide-car"):window.preLogin.elements.car.removeClass("hide-car")}window.preLogin.elements.scroll_box.each(function(){var e=$(this);n>e.offset().top-400&&e.addClass("show")}),window.preLogin.elements.scroll_info.each(function(){var e=$(this);n>e.offset().top-200&&e.addClass("show")});var c=window.innerWidth>767?310:190;if(window.preLogin.elements.alert.each(function(){var e=$(this);n>e.offset().top-c&&e.addClass("show")}),n>window.preLogin.elements.map_stats.offset().top-300){var p=0;window.preLogin.elements.map_stats.find(".count").each(function(){var e=this,n=$(this);n.data("interval")||(n.data("interval",setInterval(function(){var n=$(e),t=n.data("count"),o=parseInt(n.text(),10);if(o>=t)return void clearInterval(n.data("interval"));n.text(o+1)},50)),p++)})}}})}}},$(window).on("scroll",window.preLogin.methods._scroll),$(window).on("resize",window.preLogin.methods._scroll),$(document).ready(function(){setTimeout(function(){},200)})});
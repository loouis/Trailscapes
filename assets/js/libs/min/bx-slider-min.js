!function($){var t={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,ariaLive:!0,ariaHidden:!0,keyboardEnabled:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",stopAutoOnClick:!1,autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,shrinkItems:!1,onSliderLoad:function(){return!0},onSlideBefore:function(){return!0},onSlideAfter:function(){return!0},onSlideNext:function(){return!0},onSlidePrev:function(){return!0},onSliderResize:function(){return!0}};$.fn.bxSlider=function(e){if(0===this.length)return this;if(this.length>1)return this.each(function(){$(this).bxSlider(e)}),this;var n={},s=this,o=$(window).width(),r=$(window).height();if(!$(s).data("bxSlider")){var a=function(){$(s).data("bxSlider")||(n.settings=$.extend({},t,e),n.settings.slideWidth=parseInt(n.settings.slideWidth),n.children=s.children(n.settings.slideSelector),n.children.length<n.settings.minSlides&&(n.settings.minSlides=n.children.length),n.children.length<n.settings.maxSlides&&(n.settings.maxSlides=n.children.length),n.settings.randomStart&&(n.settings.startSlide=Math.floor(Math.random()*n.children.length)),n.active={index:n.settings.startSlide},n.carousel=n.settings.minSlides>1||n.settings.maxSlides>1,n.carousel&&(n.settings.preloadImages="all"),n.minThreshold=n.settings.minSlides*n.settings.slideWidth+(n.settings.minSlides-1)*n.settings.slideMargin,n.maxThreshold=n.settings.maxSlides*n.settings.slideWidth+(n.settings.maxSlides-1)*n.settings.slideMargin,n.working=!1,n.controls={},n.interval=null,n.animProp="vertical"===n.settings.mode?"top":"left",n.usingCSS=n.settings.useCSS&&"fade"!==n.settings.mode&&function(){for(var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"],i=0;i<e.length;i++)if(void 0!==t.style[e[i]])return n.cssPrefix=e[i].replace("Perspective","").toLowerCase(),n.animProp="-"+n.cssPrefix+"-transform",!0;return!1}(),"vertical"===n.settings.mode&&(n.settings.maxSlides=n.settings.minSlides),s.data("origStyle",s.attr("style")),s.children(n.settings.slideSelector).each(function(){$(this).data("origStyle",$(this).attr("style"))}),l())},l=function(){var t=n.children.eq(n.settings.startSlide);s.wrap('<div class="'+n.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),n.viewport=s.parent(),n.settings.ariaLive&&!n.settings.ticker&&n.viewport.attr("aria-live","polite"),n.loader=$('<div class="bx-loading" />'),n.viewport.prepend(n.loader),s.css({width:"horizontal"===n.settings.mode?1e3*n.children.length+215+"%":"auto",position:"relative"}),n.usingCSS&&n.settings.easing?s.css("-"+n.cssPrefix+"-transition-timing-function",n.settings.easing):n.settings.easing||(n.settings.easing="swing"),n.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),n.viewport.parent().css({maxWidth:p()}),n.settings.pager||n.settings.controls||n.viewport.parent().css({margin:"0 auto 0px"}),n.children.css({float:"horizontal"===n.settings.mode?"left":"none",listStyle:"none",position:"relative"}),n.children.css("width",u()),"horizontal"===n.settings.mode&&n.settings.slideMargin>0&&n.children.css("marginRight",n.settings.slideMargin),"vertical"===n.settings.mode&&n.settings.slideMargin>0&&n.children.css("marginBottom",n.settings.slideMargin),"fade"===n.settings.mode&&(n.children.css({position:"absolute",zIndex:0,display:"none"}),n.children.eq(n.settings.startSlide).css({zIndex:n.settings.slideZIndex,display:"block"})),n.controls.el=$('<div class="bx-controls" />'),n.settings.captions&&T(),n.active.last=n.settings.startSlide===v()-1,n.settings.video&&s.fitVids(),("all"===n.settings.preloadImages||n.settings.ticker)&&(t=n.children),n.settings.ticker?n.settings.pager=!1:(n.settings.controls&&w(),n.settings.auto&&n.settings.autoControls&&C(),n.settings.pager&&b(),(n.settings.controls||n.settings.autoControls||n.settings.pager)&&n.viewport.after(n.controls.el)),d(t,c)},d=function(t,e){var i=t.find('img:not([src=""]), iframe').length,n=0;return 0===i?void e():void t.find('img:not([src=""]), iframe').each(function(){$(this).one("load error",function(){++n===i&&e()}).each(function(){this.complete&&$(this).load()})})},c=function(){if(n.settings.infiniteLoop&&"fade"!==n.settings.mode&&!n.settings.ticker){var t="vertical"===n.settings.mode?n.settings.minSlides:n.settings.maxSlides,e=n.children.slice(0,t).clone(!0).addClass("bx-clone"),i=n.children.slice(-t).clone(!0).addClass("bx-clone");n.settings.ariaHidden&&(e.attr("aria-hidden",!0),i.attr("aria-hidden",!0)),s.append(e).prepend(i)}n.loader.remove(),x(),"vertical"===n.settings.mode&&(n.settings.adaptiveHeight=!0),n.viewport.height(g()),s.redrawSlider(),n.settings.onSliderLoad.call(s,n.active.index),n.initialized=!0,n.settings.responsive&&$(window).bind("resize",R),n.settings.auto&&n.settings.autoStart&&(v()>1||n.settings.autoSlideForOnePage)&&D(),n.settings.ticker&&H(),n.settings.pager&&z(n.settings.startSlide),n.settings.controls&&A(),n.settings.touchEnabled&&!n.settings.ticker&&F(),n.settings.keyboardEnabled&&!n.settings.ticker&&$(document).keydown(O)},g=function(){var t=0,e=$();if("vertical"===n.settings.mode||n.settings.adaptiveHeight)if(n.carousel){var s=1===n.settings.moveSlides?n.active.index:n.active.index*f();for(e=n.children.eq(s),i=1;i<=n.settings.maxSlides-1;i++)e=s+i>=n.children.length?e.add(n.children.eq(i-1)):e.add(n.children.eq(s+i))}else e=n.children.eq(n.active.index);else e=n.children;return"vertical"===n.settings.mode?(e.each(function(e){t+=$(this).outerHeight()}),n.settings.slideMargin>0&&(t+=n.settings.slideMargin*(n.settings.minSlides-1))):t=Math.max.apply(Math,e.map(function(){return $(this).outerHeight(!1)}).get()),"border-box"===n.viewport.css("box-sizing")?t+=parseFloat(n.viewport.css("padding-top"))+parseFloat(n.viewport.css("padding-bottom"))+parseFloat(n.viewport.css("border-top-width"))+parseFloat(n.viewport.css("border-bottom-width")):"padding-box"===n.viewport.css("box-sizing")&&(t+=parseFloat(n.viewport.css("padding-top"))+parseFloat(n.viewport.css("padding-bottom"))),t},p=function(){var t="100%";return n.settings.slideWidth>0&&(t="horizontal"===n.settings.mode?n.settings.maxSlides*n.settings.slideWidth+(n.settings.maxSlides-1)*n.settings.slideMargin:n.settings.slideWidth),t},u=function(){var t=n.settings.slideWidth,e=n.viewport.width();if(0===n.settings.slideWidth||n.settings.slideWidth>e&&!n.carousel||"vertical"===n.settings.mode)t=e;else if(n.settings.maxSlides>1&&"horizontal"===n.settings.mode){if(e>n.maxThreshold)return t;e<n.minThreshold?t=(e-n.settings.slideMargin*(n.settings.minSlides-1))/n.settings.minSlides:n.settings.shrinkItems&&(t=Math.floor((e+n.settings.slideMargin)/Math.ceil((e+n.settings.slideMargin)/(t+n.settings.slideMargin))-n.settings.slideMargin))}return t},h=function(){var t=1,e=null;return"horizontal"===n.settings.mode&&n.settings.slideWidth>0?n.viewport.width()<n.minThreshold?t=n.settings.minSlides:n.viewport.width()>n.maxThreshold?t=n.settings.maxSlides:(e=n.children.first().width()+n.settings.slideMargin,t=Math.floor((n.viewport.width()+n.settings.slideMargin)/e)):"vertical"===n.settings.mode&&(t=n.settings.minSlides),t},v=function(){var t=0,e=0,i=0;if(n.settings.moveSlides>0)if(n.settings.infiniteLoop)t=Math.ceil(n.children.length/f());else for(;e<n.children.length;)++t,e=i+h(),i+=n.settings.moveSlides<=h()?n.settings.moveSlides:h();else t=Math.ceil(n.children.length/h());return t},f=function(){return n.settings.moveSlides>0&&n.settings.moveSlides<=h()?n.settings.moveSlides:h()},x=function(){var t,e,i;n.children.length>n.settings.maxSlides&&n.active.last&&!n.settings.infiniteLoop?"horizontal"===n.settings.mode?(e=n.children.last(),t=e.position(),m(-(t.left-(n.viewport.width()-e.outerWidth())),"reset",0)):"vertical"===n.settings.mode&&(i=n.children.length-n.settings.minSlides,t=n.children.eq(i).position(),m(-t.top,"reset",0)):(t=n.children.eq(n.active.index*f()).position(),n.active.index===v()-1&&(n.active.last=!0),void 0!==t&&("horizontal"===n.settings.mode?m(-t.left,"reset",0):"vertical"===n.settings.mode&&m(-t.top,"reset",0)))},m=function(t,e,i,o){var r,a;n.usingCSS?(a="vertical"===n.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)",s.css("-"+n.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"===e?(s.css(n.animProp,a),0!==i?s.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(t){$(t.target).is(s)&&(s.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),I())}):I()):"reset"===e?s.css(n.animProp,a):"ticker"===e&&(s.css("-"+n.cssPrefix+"-transition-timing-function","linear"),s.css(n.animProp,a),0!==i?s.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(t){$(t.target).is(s)&&(s.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),m(o.resetValue,"reset",0),W())}):(m(o.resetValue,"reset",0),W()))):(r={},r[n.animProp]=t,"slide"===e?s.animate(r,i,n.settings.easing,function(){I()}):"reset"===e?s.css(n.animProp,t):"ticker"===e&&s.animate(r,i,"linear",function(){m(o.resetValue,"reset",0),W()}))},S=function(){for(var t="",e="",i=v(),s=0;s<i;s++)e="",n.settings.buildPager&&$.isFunction(n.settings.buildPager)||n.settings.pagerCustom?(e=n.settings.buildPager(s),n.pagerEl.addClass("bx-custom-pager")):(e=s+1,n.pagerEl.addClass("bx-default-pager")),t+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+e+"</a></div>";n.pagerEl.html(t)},b=function(){n.settings.pagerCustom?n.pagerEl=$(n.settings.pagerCustom):(n.pagerEl=$('<div class="bx-pager" />'),n.settings.pagerSelector?$(n.settings.pagerSelector).html(n.pagerEl):n.controls.el.addClass("bx-has-pager").append(n.pagerEl),S()),n.pagerEl.on("click touchend","a",y)},w=function(){n.controls.next=$('<a class="bx-next" href="">'+n.settings.nextText+"</a>"),n.controls.prev=$('<a class="bx-prev" href="">'+n.settings.prevText+"</a>"),n.controls.next.bind("click touchend",P),n.controls.prev.bind("click touchend",E),n.settings.nextSelector&&$(n.settings.nextSelector).append(n.controls.next),n.settings.prevSelector&&$(n.settings.prevSelector).append(n.controls.prev),n.settings.nextSelector||n.settings.prevSelector||(n.controls.directionEl=$('<div class="bx-controls-direction" />'),n.controls.directionEl.append(n.controls.prev).append(n.controls.next),n.controls.el.addClass("bx-has-controls-direction").append(n.controls.directionEl))},C=function(){n.controls.start=$('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+n.settings.startText+"</a></div>"),n.controls.stop=$('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+n.settings.stopText+"</a></div>"),n.controls.autoEl=$('<div class="bx-controls-auto" />'),n.controls.autoEl.on("click",".bx-start",k),n.controls.autoEl.on("click",".bx-stop",M),n.settings.autoControlsCombine?n.controls.autoEl.append(n.controls.start):n.controls.autoEl.append(n.controls.start).append(n.controls.stop),n.settings.autoControlsSelector?$(n.settings.autoControlsSelector).html(n.controls.autoEl):n.controls.el.addClass("bx-has-controls-auto").append(n.controls.autoEl),q(n.settings.autoStart?"stop":"start")},T=function(){n.children.each(function(t){var e=$(this).find("img:first").attr("title");void 0!==e&&(""+e).length&&$(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},P=function(t){t.preventDefault(),n.controls.el.hasClass("disabled")||(n.settings.auto&&n.settings.stopAutoOnClick&&s.stopAuto(),s.goToNextSlide())},E=function(t){t.preventDefault(),n.controls.el.hasClass("disabled")||(n.settings.auto&&n.settings.stopAutoOnClick&&s.stopAuto(),s.goToPrevSlide())},k=function(t){s.startAuto(),t.preventDefault()},M=function(t){s.stopAuto(),t.preventDefault()},y=function(t){var e,i;t.preventDefault(),n.controls.el.hasClass("disabled")||(n.settings.auto&&n.settings.stopAutoOnClick&&s.stopAuto(),e=$(t.currentTarget),void 0!==e.attr("data-slide-index")&&(i=parseInt(e.attr("data-slide-index")),i!==n.active.index&&s.goToSlide(i)))},z=function(t){var e=n.children.length;return"short"===n.settings.pagerType?(n.settings.maxSlides>1&&(e=Math.ceil(n.children.length/n.settings.maxSlides)),void n.pagerEl.html(t+1+n.settings.pagerShortSeparator+e)):(n.pagerEl.find("a").removeClass("active"),void n.pagerEl.each(function(e,i){$(i).find("a").eq(t).addClass("active")}))},I=function(){if(n.settings.infiniteLoop){var t="";0===n.active.index?t=n.children.eq(0).position():n.active.index===v()-1&&n.carousel?t=n.children.eq((v()-1)*f()).position():n.active.index===n.children.length-1&&(t=n.children.eq(n.children.length-1).position()),t&&("horizontal"===n.settings.mode?m(-t.left,"reset",0):"vertical"===n.settings.mode&&m(-t.top,"reset",0))}n.working=!1,n.settings.onSlideAfter.call(s,n.children.eq(n.active.index),n.oldIndex,n.active.index)},q=function(t){n.settings.autoControlsCombine?n.controls.autoEl.html(n.controls[t]):(n.controls.autoEl.find("a").removeClass("active"),n.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},A=function(){1===v()?(n.controls.prev.addClass("disabled"),n.controls.next.addClass("disabled")):!n.settings.infiniteLoop&&n.settings.hideControlOnEnd&&(0===n.active.index?(n.controls.prev.addClass("disabled"),n.controls.next.removeClass("disabled")):n.active.index===v()-1?(n.controls.next.addClass("disabled"),n.controls.prev.removeClass("disabled")):(n.controls.prev.removeClass("disabled"),n.controls.next.removeClass("disabled")))},D=function(){if(n.settings.autoDelay>0)var t=setTimeout(s.startAuto,n.settings.autoDelay);else s.startAuto(),$(window).focus(function(){s.startAuto()}).blur(function(){s.stopAuto()});n.settings.autoHover&&s.hover(function(){n.interval&&(s.stopAuto(!0),n.autoPaused=!0)},function(){n.autoPaused&&(s.startAuto(!0),n.autoPaused=null)})},H=function(){var t=0,e,i,o,r,a,l,d,c;"next"===n.settings.autoDirection?s.append(n.children.clone().addClass("bx-clone")):(s.prepend(n.children.clone().addClass("bx-clone")),e=n.children.first().position(),t="horizontal"===n.settings.mode?-e.left:-e.top),m(t,"reset",0),n.settings.pager=!1,n.settings.controls=!1,n.settings.autoControls=!1,n.settings.tickerHover&&(n.usingCSS?(r="horizontal"===n.settings.mode?4:5,n.viewport.hover(function(){i=s.css("-"+n.cssPrefix+"-transform"),o=parseFloat(i.split(",")[r]),m(o,"reset",0)},function(){c=0,n.children.each(function(t){c+="horizontal"===n.settings.mode?$(this).outerWidth(!0):$(this).outerHeight(!0)}),a=n.settings.speed/c,l="horizontal"===n.settings.mode?"left":"top",d=a*(c-Math.abs(parseInt(o))),W(d)})):n.viewport.hover(function(){s.stop()},function(){c=0,n.children.each(function(t){c+="horizontal"===n.settings.mode?$(this).outerWidth(!0):$(this).outerHeight(!0)}),a=n.settings.speed/c,l="horizontal"===n.settings.mode?"left":"top",d=a*(c-Math.abs(parseInt(s.css(l)))),W(d)})),W()},W=function(t){var e=t?t:n.settings.speed,i={left:0,top:0},o={left:0,top:0},r,a,l;"next"===n.settings.autoDirection?i=s.find(".bx-clone").first().position():o=n.children.first().position(),r="horizontal"===n.settings.mode?-i.left:-i.top,a="horizontal"===n.settings.mode?-o.left:-o.top,l={resetValue:a},m(r,"ticker",e,l)},L=function(t){var e=$(window),i={top:e.scrollTop(),left:e.scrollLeft()},n=t.offset();return i.right=i.left+e.width(),i.bottom=i.top+e.height(),n.right=n.left+t.outerWidth(),n.bottom=n.top+t.outerHeight(),!(i.right<n.left||i.left>n.right||i.bottom<n.top||i.top>n.bottom)},O=function(t){var e=document.activeElement.tagName.toLowerCase(),i="input|textarea",n=new RegExp(e,["i"]),o=n.exec(i);if(null==o&&L(s)){if(39===t.keyCode)return P(t),!1;if(37===t.keyCode)return E(t),!1}},F=function(){n.touch={start:{x:0,y:0},end:{x:0,y:0}},n.viewport.bind("touchstart MSPointerDown pointerdown",N),n.viewport.on("click",".bxslider a",function(t){n.viewport.hasClass("click-disabled")&&(t.preventDefault(),n.viewport.removeClass("click-disabled"))})},N=function(t){if(n.controls.el.addClass("disabled"),n.working)t.preventDefault(),n.controls.el.removeClass("disabled");else{n.touch.originalPos=s.position();var e=t.originalEvent,i="undefined"!=typeof e.changedTouches?e.changedTouches:[e];n.touch.start.x=i[0].pageX,n.touch.start.y=i[0].pageY,n.viewport.get(0).setPointerCapture&&(n.pointerId=e.pointerId,n.viewport.get(0).setPointerCapture(n.pointerId)),n.viewport.bind("touchmove MSPointerMove pointermove",Y),n.viewport.bind("touchend MSPointerUp pointerup",V),n.viewport.bind("MSPointerCancel pointercancel",X)}},X=function(t){m(n.touch.originalPos.left,"reset",0),n.controls.el.removeClass("disabled"),n.viewport.unbind("MSPointerCancel pointercancel",X),n.viewport.unbind("touchmove MSPointerMove pointermove",Y),n.viewport.unbind("touchend MSPointerUp pointerup",V),n.viewport.get(0).releasePointerCapture&&n.viewport.get(0).releasePointerCapture(n.pointerId)},Y=function(t){var e=t.originalEvent,i="undefined"!=typeof e.changedTouches?e.changedTouches:[e],s=Math.abs(i[0].pageX-n.touch.start.x),o=Math.abs(i[0].pageY-n.touch.start.y),r=0,a=0;3*s>o&&n.settings.preventDefaultSwipeX?t.preventDefault():3*o>s&&n.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!==n.settings.mode&&n.settings.oneToOneTouch&&("horizontal"===n.settings.mode?(a=i[0].pageX-n.touch.start.x,r=n.touch.originalPos.left+a):(a=i[0].pageY-n.touch.start.y,r=n.touch.originalPos.top+a),m(r,"reset",0))},V=function(t){n.viewport.unbind("touchmove MSPointerMove pointermove",Y),n.controls.el.removeClass("disabled");var e=t.originalEvent,i="undefined"!=typeof e.changedTouches?e.changedTouches:[e],o=0,r=0;n.touch.end.x=i[0].pageX,n.touch.end.y=i[0].pageY,"fade"===n.settings.mode?(r=Math.abs(n.touch.start.x-n.touch.end.x),r>=n.settings.swipeThreshold&&(n.touch.start.x>n.touch.end.x?s.goToNextSlide():s.goToPrevSlide(),s.stopAuto())):("horizontal"===n.settings.mode?(r=n.touch.end.x-n.touch.start.x,o=n.touch.originalPos.left):(r=n.touch.end.y-n.touch.start.y,o=n.touch.originalPos.top),!n.settings.infiniteLoop&&(0===n.active.index&&r>0||n.active.last&&r<0)?m(o,"reset",200):Math.abs(r)>=n.settings.swipeThreshold?(r<0?s.goToNextSlide():s.goToPrevSlide(),s.stopAuto()):m(o,"reset",200)),n.viewport.unbind("touchend MSPointerUp pointerup",V),n.viewport.get(0).releasePointerCapture&&n.viewport.get(0).releasePointerCapture(n.pointerId)},R=function(t){if(n.initialized)if(n.working)window.setTimeout(R,10);else{var e=$(window).width(),i=$(window).height();o===e&&r===i||(o=e,r=i,s.redrawSlider(),n.settings.onSliderResize.call(s,n.active.index))}},Z=function(t){var e=h();n.settings.ariaHidden&&!n.settings.ticker&&(n.children.attr("aria-hidden","true"),n.children.slice(t,t+e).attr("aria-hidden","false"))},B=function(t){return t<0?n.settings.infiniteLoop?v()-1:n.active.index:t>=v()?n.settings.infiniteLoop?0:n.active.index:t};return s.goToSlide=function(t,e){var i=!0,o=0,r={left:0,top:0},a=null,l,d,c,p;if(n.oldIndex=n.active.index,n.active.index=B(t),!n.working&&n.active.index!==n.oldIndex){if(n.working=!0,i=n.settings.onSlideBefore.call(s,n.children.eq(n.active.index),n.oldIndex,n.active.index),"undefined"!=typeof i&&!i)return n.active.index=n.oldIndex,void(n.working=!1);"next"===e?n.settings.onSlideNext.call(s,n.children.eq(n.active.index),n.oldIndex,n.active.index)||(i=!1):"prev"===e&&(n.settings.onSlidePrev.call(s,n.children.eq(n.active.index),n.oldIndex,n.active.index)||(i=!1)),n.active.last=n.active.index>=v()-1,(n.settings.pager||n.settings.pagerCustom)&&z(n.active.index),n.settings.controls&&A(),"fade"===n.settings.mode?(n.settings.adaptiveHeight&&n.viewport.height()!==g()&&n.viewport.animate({height:g()},n.settings.adaptiveHeightSpeed),n.children.filter(":visible").fadeOut(n.settings.speed).css({zIndex:0}),n.children.eq(n.active.index).css("zIndex",n.settings.slideZIndex+1).fadeIn(n.settings.speed,function(){$(this).css("zIndex",n.settings.slideZIndex),I()})):(n.settings.adaptiveHeight&&n.viewport.height()!==g()&&n.viewport.animate({height:g()},n.settings.adaptiveHeightSpeed),!n.settings.infiniteLoop&&n.carousel&&n.active.last?"horizontal"===n.settings.mode?(a=n.children.eq(n.children.length-1),r=a.position(),o=n.viewport.width()-a.outerWidth()):(l=n.children.length-n.settings.minSlides,r=n.children.eq(l).position()):n.carousel&&n.active.last&&"prev"===e?(d=1===n.settings.moveSlides?n.settings.maxSlides-f():(v()-1)*f()-(n.children.length-n.settings.maxSlides),a=s.children(".bx-clone").eq(d),r=a.position()):"next"===e&&0===n.active.index?(r=s.find("> .bx-clone").eq(n.settings.maxSlides).position(),n.active.last=!1):t>=0&&(p=t*parseInt(f()),r=n.children.eq(p).position()),"undefined"!=typeof r?(c="horizontal"===n.settings.mode?-(r.left-o):-r.top,m(c,"slide",n.settings.speed)):n.working=!1),n.settings.ariaHidden&&Z(n.active.index*f())}},s.goToNextSlide=function(){if(n.settings.infiniteLoop||!n.active.last){var t=parseInt(n.active.index)+1;s.goToSlide(t,"next")}},s.goToPrevSlide=function(){if(n.settings.infiniteLoop||0!==n.active.index){var t=parseInt(n.active.index)-1;s.goToSlide(t,"prev")}},s.startAuto=function(t){n.interval||(n.interval=setInterval(function(){"next"===n.settings.autoDirection?s.goToNextSlide():s.goToPrevSlide()},n.settings.pause),n.settings.autoControls&&t!==!0&&q("stop"))},s.stopAuto=function(t){n.interval&&(clearInterval(n.interval),n.interval=null,n.settings.autoControls&&t!==!0&&q("start"))},s.getCurrentSlide=function(){return n.active.index},s.getCurrentSlideElement=function(){return n.children.eq(n.active.index)},s.getSlideElement=function(t){return n.children.eq(t)},s.getSlideCount=function(){return n.children.length},s.isWorking=function(){return n.working},s.redrawSlider=function(){n.children.add(s.find(".bx-clone")).outerWidth(u()),n.viewport.css("height",g()),n.settings.ticker||x(),n.active.last&&(n.active.index=v()-1),n.active.index>=v()&&(n.active.last=!0),n.settings.pager&&!n.settings.pagerCustom&&(S(),z(n.active.index)),n.settings.ariaHidden&&Z(n.active.index*f())},s.destroySlider=function(){n.initialized&&(n.initialized=!1,$(".bx-clone",this).remove(),n.children.each(function(){void 0!==$(this).data("origStyle")?$(this).attr("style",$(this).data("origStyle")):$(this).removeAttr("style")}),void 0!==$(this).data("origStyle")?this.attr("style",$(this).data("origStyle")):$(this).removeAttr("style"),$(this).unwrap().unwrap(),n.controls.el&&n.controls.el.remove(),n.controls.next&&n.controls.next.remove(),n.controls.prev&&n.controls.prev.remove(),n.pagerEl&&n.settings.controls&&!n.settings.pagerCustom&&n.pagerEl.remove(),$(".bx-caption",this).remove(),n.controls.autoEl&&n.controls.autoEl.remove(),clearInterval(n.interval),n.settings.responsive&&$(window).unbind("resize",R),n.settings.keyboardEnabled&&$(document).unbind("keydown",O),$(this).removeData("bxSlider"))},s.reloadSlider=function(t){void 0!==t&&(e=t),s.destroySlider(),a(),$(s).data("bxSlider",this)},a(),$(s).data("bxSlider",this),this}}}(jQuery);
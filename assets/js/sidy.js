!function(a,b,c){"use strict";function d(){var b={container:{},pusher:{},panel:{}};this._toggleSize=function(a){return"-"===a.charAt(0)?a.substr(1):"-"+a},this._cssTranslate3d=function(a,b,c){return{webkitTransform:"translate3d("+a+", "+b+", "+c+")",transform:"translate3d("+a+", "+b+", "+c+")"}},this._cssTransitionAll=function(a,b){return{webkitTransition:"all "+a+"s "+b,transition:"all "+a+"s "+b}},this._cssTransitionTransform=function(a,b){return{webkitTransition:"-webkit-transform "+a+"s "+b,transition:"transform "+a+"s "+b}},this._getPosition=function(a,b,c){var d={opened:{x:0,y:0},closed:{x:0,y:0},panelCssRules:{}};switch(a){case"left":d.opened.x=b,d.closed.x=this._toggleSize(c),d.panelCssRules={top:0,left:0,height:"100%",width:b};break;case"right":d.opened.x=this._toggleSize(b),d.closed.x=c,d.panelCssRules={top:0,right:0,height:"100%",width:b};break;case"top":d.opened.y=b,d.closed.y=this._toggleSize(c),d.panelCssRules={top:0,height:b,width:"100%"};break;case"bottom":d.opened.y=this._toogleSize(b),d.closed.y=c,d.panelCssRules={bottom:0,height:b,width:"100%"}}return d},this.output={css:{opened:a.extend({},b),closed:a.extend({},b)},inPusher:!1,afterNone:!1}}function e(b,c){var d=this;a("."+b).each(function(){var b=a(this),e={position:b.attr("data-position"),size:b.attr("data-size"),fx:b.attr("data-fx"),duration:b.attr("data-duration"),html:b.clone().wrap("<div>").parent().html()},f=a.extend({},j.panel,e);"auto"===f.size&&(f.size="left"===f.position||"right"===f.position?b.width()+"px":b.height()+"px"),f.fx in c||(console.log(g+" error: fx with name "+f.fx+" does not exists. Sorry"),f.fx=j.panel.fx),d[a(this).attr("id")]=a.extend({},f,c[f.fx](f.position,f.size,f.duration,f.easing))})}function f(b,c){this.options=a.extend({},j,c),this.fx=new d,this.panels=new e(k.panel,this.fx);var f=this;f.init()}var g="Sidy",h="sidy",i="data-panel",j={keyboard:!1,arrows:!0,swipe:!0,trackpad:!1,panel:{position:"left",size:"300px",fx:"push",duration:.65,easing:"cubic-bezier(.16, .68, .43, .99)"}},k={container:h+"__container",content:h+"__content",panel:h+"__panel",pusher:h+"__pusher",opened:h+"--opened",disabled:h+"--disabled",afterNone:h+"--after-none",toOpen:h+"--to-open",toClose:h+"--to-close"},l=function(){var a=!1;return function(b){(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(b)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,4)))&&(a=!0)}(navigator.userAgent||navigator.vendor||b.opera),a},m=function(b,c){var d=a(b).parents("."+c);return d.length?!0:!1},n=l()?"touchstart":"click";d.prototype={slide_overlay:function(b,c,d,e){var f=a.extend(!0,{},this.output),g=this._getPosition(b,c,"100%");return f.css.opened.panel=a.extend({},{visibility:"visible"},this._cssTranslate3d(0,0,0),g.panelCssRules),f.css.closed.panel=a.extend({},this._cssTransitionAll(d,e),this._cssTranslate3d(g.closed.x,g.closed.y,0),g.panelCssRules),f.css.closed.pusher=a.extend({},this._cssTransitionTransform(d,e)),f.inPusher=!1,f.afterNone=!0,f},reveal:function(b,c,d,e){var f=a.extend(!0,{},this.output),g=this._getPosition(b,c,"100%");return f.css.opened.pusher=a.extend({},{visibility:"visible"},this._cssTranslate3d(g.opened.x,g.opened.y,0)),f.css.opened.panel=a.extend({},{visibility:"visible",zIndex:1},this._cssTransitionTransform(d,e),g.panelCssRules),f.css.closed.panel=a.extend({},{zIndex:1},this._cssTransitionAll(d,e),g.panelCssRules),f.css.closed.pusher=a.extend({},this._cssTransitionTransform(d,e)),f.inPusher=!1,f.afterNone=!0,f},push:function(b,c,d,e){var f=a.extend(!0,{},this.output),g=this._getPosition(b,c,"100%");return f.css.opened.pusher=a.extend({},this._cssTranslate3d(g.opened.x,g.opened.y,0)),f.css.opened.panel=a.extend({},{visibility:"visible"},this._cssTransitionTransform(d,e),this._cssTranslate3d(g.closed.x,g.closed.y,0),g.panelCssRules),f.css.closed.panel=a.extend({},this._cssTransitionAll(d,e),this._cssTranslate3d(g.closed.x,g.closed.y,0),g.panelCssRules),f.css.closed.pusher=a.extend({},this._cssTransitionTransform(d,e)),f.inPusher=!0,f.afterNone=!0,f},slide_along:function(b,c,d,e){var f=a.extend(!0,{},this.output),g=this._getPosition(b,c,"50%");return f.css.opened.pusher=a.extend({},this._cssTranslate3d(g.opened.x,g.opened.y,0)),f.css.opened.panel=a.extend({},{visibility:"visible",zIndex:1},this._cssTransitionTransform(d,e),this._cssTranslate3d(0,0,0),g.panelCssRules),f.css.closed.panel=a.extend({},{zIndex:1},this._cssTransitionAll(d,e),this._cssTranslate3d(g.closed.x,g.closed.y,0),g.panelCssRules),f.css.closed.pusher=a.extend({},this._cssTransitionTransform(d,e)),f.inPusher=!1,f.afterNone=!0,f},slide_reverse:function(b,c,d,e){var f=a.extend(!0,{},this.output),g=this._getPosition(b,c,"-50%");return f.css.opened.pusher=a.extend({},this._cssTranslate3d(g.opened.x,g.opened.y,0)),f.css.opened.panel=a.extend({},{visibility:"visible",zIndex:1},this._cssTransitionTransform(d,e),this._cssTranslate3d(0,0,0),g.panelCssRules),f.css.closed.panel=a.extend({},{zIndex:1},this._cssTransitionAll(d,e),this._cssTranslate3d(g.closed.x,g.closed.y,0),g.panelCssRules),f.css.closed.pusher=a.extend({},this._cssTransitionTransform(d,e)),f.inPusher=!1,f.afterNone=!0,f},scale_down:function(b,c,d,e){var f=a.extend(!0,{},this.output),g=this._getPosition(b,c,"100%");return f.css.opened.container=a.extend({},{webkitPerspective:"1500px",perspective:"1500px"}),f.css.opened.pusher=a.extend({},{webkitTransformStyle:"preserve-3d",transformStyle:"preserve-3d"},this._cssTranslate3d(0,0,"-300px")),f.css.opened.panel=a.extend({},{visibility:"visible"},this._cssTransitionTransform(d,e),this._cssTranslate3d(0,0,0),g.panelCssRules),f.css.closed.panel=a.extend({},{opacity:1},this._cssTransitionAll(d,e),this._cssTranslate3d(g.closed.x,g.closed.y,0),g.panelCssRules),f.css.closed.pusher=a.extend({},this._cssTransitionTransform(d,e)),f.inPusher=!1,f.afterNone=!0,f},scale_up:function(b,c,d,e){var f=a.extend(!0,{},this.output),g=this._getPosition(b,c,"100%");return f.css.opened.container=a.extend({},{webkitPerspective:"1500px",perspective:"1500px",webkitPerspectiveOrigin:"0% 50%",perspectiveOrigin:"0% 50%"}),f.css.opened.pusher=a.extend({},this._cssTranslate3d(g.opened.x,g.opened.y,0)),f.css.opened.panel=a.extend({},{visibility:"visible",opacity:1,zIndex:1},this._cssTransitionTransform(d,e),this._cssTranslate3d(0,0,0),g.panelCssRules),f.css.closed.panel=a.extend({},{opacity:1,zIndex:1},this._cssTransitionAll(d,e),this._cssTranslate3d(0,0,"-300px"),g.panelCssRules),f.css.closed.pusher=a.extend({},this._cssTransitionTransform(d,e)),f.inPusher=!1,f.afterNone=!1,f}},f.prototype={init:function(){var b=this,c=a("."+k.content).clone().wrap("<div>").parent().html();a("."+h).html("").removeClass(h).addClass(k.container).append("<div></div>"),a("."+k.container+" div").addClass(k.pusher),a("."+k.pusher).html(c),a.each(b.panels,function(b,c){var d=a("."+k.pusher),e=a("."+k.content),f=c.inPusher?e:d;f.before(c.html),a("#"+b).css(c.css.closed.panel).addClass(k.disabled)}),b.$buttonsOpen=a("."+k.toOpen),b.$buttonsClose=a("."+k.toClose),b.$buttonsOpen.on(n,function(c){var d=a(this).attr(i);d in b.panels?b.openPanel(c,d,b.panels[d]):console.log(g+" error: panel with id: "+d+" does not exists. Sorry")})},openPanel:function(b,d,e){var f=this,g=a("."+k.container),h=a("#"+d),i=a("."+k.pusher);b.stopPropagation(),b.preventDefault(),h.removeClass(k.disabled),setTimeout(function(){g.css(e.css.opened.container).addClass(k.opened),h.css(e.css.opened.panel),setTimeout(function(){i.css(e.css.closed.pusher).css(e.css.opened.pusher)},25)},1),a(c).on(n,function(b){m(b.target,k.panel)||(f.closePanel(d,e),a(this).off())}),f.$buttonsClose.on(n,function(){f.closePanel(d,e),a(this).off()})},closePanel:function(b,c){var d=a("."+k.container),e=a("#"+b),f=a("."+k.pusher);d.removeClass(k.opened),e.attr("style","").css(c.css.closed.panel),f.attr("style","").css(c.css.closed.pusher),setTimeout(function(){d.attr("style",""),f.attr("style",""),e.addClass(k.disabled)},1e3*c.duration)}},a.fn[g]=function(b){return this.each(function(){a.data(this,"plugin_"+g)||a.data(this,"plugin_"+g,new f(this,b))})},a(function(){a(this).Sidy()})}("undefined"!=typeof jQuery&&jQuery,window,document);
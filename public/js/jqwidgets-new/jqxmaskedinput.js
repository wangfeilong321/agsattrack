/*
jQWidgets v3.9.1 (2015-Oct)
Copyright (c) 2011-2015 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function(a){a.jqx.jqxWidget("jqxMaskedInput","",{});a.extend(a.jqx._jqxMaskedInput.prototype,{defineInstance:function(){var b={value:null,mask:"99999",width:null,height:25,textAlign:"left",readOnly:false,cookies:false,promptChar:"_",inputMode:"advanced",rtl:false,disabled:false,events:["valueChanged","textchanged","mousedown","mouseup","keydown","keyup","keypress","change"],aria:{"aria-valuenow":{name:"value",type:"string"},"aria-disabled":{name:"disabled",type:"boolean"}}};a.extend(true,this,b);return b},createInstance:function(b){this.render()},render:function(){var e=this;e.host.attr({role:"textbox"});e.host.attr("data-role","input");var f=e.host.attr("value");if(f!=undefined&&f!=""){e.value=f}a.jqx.aria(this);a.jqx.aria(this,"aria-multiline",false);a.jqx.aria(this,"aria-readonly",e.readOnly);e.host.addClass(e.toThemeProperty("jqx-input"));e.host.addClass(e.toThemeProperty("jqx-rc-all"));e.host.addClass(e.toThemeProperty("jqx-widget"));e.host.addClass(e.toThemeProperty("jqx-widget-content"));maskEditor=this;if(e.element.nodeName.toLowerCase()=="div"){e.element.innerHTML="";e.maskbox=a("<input autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' type='textarea'/>").appendTo(e.host)}else{e.maskbox=e.host;e.maskbox.attr("autocomplete","off");e.maskbox.attr("autocorrect","off");e.maskbox.attr("autocapitalize","off");e.maskbox.attr("spellcheck",false)}e.maskbox.addClass(e.toThemeProperty("jqx-reset"));e.maskbox.addClass(e.toThemeProperty("jqx-input-content"));e.maskbox.addClass(e.toThemeProperty("jqx-widget-content"));var b=e.host.attr("name");if(b){e.maskbox.attr("name",b)}if(e.rtl){e.maskbox.addClass(e.toThemeProperty("jqx-rtl"))}var d=this;e.propertyChangeMap.disabled=function(g,j,h,k){if(k){g.maskbox.addClass(d.toThemeProperty("jqx-input-disabled"))}else{g.maskbox.removeClass(d.toThemeProperty("jqx-input-disabled"))}};if(e.disabled){e.maskbox.addClass(e.toThemeProperty("jqx-input-disabled"));e.maskbox.attr("disabled",true);e.host.addClass(e.toThemeProperty("jqx-fill-state-disabled"))}e.selectedText="";e.self=this;e.oldValue=e._value();e.items=new Array();e._initializeLiterals();e._render();if(e.value!=null){e.inputValue(e.value.toString())}var d=this;if(e.host.parents("form").length>0){e.host.parents("form").on("reset",function(){setTimeout(function(){d.clearValue()},10)})}e.addHandlers();if(e.cookies){var c=a.jqx.cookie.cookie("maskedInput."+e.element.id);if(c){e.val(c)}}},addHandlers:function(){var d=this;if(a.jqx.mobile.isTouchDevice()){}var b="";var c=function(j,f){var h=String.fromCharCode(f);var k=parseInt(h);var g=true;if(!isNaN(k)){g=true;var e=this.maskbox.val().toString().length;if(e>=this.items.length&&this._selection().length==0){g=false}}if(!j.ctrlKey&&!j.shiftKey&&!j.metaKey){if(f>=65&&f<=90){g=false}}return g};this.addHandler(this.maskbox,"blur",function(e){if(d.inputMode=="simple"){d._exitSimpleInputMode(e,d,false,b);return false}if(d.rtl){d.maskbox.css("direction","ltr")}d.host.removeClass(d.toThemeProperty("jqx-fill-state-focus"));if(d.maskbox.val()!=b){d._raiseEvent(7,e);if(d.cookies){a.jqx.cookie.cookie("maskedInput."+d.element.id,d.maskbox.val())}}});this.addHandler(this.maskbox,"focus",function(e){b=d.maskbox.val();if(d.inputMode=="simple"){d.maskbox[0].value=d._getEditValue();a.data(d.maskbox,"simpleInputMode",true);return false}if(d.rtl){d.maskbox.css("direction","rtl")}d.host.addClass(d.toThemeProperty("jqx-fill-state-focus"))});this.addHandler(this.host,"keydown",function(g){var h=d.readOnly;var f=g.charCode?g.charCode:g.keyCode?g.keyCode:0;if(h||d.disabled){return false}if(d.inputMode!="simple"){var e=d._handleKeyDown(g,f);if(!e){if(g.preventDefault){g.preventDefault()}if(g.stopPropagation){g.stopPropagation()}}return e}else{return c.call(d,g,f)}});this.addHandler(this.host,"keyup",function(f){var g=d.readOnly;var e=f.charCode?f.charCode:f.keyCode?f.keyCode:0;if(g||d.disabled){return true}if(d.inputMode=="simple"){return c.call(d,f,e)}else{if(f.preventDefault){f.preventDefault()}if(f.stopPropagation){f.stopPropagation()}return false}});this.addHandler(this.host,"keypress",function(g){var h=d.readOnly;var f=g.charCode?g.charCode:g.keyCode?g.keyCode:0;if(h||d.disabled){return true}if(d.inputMode=="simple"){return c.call(d,g,f)}else{var e=d._handleKeyPress(g,f);if(!e){if(g.preventDefault){g.preventDefault()}if(g.stopPropagation){g.stopPropagation()}}return e}})},focus:function(){try{this.maskbox.focus()}catch(b){}},_exitSimpleInputMode:function(b,n,h,d){if(n==undefined){n=b.data}if(n==null){return}if(h==undefined){if(b.target!=null&&n.element!=null){if((b.target.id!=undefined&&b.target.id.toString().length>0&&n.host.find("#"+b.target.id).length>0)||b.target==n.element){return}}var f=n.host.offset();var e=f.left;var g=f.top;var c=n.host.width();var l=n.host.height();var o=a(b.target).offset();if(o.left>=e&&o.left<=e+c){if(o.top>=g&&o.top<=g+l){return}}}if(n.disabled||n.readOnly){return}var k=a.data(n.maskbox,"simpleInputMode");if(k==null){return}var j=n.maskbox[0].value;n.val(j);a.data(n.maskbox,"simpleInputMode",null);return false},_getString:function(){var c="";for(var b=0;b<this.items.length;b++){var d=this.items[b].character;if((this.items[b].character==this.promptChar)&&(this.promptChar!=this.items[b].defaultCharacter)){c+=this.items[b].defaultCharacter}else{c+=d}}return c},_initializeLiterals:function(){if(this.mask==undefined||this.mask==null){this.items=new Array();return}this.mask=this.mask.toString();var c=this.mask.length;for(var f=0;f<c;f++){var g=this.mask.substring(f,f+1);var h="";var b=false;if(g=="["){for(var d=f;d<c;d++){var e=this.mask.substring(d,d+1);if(e=="]"){break}}h="("+this.mask.substring(f,d+1)+")";f=d;b=true}if(g=="#"){h="(\\d|[+]|[-])";b=true}else{if(g=="9"||g=="0"){h="\\d";b=true}else{if(g=="$"){b=false}else{if(g=="/"||g==":"){b=false}else{if(g=="A"||g=="a"){h="\\w";b=true}else{if(g=="c"||g=="C"){h=".";b=true}else{if(g=="L"||g=="l"){h="([a-zA-Z])";b=true}}}}}}}var l=this;var k=function(o,n,j){k.character=o;k.regex=n;k.canEdit=j;k.defaultCharacter=l.promptChar};if(b){k(this.promptChar,h,b)}else{k(g,h,b)}this.items.push(k)}},setRegex:function(d,e,b,c){if((d==null||d==undefined)||(e==null||e==undefined)){return}if(d<this.items.length){this.items[d].regex=e;if(b!=null&&b!=undefined){this.items[d].canEdit=b}if(c!=null&&c!=undefined){this.items[d].defaultCharacter=c}}},_match:function(c,b){var d=new RegExp(b,"i");return d.test(c)},_raiseEvent:function(j,c){var d=this.events[j];var e={};e.owner=this;var f=c.charCode?c.charCode:c.keyCode?c.keyCode:0;var b=true;var h=this.readOnly;var g=new a.Event(d);g.owner=this;e.value=this.inputValue();e.text=this.maskedValue();g.args=e;if(j<2||j>6){b=this.host.trigger(g)}return b},_handleKeyPress:function(d,b){var c=this._isSpecialKey(b,d);return c},_insertKey:function(c,h){var d=this._selection();var b=this;if(d.start>=0&&d.start<this.items.length){var f=String.fromCharCode(c);if(c>=65&&c<=90){if(!h.shiftKey){f=f.toLowerCase()}}var g=false;a.each(this.items,function(k,n){if(k<d.start){return}var l=b.items[k];if(!l.canEdit){return}if(b._match(f,l.regex)){if(!g&&d.length>0){for(var e=d.start;e<d.end;e++){if(b.items[e].canEdit){b.items[e].character=b.promptChar}}var o=b._getString();b.maskedValue(o);g=true}l.character=f;var o=b._getString();b.maskedValue(o);if(d.start<b.items.length){b._setSelectionStart(k+1)}return false}else{return false}})}},_deleteSelectedText:function(){var c=this._selection();var b=false;if(c.start>0||c.length>0){for(i=c.start;i<c.end;i++){if(i<this.items.length&&this.items[i].canEdit&&this.items[i].character!=this.promptChar){this.items[i].character=this.promptChar;b=true}}var d=this._getString();this.maskedValue(d);return b}},_saveSelectedText:function(){var b=this._selection();var d="";if(b.start>0||b.length>0){for(i=b.start;i<b.end;i++){if(this.items[i].canEdit){d+=this.items[i].character}}}if(window.clipboardData){window.clipboardData.setData("Text",d)}else{var c=a('<textarea style="position: absolute; left: -1000px; top: -1000px;"/>');c.val(d);a("body").append(c);c.select();setTimeout(function(){document.designMode="off";c.select();c.remove()},100)}return d},_pasteSelectedText:function(){var j=this._selection();var l="";var c=0;var h=j.start;var g="";var f=this;var b=function(k){if(k!=f.selectedText&&k.length>0){f.selectedText=k;if(f.selectedText==null||f.selectedText==undefined){return}}if(j.start>=0||j.length>0){for(i=j.start;i<f.items.length;i++){if(f.items[i].canEdit){if(c<f.selectedText.length){f.items[i].character=f.selectedText[c];c++;h=1+i}}}}var n=f._getString();f.maskedValue(n);if(h<f.items.length){f._setSelectionStart(h)}else{f._setSelectionStart(f.items.length)}};if(window.clipboardData){g=window.clipboardData.getData("Text");b(g)}else{var d=a('<textarea style="position: absolute; left: -1000px; top: -1000px;"/>');a("body").append(d);d.select();var e=this;setTimeout(function(){var k=d.val();b(k);d.remove()},100)}},_handleKeyDown:function(k,o){var n=this._selection();if(o>=96&&o<=105){o=o-48}var d=k.ctrlKey||k.metaKey;if((d&&o==97)||(d&&o==65)){return true}if((d&&o==120)||(d&&o==88)){this.selectedText=this._saveSelectedText(k);this._deleteSelectedText(k);if(a.jqx.browser.msie){return false}return true}if((d&&o==99)||(d&&o==67)){this.selectedText=this._saveSelectedText(k);if(a.jqx.browser.msie){return false}return true}if((d&&o==122)||(d&&o==90)){return false}if((d&&o==118)||(d&&o==86)||(k.shiftKey&&o==45)){this._pasteSelectedText();if(a.jqx.browser.msie){return false}return true}if(n.start>=0&&n.start<this.items.length){var g=String.fromCharCode(o);var p=this.items[n.start]}if(o==8){if(n.length==0){for(j=this.items.length-1;j>=0;j--){if(this.items[j].canEdit&&j<n.end&&this.items[j].character!=this.promptChar){this._setSelection(j,j+1);break}}}n=this._selection();var h=this._deleteSelectedText();if(n.start>0||n.length>0){if(n.start<=this.items.length){if(h){this._setSelectionStart(n.start)}else{this._setSelectionStart(n.start-1)}}}return false}if(o==190){var c=n.start;for(var j=c;j<this.items.length;j++){if(this.items[j].character=="."){this._setSelectionStart(j+1);break}}}if(o==191){var c=n.start;for(var j=c;j<this.items.length;j++){if(this.items[j].character=="/"){this._setSelectionStart(j+1);break}}}if(o==189){var c=n.start;for(var j=c;j<this.items.length;j++){if(this.items[j].character=="-"){this._setSelectionStart(j+1);break}}}if(o==46){if(n.length==0){for(var j=0;j<this.items.length;j++){if(this.items[j].canEdit&&j>=n.start&&this.items[j].character!=this.promptChar){this._setSelection(j,j+1);break}}}var b=n;n=this._selection();var f=this._deleteSelectedText();if(n.start>=0||n.length>=0){if(n.start<this.items.length){if(n.length<=1){if(b.end!=n.end){this._setSelectionStart(n.end)}else{this._setSelectionStart(n.end+1)}}else{this._setSelectionStart(n.start)}}}return false}this._insertKey(o,k);var l=this._isSpecialKey(o,k);return l},_isSpecialKey:function(b,c){if(b==189||b==9||b==13||b==35||b==36||b==37||b==39||b==46){return true}if((b===16&&c.shiftKey)||c.ctrlKey||c.metaKey){return true}return false},_selection:function(){if("selectionStart" in this.maskbox[0]){var f=this.maskbox[0];var g=f.selectionEnd-f.selectionStart;return{start:f.selectionStart,end:f.selectionEnd,length:g,text:f.value}}else{var c=document.selection.createRange();if(c==null){return{start:0,end:f.value.length,length:0}}var b=this.maskbox[0].createTextRange();var d=b.duplicate();b.moveToBookmark(c.getBookmark());d.setEndPoint("EndToStart",b);var g=c.text.length;return{start:d.text.length,end:d.text.length+c.text.length,length:g,text:c.text}}},_setSelection:function(d,b){if("selectionStart" in this.maskbox[0]){this.maskbox[0].focus();this.maskbox[0].setSelectionRange(d,b)}else{var c=this.maskbox[0].createTextRange();c.collapse(true);c.moveEnd("character",b);c.moveStart("character",d);c.select()}},_setSelectionStart:function(b){this._setSelection(b,b)},refresh:function(b){if(!b){this._render()}},resize:function(c,b){this.width=c;this.height=b;this.refresh()},_render:function(){var c=parseInt(this.host.css("border-left-width"));var g=parseInt(this.host.css("border-left-width"));var f=parseInt(this.host.css("border-left-width"));var d=parseInt(this.host.css("border-left-width"));var j=parseInt(this.host.css("height"))-f-d;var e=parseInt(this.host.css("width"))-c-g;if(this.width!=null&&this.width.toString().indexOf("px")!=-1){e=this.width}else{if(this.width!=undefined&&!isNaN(this.width)){e=this.width}}if(this.height!=null&&this.height.toString().indexOf("px")!=-1){j=this.height}else{if(this.height!=undefined&&!isNaN(this.height)){j=this.height}}e=parseInt(e);j=parseInt(j);if(this.maskbox[0]!=this.element){this.maskbox.css({"border-left-width":0,"border-right-width":0,"border-bottom-width":0,"border-top-width":0})}this.maskbox.css("text-align",this.textAlign);var k=this.maskbox.css("font-size");if(!isNaN(j)){this.maskbox.css("height",parseInt(k)+4+"px")}if(!isNaN(e)){this.maskbox.css("width",e-2)}var h=parseInt(j)-2*parseInt(f)-2*parseInt(d)-parseInt(k);if(isNaN(h)){h=0}if(!isNaN(j)){this.host.height(j)}if(!isNaN(e)){this.host.width(e)}if(this.maskbox[0]!=this.element){var b=h/2;if(a.jqx.browser.msie&&a.jqx.browser.version<8){b=h/4}this.maskbox.css("padding-right","0px");this.maskbox.css("padding-left","0px");this.maskbox.css("padding-top",b);this.maskbox.css("padding-bottom",h/2)}this.maskbox[0].value=this._getString();if(this.width){if(this.width.toString().indexOf("%")>=0){this.element.style.width=this.width}if(this.height.toString().indexOf("%")>=0){this.element.style.height=this.height}}},destroy:function(){this.host.remove()},maskedValue:function(b){if(b===undefined){return this._value()}this.value=b;this._refreshValue();if(this.oldValue!==b){this._raiseEvent(1,b);this.oldValue=b;this._raiseEvent(0,b)}return this},_value:function(){var b=this.maskbox.val();return b},propertyChangedHandler:function(c,d,b,e){if(this.isInitialized==undefined||this.isInitialized==false){return}if(d=="rtl"){if(c.rtl){c.maskbox.addClass(c.toThemeProperty("jqx-rtl"))}else{c.maskbox.removeClass(c.toThemeProperty("jqx-rtl"))}}if(d==="value"){if(e==undefined||e==null){e=""}if(e===""){this.clear()}else{e=e.toString();this.inputValue(e)}c._raiseEvent(7,e)}if(d==="theme"){a.jqx.utilities.setTheme(b,e,this.host)}if(d=="disabled"){if(e){c.maskbox.addClass(c.toThemeProperty("jqx-input-disabled"));c.host.addClass(c.toThemeProperty("jqx-fill-state-disabled"));c.maskbox.attr("disabled",true)}else{c.host.removeClass(this.toThemeProperty("jqx-fill-state-disabled"));c.host.removeClass(this.toThemeProperty("jqx-input-disabled"));c.maskbox.attr("disabled",false)}a.jqx.aria(c,"aria-disabled",e)}if(d=="readOnly"){this.readOnly=e}if(d=="promptChar"){for(i=0;i<c.items.length;i++){if(c.items[i].character==c.promptChar){c.items[i].character=e;c.items[i].defaultCharacter=e}}c.promptChar=e}if(d=="textAlign"){c.maskbox.css("text-align",e);c.textAlign=e}if(d=="mask"){c.mask=e;c.items=new Array();c._initializeLiterals();c.value=c._getString();c._refreshValue()}if(d=="width"){c.width=e;c._render()}else{if(d=="height"){c.height=e;c._render()}}},_value:function(){var b=this.value;return b},_getEditStringLength:function(){var b="";for(i=0;i<this.items.length;i++){if(this.items[i].canEdit){b+=this.items[i].character}}return b.length},_getEditValue:function(){var b="";for(i=0;i<this.items.length;i++){if(this.items[i].canEdit&&this.items[i].character!=this.promptChar){b+=this.items[i].character}}return b},parseValue:function(e){if(e==undefined||e==null){return null}var c=e.toString();var f="";var b=0;for(m=0;m<c.length;m++){var d=c.substring(m,m+1);for(i=b;i<this.items.length;i++){if(this.items[i].canEdit&&this._match(d,this.items[i].regex)){f+=d;b=i;break}}}return f},clear:function(){this.clearValue()},clearValue:function(){this.inputValue("",true)},val:function(b){if(b!=undefined&&typeof b!="object"){if(typeof b==="number"&&isFinite(b)){b=b.toString()}this.maskedValue(b)}return this.maskbox[0].value},inputValue:function(g,c){if(g==undefined||g==null){var f="";for(var e=0;e<this.items.length;e++){if(this.items[e].canEdit){f+=this.items[e].character}}return f}else{var b=0;g=g.toString();for(var e=0;e<this.items.length;e++){if(this.items[e].canEdit){if(this._match(g.substring(b,b+1),this.items[e].regex)){this.items[e].character=g.substring(b,b+1);b++}else{if(c){this.items[e].character=this.promptChar;b++}}}}var d=this._getString();this.maskedValue(d);return this.inputValue()}},_refreshValue:function(){var d=this.maskedValue();var b=0;for(var c=0;c<this.items.length;c++){if(d.length>b){if(this.items[c].canEdit&&this.items[c].character!=d[b]){if((this._match(d[b],this.items[c].regex)||d[b]==this.promptChar)&&d[b].length==1){this.items[c].character=d[b]}}b++}}this.value=this._getString();d=this.value;this.maskbox[0].value=d;a.jqx.aria(this,"aria-valuenow",d)}})})(jqxBaseFramework);
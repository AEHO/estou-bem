!function e(n,t,r){function o(i,a){if(!t[i]){if(!n[i]){var u="function"==typeof require&&require;if(!a&&u)return u(i,!0);if(s)return s(i,!0);throw new Error("Cannot find module '"+i+"'")}var l=t[i]={exports:{}};n[i][0].call(l.exports,function(e){var t=n[i][1][e];return o(t?t:e)},l,l.exports,e,n,t,r)}return t[i].exports}for(var s="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,n,t){(function(){var e=function(e){e("#estou-mal").on("click",function(){var n=e(this);n.text("Enviando alerta..."),setTimeout(function(){n.text("Alerta enviado"),n.addClass("sent")},5e3)}),function(){function n(){return{horaInicial:e("#hora-inicial",t).val(),horaFinal:e("#hora-final",t).val(),repeticoes:e("#repeticoes",t).val()}}var t=e("#config-alarm");e("#btn-salvar-config",t).click(function(){n();document.location.href="/#main"})}()}($);t.events=e}).call(this,e("/home/mateus/dev/estou-bem/frontend/node_modules/gulp-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/event.js","/")},{"/home/mateus/dev/estou-bem/frontend/node_modules/gulp-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":11,buffer:8}],2:[function(e){(function(){!function(){var n={alarm:{template:e("./templates/alarm.html"),destination:"#alarm",data:{message:""}},navbar:{template:e("./templates/navbar.html"),destination:"#navbar",data:{}},configAlarme:{template:e("./templates/config-alarme.html"),destination:"#config-alarm",data:{}},main:{template:e("./templates/main.html"),destination:"#main",data:{}},profile:{template:e("./templates/profile.html"),destination:"#profile",data:{}}},t=function(e,n){if("undefined"==typeof n)throw new Error("coloca o hidden mano");console.log(e);var t=$(e);return n?(console.log("mostrar"),t.hide().removeClass("hidden").fadeIn()):(console.log("tirar"),t.fadeOut())},r=function(e){$.each(e,function(e,n){n.html=n.template.render(n.data),$(n.destination).html(n.html)})};"#"!==document.location.hash&&document.location.hash?t(document.location.hash,!0):t("#config-alarm",!0),$(window).on("hashchange",function(){t(document.location.hash,!0)}),r(n)}();e("./event.js")}).call(this,e("/home/mateus/dev/estou-bem/frontend/node_modules/gulp-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_8bf9fb0.js","/")},{"./event.js":1,"./templates/alarm.html":3,"./templates/config-alarme.html":4,"./templates/main.html":5,"./templates/navbar.html":6,"./templates/profile.html":7,"/home/mateus/dev/estou-bem/frontend/node_modules/gulp-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":11,buffer:8}],3:[function(e,n){(function(){var t=new(e("hogan.js/lib/template").Template)(function(e,n,t){var r=this;return r.b(t=t||""),r.b('<div class="container text-center" id="alarm">'),r.b("\n"+t),r.b("	<div class='row'>"),r.b("\n"+t),r.b('		<div class="col-xs-12">'),r.b("\n"+t),r.b("			<h1>Você está bem?</h1>"),r.b("\n"+t),r.b("			<hr>"),r.b("\n"+t),r.b('			<button class="btn btn-round" id="estou-bem">Sim</button>'),r.b("\n"+t),r.b("		</div>"),r.b("\n"+t),r.b('		<div class="col-xs-12">'),r.b("\n"+t),r.b('			<button class="btn btn-round" id="estou-mal">Não</button>'),r.b("\n"+t),r.b("		</div>"),r.b("\n"+t),r.b("		"),r.b("\n"+t),r.b("	</div>"),r.b("\n"+t),r.b("</div>"),r.fl()});n.exports={render:function(){return t.render.apply(t,arguments)},r:function(){return t.r.apply(t,arguments)},ri:function(){return t.ri.apply(t,arguments)}}}).call(this,e("/home/mateus/dev/estou-bem/frontend/node_modules/gulp-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/templates/alarm.html","/templates")},{"/home/mateus/dev/estou-bem/frontend/node_modules/gulp-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":11,buffer:8,"hogan.js/lib/template":12}],4:[function(e,n){(function(){var t=new(e("hogan.js/lib/template").Template)(function(e,n,t){var r=this;return r.b(t=t||""),r.b("<h1>Configuração de Alarme</h1>"),r.b("\n"+t),r.b('<ul class="list-unstyled">'),r.b("\n"+t),r.b("    <li>"),r.b("\n"+t),r.b("        <label>Hora Inicial</label>"),r.b("\n"+t),r.b('        <input placeholder="Hora Inicial" type="time" id="hora-inicial" class="form-control">'),r.b("\n"+t),r.b("    </li>"),r.b("\n"+t),r.b("    <li>"),r.b("\n"+t),r.b("        <label>Hora Final</label>"),r.b("\n"+t),r.b('        <input placeholder="ex: " type="time" id="hora-final" class="form-control">'),r.b("\n"+t),r.b("    </li>"),r.b("\n"+t),r.b("    <li>"),r.b("\n"+t),r.b("        <label>Período</label>"),r.b("\n"+t),r.b('        <input placeholder="horas" type="number" id="repeticoes" class="form-control">'),r.b("\n"+t),r.b("    </li>"),r.b("\n"+t),r.b("</ul>"),r.b("\n"+t),r.b("\n"+t),r.b('<div class="row text-center">'),r.b("\n"+t),r.b('    <button class="btn btn-success text-center" id="btn-salvar-config">Salvar</button>'),r.b("\n"+t),r.b("</div>"),r.b("\n"),r.fl()});n.exports={render:function(){return t.render.apply(t,arguments)},r:function(){return t.r.apply(t,arguments)},ri:function(){return t.ri.apply(t,arguments)}}}).call(this,e("/home/mateus/dev/estou-bem/frontend/node_modules/gulp-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/templates/config-alarme.html","/templates")},{"/home/mateus/dev/estou-bem/frontend/node_modules/gulp-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":11,buffer:8,"hogan.js/lib/template":12}],5:[function(e,n){(function(){var t=new(e("hogan.js/lib/template").Template)(function(e,n,t){var r=this;return r.b(t=t||""),r.b('<div class="container">'),r.b("\n"+t),r.b('    <div class="row">'),r.b("\n"+t),r.b('        <button class="btn btn-round" id="estou-mal">Não estou bem</button>'),r.b("\n"+t),r.b('        <ul class="nav nav-pills nav-stacked">'),r.b("\n"+t),r.b("        	<li>"),r.b("\n"+t),r.b('        		<a href="#profile">Perfil</a>'),r.b("\n"+t),r.b("        	</li>"),r.b("\n"+t),r.b("        	<li>"),r.b("\n"+t),r.b('        		<a href="#">Home</a>'),r.b("\n"+t),r.b("        	</li>"),r.b("\n"+t),r.b("        	<li>"),r.b("\n"+t),r.b('        		<a href="#">Ajuda</a>'),r.b("\n"+t),r.b("        	</li>"),r.b("\n"+t),r.b("		</ul>"),r.b("\n"+t),r.b("    </div>"),r.b("\n"+t),r.b("</div>"),r.b("\n"),r.fl()});n.exports={render:function(){return t.render.apply(t,arguments)},r:function(){return t.r.apply(t,arguments)},ri:function(){return t.ri.apply(t,arguments)}}}).call(this,e("/home/mateus/dev/estou-bem/frontend/node_modules/gulp-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/templates/main.html","/templates")},{"/home/mateus/dev/estou-bem/frontend/node_modules/gulp-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":11,buffer:8,"hogan.js/lib/template":12}],6:[function(e,n){(function(){var t=new(e("hogan.js/lib/template").Template)(function(e,n,t){var r=this;return r.b(t=t||""),r.b('<nav class="navbar navbar-default '),r.b(r.v(r.f("classes",e,n,0))),r.b('" role="navigation" id="navbar">'),r.b("\n"+t),r.b('  <div class="container-fluid">'),r.b("\n"+t),r.b("    <!-- Brand and toggle get grouped for better mobile display -->"),r.b("\n"+t),r.b("\n"+t),r.b('    <div class="navbar-header">'),r.b("\n"+t),r.b('      <a class="navbar-brand" href="#">Estou Bem</a>'),r.b("\n"+t),r.b('      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">'),r.b("\n"+t),r.b('        <span class="sr-only">Toggle navigation</span>'),r.b("\n"+t),r.b('        <span class="icon-bar"></span>'),r.b("\n"+t),r.b('        <span class="icon-bar"></span>'),r.b("\n"+t),r.b('        <span class="icon-bar"></span>'),r.b("\n"+t),r.b("      </button>"),r.b("\n"+t),r.b("    </div>"),r.b("\n"+t),r.b("\n"+t),r.b('    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">'),r.b("\n"+t),r.b("    "),r.b("\n"+t),r.b('        <ul class="nav navbar-nav">'),r.b("\n"+t),r.b("          <li>"),r.b("\n"+t),r.b('            <a href="#profile">Perfil</a>'),r.b("\n"+t),r.b("          </li>"),r.b("\n"+t),r.b("          <li>"),r.b("\n"+t),r.b('            <a href="#">Home</a>'),r.b("\n"+t),r.b("          </li>"),r.b("\n"+t),r.b("          <li>"),r.b("\n"+t),r.b('            <a href="#">Ajuda</a>'),r.b("\n"+t),r.b("          </li>"),r.b("\n"+t),r.b("        </ul>"),r.b("\n"+t),r.b("      </div>"),r.b("\n"+t),r.b("    </div>"),r.b("\n"+t),r.b("\n"+t),r.b("    <!-- Collect the nav links, forms, and other content for toggling -->"),r.b("\n"+t),r.b("  </div><!-- /.container-fluid -->"),r.b("\n"+t),r.b("</nav>"),r.fl()});n.exports={render:function(){return t.render.apply(t,arguments)},r:function(){return t.r.apply(t,arguments)},ri:function(){return t.ri.apply(t,arguments)}}}).call(this,e("/home/mateus/dev/estou-bem/frontend/node_modules/gulp-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/templates/navbar.html","/templates")},{"/home/mateus/dev/estou-bem/frontend/node_modules/gulp-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":11,buffer:8,"hogan.js/lib/template":12}],7:[function(e,n){(function(){var t=new(e("hogan.js/lib/template").Template)(function(e,n,t){var r=this;return r.b(t=t||""),r.b('<div class="container">'),r.b("\n"+t),r.b('    <div class="row">'),r.b("\n"+t),r.b("        <h1>Perfil do Usuário</h1>"),r.b("\n"+t),r.b('        <div class="col-xs-12">'),r.b("\n"+t),r.b("            <label>Nome</label>"),r.b("\n"+t),r.b('            <input placeholder="Nome " value="'),r.b(r.v(r.f("name",e,n,0))),r.b('" >'),r.b("\n"+t),r.b("        </div>"),r.b("\n"+t),r.b("    </div>"),r.b("\n"+t),r.b("</div>"),r.b("\n"),r.fl()});n.exports={render:function(){return t.render.apply(t,arguments)},r:function(){return t.r.apply(t,arguments)},ri:function(){return t.ri.apply(t,arguments)}}}).call(this,e("/home/mateus/dev/estou-bem/frontend/node_modules/gulp-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/templates/profile.html","/templates")},{"/home/mateus/dev/estou-bem/frontend/node_modules/gulp-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":11,buffer:8,"hogan.js/lib/template":12}],8:[function(e,n,t){(function(n,r,o){function o(e,n,t){if(!(this instanceof o))return new o(e,n,t);var r=typeof e;if("base64"===n&&"string"===r)for(e=x(e);e.length%4!==0;)e+="=";var s;if("number"===r)s=S(e);else if("string"===r)s=o.byteLength(e,n);else{if("object"!==r)throw new Error("First argument needs to be a number, array or string.");s=S(e.length)}var i;o._useTypedArrays?i=o._augment(new Uint8Array(s)):(i=this,i.length=s,i._isBuffer=!0);var a;if(o._useTypedArrays&&"number"==typeof e.byteLength)i._set(e);else if(k(e))for(a=0;s>a;a++)i[a]=o.isBuffer(e)?e.readUInt8(a):e[a];else if("string"===r)i.write(e,0,n);else if("number"===r&&!o._useTypedArrays&&!t)for(a=0;s>a;a++)i[a]=0;return i}function s(e,n,t,r){t=Number(t)||0;var s=e.length-t;r?(r=Number(r),r>s&&(r=s)):r=s;var i=n.length;J(i%2===0,"Invalid hex string"),r>i/2&&(r=i/2);for(var a=0;r>a;a++){var u=parseInt(n.substr(2*a,2),16);J(!isNaN(u),"Invalid hex string"),e[t+a]=u}return o._charsWritten=2*a,a}function i(e,n,t,r){var s=o._charsWritten=P(N(n),e,t,r);return s}function a(e,n,t,r){var s=o._charsWritten=P(F(n),e,t,r);return s}function u(e,n,t,r){return a(e,n,t,r)}function l(e,n,t,r){var s=o._charsWritten=P(O(n),e,t,r);return s}function f(e,n,t,r){var s=o._charsWritten=P(D(n),e,t,r);return s}function d(e,n,t){return R.fromByteArray(0===n&&t===e.length?e:e.slice(n,t))}function b(e,n,t){var r="",o="";t=Math.min(e.length,t);for(var s=n;t>s;s++)e[s]<=127?(r+=q(o)+String.fromCharCode(e[s]),o=""):o+="%"+e[s].toString(16);return r+q(o)}function c(e,n,t){var r="";t=Math.min(e.length,t);for(var o=n;t>o;o++)r+=String.fromCharCode(e[o]);return r}function m(e,n,t){return c(e,n,t)}function h(e,n,t){var r=e.length;(!n||0>n)&&(n=0),(!t||0>t||t>r)&&(t=r);for(var o="",s=n;t>s;s++)o+=M(e[s]);return o}function p(e,n,t){for(var r=e.slice(n,t),o="",s=0;s<r.length;s+=2)o+=String.fromCharCode(r[s]+256*r[s+1]);return o}function g(e,n,t,r){r||(J("boolean"==typeof t,"missing or invalid endian"),J(void 0!==n&&null!==n,"missing offset"),J(n+1<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(n>=o)){var s;return t?(s=e[n],o>n+1&&(s|=e[n+1]<<8)):(s=e[n]<<8,o>n+1&&(s|=e[n+1])),s}}function w(e,n,t,r){r||(J("boolean"==typeof t,"missing or invalid endian"),J(void 0!==n&&null!==n,"missing offset"),J(n+3<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(n>=o)){var s;return t?(o>n+2&&(s=e[n+2]<<16),o>n+1&&(s|=e[n+1]<<8),s|=e[n],o>n+3&&(s+=e[n+3]<<24>>>0)):(o>n+1&&(s=e[n+1]<<16),o>n+2&&(s|=e[n+2]<<8),o>n+3&&(s|=e[n+3]),s+=e[n]<<24>>>0),s}}function y(e,n,t,r){r||(J("boolean"==typeof t,"missing or invalid endian"),J(void 0!==n&&null!==n,"missing offset"),J(n+1<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(n>=o)){var s=g(e,n,t,!0),i=32768&s;return i?-1*(65535-s+1):s}}function v(e,n,t,r){r||(J("boolean"==typeof t,"missing or invalid endian"),J(void 0!==n&&null!==n,"missing offset"),J(n+3<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(n>=o)){var s=w(e,n,t,!0),i=2147483648&s;return i?-1*(4294967295-s+1):s}}function _(e,n,t,r){return r||(J("boolean"==typeof t,"missing or invalid endian"),J(n+3<e.length,"Trying to read beyond buffer length")),X.read(e,n,t,23,4)}function E(e,n,t,r){return r||(J("boolean"==typeof t,"missing or invalid endian"),J(n+7<e.length,"Trying to read beyond buffer length")),X.read(e,n,t,52,8)}function I(e,n,t,r,o){o||(J(void 0!==n&&null!==n,"missing value"),J("boolean"==typeof r,"missing or invalid endian"),J(void 0!==t&&null!==t,"missing offset"),J(t+1<e.length,"trying to write beyond buffer length"),H(n,65535));var s=e.length;if(!(t>=s))for(var i=0,a=Math.min(s-t,2);a>i;i++)e[t+i]=(n&255<<8*(r?i:1-i))>>>8*(r?i:1-i)}function B(e,n,t,r,o){o||(J(void 0!==n&&null!==n,"missing value"),J("boolean"==typeof r,"missing or invalid endian"),J(void 0!==t&&null!==t,"missing offset"),J(t+3<e.length,"trying to write beyond buffer length"),H(n,4294967295));var s=e.length;if(!(t>=s))for(var i=0,a=Math.min(s-t,4);a>i;i++)e[t+i]=n>>>8*(r?i:3-i)&255}function A(e,n,t,r,o){o||(J(void 0!==n&&null!==n,"missing value"),J("boolean"==typeof r,"missing or invalid endian"),J(void 0!==t&&null!==t,"missing offset"),J(t+1<e.length,"Trying to write beyond buffer length"),W(n,32767,-32768));var s=e.length;t>=s||(n>=0?I(e,n,t,r,o):I(e,65535+n+1,t,r,o))}function j(e,n,t,r,o){o||(J(void 0!==n&&null!==n,"missing value"),J("boolean"==typeof r,"missing or invalid endian"),J(void 0!==t&&null!==t,"missing offset"),J(t+3<e.length,"Trying to write beyond buffer length"),W(n,2147483647,-2147483648));var s=e.length;t>=s||(n>=0?B(e,n,t,r,o):B(e,4294967295+n+1,t,r,o))}function L(e,n,t,r,o){o||(J(void 0!==n&&null!==n,"missing value"),J("boolean"==typeof r,"missing or invalid endian"),J(void 0!==t&&null!==t,"missing offset"),J(t+3<e.length,"Trying to write beyond buffer length"),$(n,3.4028234663852886e38,-3.4028234663852886e38));var s=e.length;t>=s||X.write(e,n,t,r,23,4)}function U(e,n,t,r,o){o||(J(void 0!==n&&null!==n,"missing value"),J("boolean"==typeof r,"missing or invalid endian"),J(void 0!==t&&null!==t,"missing offset"),J(t+7<e.length,"Trying to write beyond buffer length"),$(n,1.7976931348623157e308,-1.7976931348623157e308));var s=e.length;t>=s||X.write(e,n,t,r,52,8)}function x(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function T(e,n,t){return"number"!=typeof e?t:(e=~~e,e>=n?n:e>=0?e:(e+=n,e>=0?e:0))}function S(e){return e=~~Math.ceil(+e),0>e?0:e}function C(e){return(Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)}function k(e){return C(e)||o.isBuffer(e)||e&&"object"==typeof e&&"number"==typeof e.length}function M(e){return 16>e?"0"+e.toString(16):e.toString(16)}function N(e){for(var n=[],t=0;t<e.length;t++){var r=e.charCodeAt(t);if(127>=r)n.push(e.charCodeAt(t));else{var o=t;r>=55296&&57343>=r&&t++;for(var s=encodeURIComponent(e.slice(o,t+1)).substr(1).split("%"),i=0;i<s.length;i++)n.push(parseInt(s[i],16))}}return n}function F(e){for(var n=[],t=0;t<e.length;t++)n.push(255&e.charCodeAt(t));return n}function D(e){for(var n,t,r,o=[],s=0;s<e.length;s++)n=e.charCodeAt(s),t=n>>8,r=n%256,o.push(r),o.push(t);return o}function O(e){return R.toByteArray(e)}function P(e,n,t,r){for(var o=0;r>o&&!(o+t>=n.length||o>=e.length);o++)n[o+t]=e[o];return o}function q(e){try{return decodeURIComponent(e)}catch(n){return String.fromCharCode(65533)}}function H(e,n){J("number"==typeof e,"cannot write a non-number as a number"),J(e>=0,"specified a negative value for writing an unsigned value"),J(n>=e,"value is larger than maximum value for type"),J(Math.floor(e)===e,"value has a fractional component")}function W(e,n,t){J("number"==typeof e,"cannot write a non-number as a number"),J(n>=e,"value larger than maximum allowed value"),J(e>=t,"value smaller than minimum allowed value"),J(Math.floor(e)===e,"value has a fractional component")}function $(e,n,t){J("number"==typeof e,"cannot write a non-number as a number"),J(n>=e,"value larger than maximum allowed value"),J(e>=t,"value smaller than minimum allowed value")}function J(e,n){if(!e)throw new Error(n||"Failed assertion")}var R=e("base64-js"),X=e("ieee754");t.Buffer=o,t.SlowBuffer=o,t.INSPECT_MAX_BYTES=50,o.poolSize=8192,o._useTypedArrays=function(){try{var e=new ArrayBuffer(0),n=new Uint8Array(e);return n.foo=function(){return 42},42===n.foo()&&"function"==typeof n.subarray}catch(t){return!1}}(),o.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.isBuffer=function(e){return!(null===e||void 0===e||!e._isBuffer)},o.byteLength=function(e,n){var t;switch(e+="",n||"utf8"){case"hex":t=e.length/2;break;case"utf8":case"utf-8":t=N(e).length;break;case"ascii":case"binary":case"raw":t=e.length;break;case"base64":t=O(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":t=2*e.length;break;default:throw new Error("Unknown encoding")}return t},o.concat=function(e,n){if(J(C(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new o(0);if(1===e.length)return e[0];var t;if("number"!=typeof n)for(n=0,t=0;t<e.length;t++)n+=e[t].length;var r=new o(n),s=0;for(t=0;t<e.length;t++){var i=e[t];i.copy(r,s),s+=i.length}return r},o.prototype.write=function(e,n,t,r){if(isFinite(n))isFinite(t)||(r=t,t=void 0);else{var o=r;r=n,n=t,t=o}n=Number(n)||0;var d=this.length-n;t?(t=Number(t),t>d&&(t=d)):t=d,r=String(r||"utf8").toLowerCase();var b;switch(r){case"hex":b=s(this,e,n,t);break;case"utf8":case"utf-8":b=i(this,e,n,t);break;case"ascii":b=a(this,e,n,t);break;case"binary":b=u(this,e,n,t);break;case"base64":b=l(this,e,n,t);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":b=f(this,e,n,t);break;default:throw new Error("Unknown encoding")}return b},o.prototype.toString=function(e,n,t){var r=this;if(e=String(e||"utf8").toLowerCase(),n=Number(n)||0,t=void 0!==t?Number(t):t=r.length,t===n)return"";var o;switch(e){case"hex":o=h(r,n,t);break;case"utf8":case"utf-8":o=b(r,n,t);break;case"ascii":o=c(r,n,t);break;case"binary":o=m(r,n,t);break;case"base64":o=d(r,n,t);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":o=p(r,n,t);break;default:throw new Error("Unknown encoding")}return o},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},o.prototype.copy=function(e,n,t,r){var s=this;if(t||(t=0),r||0===r||(r=this.length),n||(n=0),r!==t&&0!==e.length&&0!==s.length){J(r>=t,"sourceEnd < sourceStart"),J(n>=0&&n<e.length,"targetStart out of bounds"),J(t>=0&&t<s.length,"sourceStart out of bounds"),J(r>=0&&r<=s.length,"sourceEnd out of bounds"),r>this.length&&(r=this.length),e.length-n<r-t&&(r=e.length-n+t);var i=r-t;if(100>i||!o._useTypedArrays)for(var a=0;i>a;a++)e[a+n]=this[a+t];else e._set(this.subarray(t,t+i),n)}},o.prototype.slice=function(e,n){var t=this.length;if(e=T(e,t,0),n=T(n,t,t),o._useTypedArrays)return o._augment(this.subarray(e,n));for(var r=n-e,s=new o(r,void 0,!0),i=0;r>i;i++)s[i]=this[i+e];return s},o.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},o.prototype.set=function(e,n){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,n)},o.prototype.readUInt8=function(e,n){return n||(J(void 0!==e&&null!==e,"missing offset"),J(e<this.length,"Trying to read beyond buffer length")),e>=this.length?void 0:this[e]},o.prototype.readUInt16LE=function(e,n){return g(this,e,!0,n)},o.prototype.readUInt16BE=function(e,n){return g(this,e,!1,n)},o.prototype.readUInt32LE=function(e,n){return w(this,e,!0,n)},o.prototype.readUInt32BE=function(e,n){return w(this,e,!1,n)},o.prototype.readInt8=function(e,n){if(n||(J(void 0!==e&&null!==e,"missing offset"),J(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length)){var t=128&this[e];return t?-1*(255-this[e]+1):this[e]}},o.prototype.readInt16LE=function(e,n){return y(this,e,!0,n)},o.prototype.readInt16BE=function(e,n){return y(this,e,!1,n)},o.prototype.readInt32LE=function(e,n){return v(this,e,!0,n)},o.prototype.readInt32BE=function(e,n){return v(this,e,!1,n)},o.prototype.readFloatLE=function(e,n){return _(this,e,!0,n)},o.prototype.readFloatBE=function(e,n){return _(this,e,!1,n)},o.prototype.readDoubleLE=function(e,n){return E(this,e,!0,n)},o.prototype.readDoubleBE=function(e,n){return E(this,e,!1,n)},o.prototype.writeUInt8=function(e,n,t){t||(J(void 0!==e&&null!==e,"missing value"),J(void 0!==n&&null!==n,"missing offset"),J(n<this.length,"trying to write beyond buffer length"),H(e,255)),n>=this.length||(this[n]=e)},o.prototype.writeUInt16LE=function(e,n,t){I(this,e,n,!0,t)},o.prototype.writeUInt16BE=function(e,n,t){I(this,e,n,!1,t)},o.prototype.writeUInt32LE=function(e,n,t){B(this,e,n,!0,t)},o.prototype.writeUInt32BE=function(e,n,t){B(this,e,n,!1,t)},o.prototype.writeInt8=function(e,n,t){t||(J(void 0!==e&&null!==e,"missing value"),J(void 0!==n&&null!==n,"missing offset"),J(n<this.length,"Trying to write beyond buffer length"),W(e,127,-128)),n>=this.length||(e>=0?this.writeUInt8(e,n,t):this.writeUInt8(255+e+1,n,t))},o.prototype.writeInt16LE=function(e,n,t){A(this,e,n,!0,t)},o.prototype.writeInt16BE=function(e,n,t){A(this,e,n,!1,t)},o.prototype.writeInt32LE=function(e,n,t){j(this,e,n,!0,t)},o.prototype.writeInt32BE=function(e,n,t){j(this,e,n,!1,t)},o.prototype.writeFloatLE=function(e,n,t){L(this,e,n,!0,t)},o.prototype.writeFloatBE=function(e,n,t){L(this,e,n,!1,t)},o.prototype.writeDoubleLE=function(e,n,t){U(this,e,n,!0,t)},o.prototype.writeDoubleBE=function(e,n,t){U(this,e,n,!1,t)},o.prototype.fill=function(e,n,t){if(e||(e=0),n||(n=0),t||(t=this.length),"string"==typeof e&&(e=e.charCodeAt(0)),J("number"==typeof e&&!isNaN(e),"value is not a number"),J(t>=n,"end < start"),t!==n&&0!==this.length){J(n>=0&&n<this.length,"start out of bounds"),J(t>=0&&t<=this.length,"end out of bounds");for(var r=n;t>r;r++)this[r]=e}},o.prototype.inspect=function(){for(var e=[],n=this.length,r=0;n>r;r++)if(e[r]=M(this[r]),r===t.INSPECT_MAX_BYTES){e[r+1]="...";break}return"<Buffer "+e.join(" ")+">"},o.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(o._useTypedArrays)return new o(this).buffer;for(var e=new Uint8Array(this.length),n=0,t=e.length;t>n;n+=1)e[n]=this[n];return e.buffer}throw new Error("Buffer.toArrayBuffer not supported in this browser")};var Y=o.prototype;o._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=Y.get,e.set=Y.set,e.write=Y.write,e.toString=Y.toString,e.toLocaleString=Y.toString,e.toJSON=Y.toJSON,e.copy=Y.copy,e.slice=Y.slice,e.readUInt8=Y.readUInt8,e.readUInt16LE=Y.readUInt16LE,e.readUInt16BE=Y.readUInt16BE,e.readUInt32LE=Y.readUInt32LE,e.readUInt32BE=Y.readUInt32BE,e.readInt8=Y.readInt8,e.readInt16LE=Y.readInt16LE,e.readInt16BE=Y.readInt16BE,e.readInt32LE=Y.readInt32LE,e.readInt32BE=Y.readInt32BE,e.readFloatLE=Y.readFloatLE,e.readFloatBE=Y.readFloatBE,e.readDoubleLE=Y.readDoubleLE,e.readDoubleBE=Y.readDoubleBE,e.writeUInt8=Y.writeUInt8,e.writeUInt16LE=Y.writeUInt16LE,e.writeUInt16BE=Y.writeUInt16BE,e.writeUInt32LE=Y.writeUInt32LE,e.writeUInt32BE=Y.writeUInt32BE,e.writeInt8=Y.writeInt8,e.writeInt16LE=Y.writeInt16LE,e.writeInt16BE=Y.writeInt16BE,e.writeInt32LE=Y.writeInt32LE,e.writeInt32BE=Y.writeInt32BE,e.writeFloatLE=Y.writeFloatLE,e.writeFloatBE=Y.writeFloatBE,e.writeDoubleLE=Y.writeDoubleLE,e.writeDoubleBE=Y.writeDoubleBE,e.fill=Y.fill,e.inspect=Y.inspect,e.toArrayBuffer=Y.toArrayBuffer,e}}).call(this,e("/home/mateus/dev/estou-bem/frontend/node_modules/gulp-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/index.js","/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer")},{"/home/mateus/dev/estou-bem/frontend/node_modules/gulp-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":11,"base64-js":9,buffer:8,ieee754:10}],9:[function(e,n){(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(){"use strict";function t(e){var n=e.charCodeAt(0);return n===i?62:n===a?63:u>n?-1:u+10>n?n-u+26+26:f+26>n?n-f:l+26>n?n-l+26:void 0}function r(e){function n(e){l[d++]=e}var r,o,i,a,u,l;if(e.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var f=e.length;u="="===e.charAt(f-2)?2:"="===e.charAt(f-1)?1:0,l=new s(3*e.length/4-u),i=u>0?e.length-4:e.length;var d=0;for(r=0,o=0;i>r;r+=4,o+=3)a=t(e.charAt(r))<<18|t(e.charAt(r+1))<<12|t(e.charAt(r+2))<<6|t(e.charAt(r+3)),n((16711680&a)>>16),n((65280&a)>>8),n(255&a);return 2===u?(a=t(e.charAt(r))<<2|t(e.charAt(r+1))>>4,n(255&a)):1===u&&(a=t(e.charAt(r))<<10|t(e.charAt(r+1))<<4|t(e.charAt(r+2))>>2,n(a>>8&255),n(255&a)),l}function o(n){function t(n){return e.charAt(n)}function r(e){return t(e>>18&63)+t(e>>12&63)+t(e>>6&63)+t(63&e)}var o,s,i,a=n.length%3,u="";for(o=0,i=n.length-a;i>o;o+=3)s=(n[o]<<16)+(n[o+1]<<8)+n[o+2],u+=r(s);switch(a){case 1:s=n[n.length-1],u+=t(s>>2),u+=t(s<<4&63),u+="==";break;case 2:s=(n[n.length-2]<<8)+n[n.length-1],u+=t(s>>10),u+=t(s>>4&63),u+=t(s<<2&63),u+="="}return u}var s="undefined"!=typeof Uint8Array?Uint8Array:Array,i=("0".charCodeAt(0),"+".charCodeAt(0)),a="/".charCodeAt(0),u="0".charCodeAt(0),l="a".charCodeAt(0),f="A".charCodeAt(0);n.exports.toByteArray=r,n.exports.fromByteArray=o}()}).call(this,e("/home/mateus/dev/estou-bem/frontend/node_modules/gulp-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js","/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib")},{"/home/mateus/dev/estou-bem/frontend/node_modules/gulp-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":11,buffer:8}],10:[function(e,n,t){(function(){t.read=function(e,n,t,r,o){var s,i,a=8*o-r-1,u=(1<<a)-1,l=u>>1,f=-7,d=t?o-1:0,b=t?-1:1,c=e[n+d];for(d+=b,s=c&(1<<-f)-1,c>>=-f,f+=a;f>0;s=256*s+e[n+d],d+=b,f-=8);for(i=s&(1<<-f)-1,s>>=-f,f+=r;f>0;i=256*i+e[n+d],d+=b,f-=8);if(0===s)s=1-l;else{if(s===u)return i?0/0:1/0*(c?-1:1);i+=Math.pow(2,r),s-=l}return(c?-1:1)*i*Math.pow(2,s-r)},t.write=function(e,n,t,r,o,s){var i,a,u,l=8*s-o-1,f=(1<<l)-1,d=f>>1,b=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,c=r?0:s-1,m=r?1:-1,h=0>n||0===n&&0>1/n?1:0;for(n=Math.abs(n),isNaN(n)||1/0===n?(a=isNaN(n)?1:0,i=f):(i=Math.floor(Math.log(n)/Math.LN2),n*(u=Math.pow(2,-i))<1&&(i--,u*=2),n+=i+d>=1?b/u:b*Math.pow(2,1-d),n*u>=2&&(i++,u/=2),i+d>=f?(a=0,i=f):i+d>=1?(a=(n*u-1)*Math.pow(2,o),i+=d):(a=n*Math.pow(2,d-1)*Math.pow(2,o),i=0));o>=8;e[t+c]=255&a,c+=m,a/=256,o-=8);for(i=i<<o|a,l+=o;l>0;e[t+c]=255&i,c+=m,i/=256,l-=8);e[t+c-m]|=128*h}}).call(this,e("/home/mateus/dev/estou-bem/frontend/node_modules/gulp-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js","/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754")},{"/home/mateus/dev/estou-bem/frontend/node_modules/gulp-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":11,buffer:8}],11:[function(e,n){(function(e){function t(){}var e=n.exports={};e.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,n="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};if(n){var t=[];return window.addEventListener("message",function(e){var n=e.source;if((n===window||null===n)&&"process-tick"===e.data&&(e.stopPropagation(),t.length>0)){var r=t.shift();r()}},!0),function(e){t.push(e),window.postMessage("process-tick","*")}}return function(e){setTimeout(e,0)}}(),e.title="browser",e.browser=!0,e.env={},e.argv=[],e.on=t,e.once=t,e.off=t,e.emit=t,e.binding=function(){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(){throw new Error("process.chdir is not supported")}}).call(this,e("/home/mateus/dev/estou-bem/frontend/node_modules/gulp-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/gulp-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js","/../node_modules/gulp-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process")},{"/home/mateus/dev/estou-bem/frontend/node_modules/gulp-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":11,buffer:8}],12:[function(e,n,t){(function(){var e={};
!function(e,n){function t(e){return String(null===e||void 0===e?"":e)}function r(e){return e=t(e),l.test(e)?e.replace(o,"&amp;").replace(s,"&lt;").replace(i,"&gt;").replace(a,"&#39;").replace(u,"&quot;"):e}e.Template=function(e,t,r,o){this.r=e||this.r,this.c=r,this.options=o,this.text=t||"",this.buf=n?[]:""},e.Template.prototype={r:function(){return""},v:r,t:t,render:function(e,n,t){return this.ri([e],n||{},t)},ri:function(e,n,t){return this.r(e,n,t)},rp:function(e,n,t,r){var o=t[e];return o?(this.c&&"string"==typeof o&&(o=this.c.compile(o,this.options)),o.ri(n,t,r)):""},rs:function(e,n,t){var r=e[e.length-1];if(!f(r))return void t(e,n,this);for(var o=0;o<r.length;o++)e.push(r[o]),t(e,n,this),e.pop()},s:function(e,n,t,r,o,s,i){var a;return f(e)&&0===e.length?!1:("function"==typeof e&&(e=this.ls(e,n,t,r,o,s,i)),a=""===e||!!e,!r&&a&&n&&n.push("object"==typeof e?e:n[n.length-1]),a)},d:function(e,n,t,r){var o=e.split("."),s=this.f(o[0],n,t,r),i=null;if("."===e&&f(n[n.length-2]))return n[n.length-1];for(var a=1;a<o.length;a++)s&&"object"==typeof s&&o[a]in s?(i=s,s=s[o[a]]):s="";return r&&!s?!1:(r||"function"!=typeof s||(n.push(i),s=this.lv(s,n,t),n.pop()),s)},f:function(e,n,t,r){for(var o=!1,s=null,i=!1,a=n.length-1;a>=0;a--)if(s=n[a],s&&"object"==typeof s&&e in s){o=s[e],i=!0;break}return i?(r||"function"!=typeof o||(o=this.lv(o,n,t)),o):r?!1:""},ho:function(e,n,t,r,o){var s=this.c,i=this.options;i.delimiters=o;var r=e.call(n,r);return r=null==r?String(r):r.toString(),this.b(s.compile(r,i).render(n,t)),!1},b:n?function(e){this.buf.push(e)}:function(e){this.buf+=e},fl:n?function(){var e=this.buf.join("");return this.buf=[],e}:function(){var e=this.buf;return this.buf="",e},ls:function(e,n,t,r,o,s,i){var a=n[n.length-1],u=null;if(!r&&this.c&&e.length>0)return this.ho(e,a,t,this.text.substring(o,s),i);if(u=e.call(a),"function"==typeof u){if(r)return!0;if(this.c)return this.ho(u,a,t,this.text.substring(o,s),i)}return u},lv:function(e,n,r){var o=n[n.length-1],s=e.call(o);return"function"==typeof s&&(s=t(s.call(o)),this.c&&~s.indexOf("{{"))?this.c.compile(s,this.options).render(o,r):t(s)}};var o=/&/g,s=/</g,i=/>/g,a=/\'/g,u=/\"/g,l=/[&<>\"\']/,f=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}}("undefined"!=typeof t?t:e)}).call(this,e("/home/mateus/dev/estou-bem/frontend/node_modules/gulp-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/hogan.js/lib/template.js","/../node_modules/hogan.js/lib")},{"/home/mateus/dev/estou-bem/frontend/node_modules/gulp-browserify/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":11,buffer:8}]},{},[2]);
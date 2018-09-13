RM.templates['template-common-alert'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t';

		var categories = {
			'type-duplicate':				'category-upgrade',
			'type-create':					'category-upgrade',
			'type-export-pdf':				'category-upgrade',
			'type-export-code':				'category-upgrade',
			'type-more-pages':				'category-upgrade',
			'type-upload-fonts':			'category-upgrade',
			'type-custom-seo':				'category-upgrade',
			'type-custom-sharing':			'category-upgrade',
			'type-code-injection':			'category-upgrade',
			'type-publish':					'category-confirm-email',
			'type-switch-desktop-create':	'category-mobile',
			'type-switch-desktop-continue':	'category-mobile',
			'type-browsers':				'category-browsers',
			'type-shared-failed':			'category-shared-failed',
			'type-shared-unlock-page':		'category-shared-unlock-page',
		};

		var headers = {
			'category-upgrade':			'Push the Limits',
			'category-upgrade-skip':	'Push the Limits',
			'category-browsers':		'Browser Support',
			'category-shared-failed':	'Sorry, something<br/>went wrong.',
			'category-confirm-email':	'Account Activation',
		};

		var texts = {
			'type-duplicate':				'To duplicate this project you need to upgrade your account. You can find out more about our subscription plans <a href="/pricing" class="learn-more">here</a>.',
			'type-create':					'To create more projects you need to upgrade your account. You can find out more about our subscription plans <a href="/pricing" class="learn-more">here</a>.',
			'type-publish':					'Please verify your email address<br />to publish this project.',
			'type-export-pdf':				'Please upgrade your account<br/>to export the project to PDF.<br/><a href="/pricing" class="learn-more">See the pricing</a>.',
			'type-export-code':				'Please upgrade your account<br/>in order to export the source<br/>code of your projects.<br/><a href="/pricing" class="learn-more">See the pricing</a>.',
			'type-more-pages':				'Please upgrade your account<br/>to create more pages.<br><a href="/pricing" class="learn-more">See the pricing</a>.',
			'type-custom-seo':				'Please upgrade your account<br/> to customize SEO parameters.<br/><a href="/pricing" class="learn-more">See the pricing</a>.',
			'type-custom-sharing':			'Please upgrade your account<br/>to customize social sharing info.<br/><a href="/pricing" class="learn-more">See the pricing</a>.',
			'type-code-injection':			'Please upgrade your account to<br/>make custom code work after<br/>you publish the project.<br/><a href="/pricing" class="learn-more">See the pricing</a>.',
			'type-browsers':				'Sorry, our Editor doesn’t support Internet Explorer. This may change in the future, but for now please use Chrome, Firefox or Safari.',
			'type-switch-desktop-create':	'To create a project, please use your laptop or desktop computer.',
			'type-switch-desktop-continue':	'To continue, please use your laptop or desktop computer.',
			'type-shared-failed':			'Please contact <a href="mailto:support@readymag.com" class="learn-more">support</a>.',
			'type-upload-fonts':			'Please upgrade your account<br/>to upload your own fonts.<br/><a href="/pricing" class="learn-more">See the pricing</a>.',
		};

		var buttons = {
			'category-upgrade':				'<a href="/settings/subscription/update" class="button main upgrade">Upgrade</a><div class="cancel-wrapper">or ' + (opts.type == 'type-code-injection' ? '<span class="button cancel" data-type="skip">Skip</span>' : '<span class="button cancel">Cancel</span>') + '</div>',
			'category-browsers':			'<div class="button main ok">Okay</div>',
			'category-mobile':				'<div class="button main ok">Okay</div>',
			'category-shared-failed':		'<div class="button close">Close</div>',
			'category-shared-unlock-page':	'<div class="button ok">Ok</div>',
			'category-confirm-email':		'<div  class="button main resend">Resend</div><div class="cancel-wrapper">or <span class="button cancel">Cancel</span></div>',
		};

		var category = categories[opts.type]
		var header = headers[category]
		var text = texts[opts.type] || opts.text
		var button = buttons[category]

		if (opts.is_contributor) {
			text = 'Please upgrade owner’s account<br/>to be able to use this feature.'
			button = '<a href="mailto:' + opts.owner_email + '" class="contact-link">Contact owner</a><div class="cancel-wrapper">' + (opts.type == 'type-code-injection' ? 'or <span class="button cancel" data-type="skip">Skip</span>' : '<span class="button cancel">Cancel</span>') + '</div>'
		}

	
__p+='\n\n\t<div class="alert-popup '+
((__t=(category))==null?'':__t)+
'">\n\t\t<div class="panel-wrapper">\n\t\t\t<div class="center-table">\n\t\t\t\t<div class="center-cell">\n\t\t\t\t\t<div class="panel">\n\n\t\t\t\t\t\t'+
((__t=((header ? '<div class="header">' + header + '</div>' : '')))==null?'':__t)+
'\n\n\t\t\t\t\t\t<div class="icon" '+
((__t=((opts.icon ? 'style="background-image:url(' + opts.icon + ')"' : "")))==null?'':__t)+
'></div>\n\n\t\t\t\t\t\t'+
((__t=((text ? '<div class="text">' + text + '</div>' : '')))==null?'':__t)+
'\n\n\t\t\t\t\t\t'+
((__t=((button ? '<div class="buttons">' + button + '</div>' : '')))==null?'':__t)+
'\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-common-audio-player-standard'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t<iframe class="common-audio-player standard" width="100%" height="100%" scrolling="no" frameborder="no" src="'+
((__t=(src))==null?'':_.escape(__t))+
'"></iframe>\n';
}
return __p;
}.apply(this, arguments))};

RM.templates['template-common-audio-player-minimal'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t<div class="common-audio-player minimal loading">\n\n\t\t<div class="sc-artwork-list">\n\t\t\t<div class="sc-loaded-artwork"></div>\n\t\t\t<div class="sc-artworks-overlay"></div>\n\t\t</div>\n\n\t\t<div class="sc-info">\n\t\t\t<h3></h3>\n\t\t\t<h4></h4>\n\t\t</div>\n\n\t\t<div class="sc-scrubber no-rmswipe">\n\t\t\t<div class="sc-hover-indicator"></div>\n\t\t\t<div class="sc-time-span">\n\t\t\t\t<div class="sc-buffer"></div>\n\t\t\t\t<div class="sc-played"></div>\n\t\t\t\t<div class="sc-button-wrapper">\n\t\t\t\t\t<div class="sc-button">\n\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="12" height="12"><path d="M0 0 L12 6 L0 12  Z " style="fill:#1d1a1b; stroke:none; stroke-width:0"></path></svg>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="sc-time-indicators">\n\t\t\t\t<span class="sc-left"></span>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n';
}
return __p;
}.apply(this, arguments))};

RM.templates['template-common-audio-player-engine-html5'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t<div class="common-audio-player-engine">\n\t\t<audio preload="auto"></audio>\n\t</div>\n';
}
return __p;
}.apply(this, arguments))};

RM.templates['template-common-audio-player-engine-flash'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t<div class="common-audio-player-engine">\n\t\t<object height="100%" width="100%" id="'+
((__t=(id))==null?'':_.escape(__t))+
'">\n\t\t\t<embed allowscriptaccess="always" height="100%" width="100%" src="'+
((__t=(swf))==null?'':__t)+
'" type="application/x-shockwave-flash" name="'+
((__t=(id))==null?'':_.escape(__t))+
'" />\n\t    </object>\n\t</div>\n';
}
return __p;
}.apply(this, arguments))};

RM.templates['template-common-audio-player-engine-flash-ie'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t<div class="common-audio-player-engine">\n\t\t<object height="100%" width="100%" id="'+
((__t=(id))==null?'':_.escape(__t))+
'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" data="'+
((__t=(swf))==null?'':_.escape(__t))+
'">\n\t\t\t<param name="movie" value="'+
((__t=(swf))==null?'':_.escape(__t))+
'" />\n\t\t\t<param name="allowscriptaccess" value="always" />\n\t\t</object>\n\t</div>\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-common-button-widget'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\n    <div class="common-button" data-id="'+
((__t=(data._id))==null?'':_.escape(__t))+
'">\n\n        <div class="icon"></div>\n\n    </div>\n\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-common-export-code'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t<div class="export-code-popup">\n\t\t<div class="panel-wrapper">\n\t\t\t<div class="close"></div>\n\n\t\t\t<div class="panel">\n\t\t\t\t<div class="header">Export code</div>\n\n\t\t\t\t<!--__magterm-->\n\t\t\t\t<div class="message">Please provide a domain name if the project</br>will be hosted on another server. Typekit</br>fonts will only work on this domain.</div>\n\n\t\t\t\t<input class="domain-input" type="text" placeholder="yourdomain.com"/>\n\n\t\t\t\t<a href="" class="download">\n\t\t\t\t\t<span>Download</span>\n\t\t\t\t\t<div class="rmpreloader">\n\t\t\t\t\t    <div class="arc"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\n\t\t\t\t<ul class="alerts">\n\t\t\t\t\t<li class="alert-item alert-forms">\n\t\t\t\t\t\t<div class="alert-item-icon">\n\t\t\t\t\t\t\t<span class="notification-sign">!</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="alert-text">\n\t\t\t\t\t\t\tForms will not send submitted data to emails, Google Docs, or Mailchimp.<br>Only URL option will work.\n\t\t\t\t\t\t\t<a href="http://help.readymag.com/form/" class="alert-learn-more" target="_blank">Learn more</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n\t</div>\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-common-export-pdf'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t<div class="export-pdf-popup">\n\t\t<div class="panel-wrapper">\n\t\t\t<div class="close"></div>\n\n\t\t\t<div class="panel">\n\t\t\t\t<div class="header">Export to PDF<span>β</span></div>\n\n\t\t\t\t<div class="initial-block">\n\t\t\t\t\t<div class="radio-group">\n\t\t\t\t\t\t<div class="input-wrapper">\n\t\t\t\t\t\t\t<input type="radio" id="export-pdf-all" name="export-pdf-type" value="all" checked><label for="export-pdf-all" class="caption">All Pages</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="input-wrapper">\n\t\t\t\t\t\t\t<input type="radio" id="export-pdf-custom" name="export-pdf-type" value="custom"><label for="export-pdf-custom" class="caption"><input type="text" required="required" placeholder="e.g. 1-8, 11"></label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="errors"></div>\n\n\t\t\t\t\t<div class="create-pdf">Create PDF</div>\n\n\t\t\t\t\t<!--__magterm-->\n\t\t\t\t\t<div class="typekit-issue">Please note that if your projects contains Typekit web fonts they will be replaced by alternatives due to license restrictions.</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="done-block">\n\t\t\t\t\t<!--__magterm-->\n\t\t\t\t\t<div class="message">Your project is being converted.<br/>We will send you the download link to '+
((__t=(email))==null?'':_.escape(__t))+
' when it’s ready.</div>\n\n\t\t\t\t\t<div class="done">Done</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-common-form-button'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t<div class="button">\n\t\t<div class="caption"></div>\n\t\t<svg class="error" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 26"><path d="M17 19.8c-1.4 0-2.6 1.1-2.6 2.6s1.1 2.6 2.6 2.6c1.4 0 2.6-1.1 2.6-2.6S18.4 19.8 17 19.8zM19 0.4h-4L15 17.4h4L19 0.4z"/></svg>\n\t\t<svg class="submitted" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 26"><path d="M31.4 3C30.6 2.3 29.4 2.3 28.6 3l0 0L13.1 18.6l-7.8-7.8 0 0c-0.8-0.7-2-0.7-2.7 0 -0.8 0.8-0.8 2 0 2.7l0 0L13.1 24.1l0.4-0.4h0L31.4 5.8l0 0C32.1 5 32.1 3.8 31.4 3z"/></svg>\n\t</div>\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-common-gift'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\n\t<div class="wrapper">\n\t\t<div class="form-wrapper">\n\t\t\t<div class="clearfix">\n\t\t\t\t<div class="left-column">\n\t\t\t\t\t<div class="choose-gift">CHOOSE GIFT</div>\n\t\t\t\t\t<div class="period-selector">\n\t\t\t\t\t\t<div class="period month active" data-plan="creator_monthly">\n\t\t\t\t\t\t\t<div class="caption">1 Month of<br>Creator plan</div>\n\t\t\t\t\t\t\t<div class="price">$'+
((__t=(month_price))==null?'':__t)+
'</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="period year" data-plan="creator_yearly">\n\t\t\t\t\t\t\t<div class="caption">1 Year of<br>Creator plan</div>\n\t\t\t\t\t\t\t<div class="price">$'+
((__t=(year_price))==null?'':__t)+
'</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="field-wrapper email">\n\t\t\t\t\t\t<div class="caption">EMAIL TO</div>\n\t\t\t\t\t\t<input autocapitalize="off" autocorrect="off" type="email" spellcheck="false" value="" placeholder="@" />\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="field-wrapper from">\n\t\t\t\t\t\t<div class="caption">FROM</div>\n\t\t\t\t\t\t<input autocapitalize="on" autocorrect="off" maxlength="56" type="text" spellcheck="false" value="" placeholder="Name" />\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="field-wrapper message">\n\t\t\t\t\t\t<div class="caption">MESSAGE</div>\n\t\t\t\t\t\t<textarea maxlength="200" placeholder="Optional"></textarea>\n\t\t\t\t\t\t<div class="counter"></div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="field-wrapper send">\n\t\t\t\t\t\t<div class="caption">SEND</div>\n\t\t\t\t\t\t<input readonly type="text"/>\n\t\t\t\t\t\t<div class="formated-date"></div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t\t<div class="right-column">\n\t\t\t\t\t<div class="how-it-looks">HOW IT LOOKS</div>\n\n\t\t\t\t\t<div class="card-cover"></div>\n\n\t\t\t\t\t<div class="card-wrapper new-card clearfix '+
((__t=((!_.isEmpty(existing_card) ? 'hidden' : '')))==null?'':__t)+
'">\n\t\t\t\t\t\t';
 if (!_.isEmpty(existing_card)) { 
__p+='\n\t\t\t\t\t\t\t<div class="card-switcher" data-value="existing-card">Use existing card</div>\n\t\t\t\t\t\t';
 } 
__p+='\n\n\t\t\t\t\t\t<div class="field-wrapper card-name">\n\t\t\t\t\t\t\t<div class="caption">NAME ON CARD</div>\n\t\t\t\t\t\t\t<input type="text" placeholder="Maggie Ready"/>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class="field-wrapper card-number">\n\t\t\t\t\t\t\t<div class="caption">CARD NUMBER</div>\n\t\t\t\t\t\t\t<input type="text" maxlength="19" placeholder="●●●● ●●●● ●●●● ●●●●"/>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class="field-wrapper card-date">\n\t\t\t\t\t\t\t<div class="caption">DATE</div>\n\t\t\t\t\t\t\t<input type="text" maxlength="5" placeholder="MM/YY"/>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class="field-wrapper card-cvc">\n\t\t\t\t\t\t\t<div class="caption">CVC</div>\n\t\t\t\t\t\t\t<input type="text" maxlength="4" placeholder="000"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t';
 if (!_.isEmpty(existing_card)) { 
__p+='\n\t\t\t\t\t\t<div class="card-wrapper existing-card clearfix">\n\t\t\t\t\t\t\t<div class="card-switcher" data-value="new-card">Use new card</div>\n\n\t\t\t\t\t\t\t<div class="field-wrapper card-name">\n\t\t\t\t\t\t\t\t<div class="caption">NAME ON CARD</div>\n\t\t\t\t\t\t\t\t<input type="text" readonly value="'+
((__t=(existing_card.name))==null?'':__t)+
'"/>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class="field-wrapper card-number">\n\t\t\t\t\t\t\t\t<div class="caption">CARD NUMBER</div>\n\t\t\t\t\t\t\t\t<input type="text" readonly value="●●●● ●●●● ●●●● '+
((__t=(existing_card.last4))==null?'':__t)+
'"/>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class="field-wrapper card-type">\n\t\t\t\t\t\t\t\t<div class="caption">&nbsp;</div>\n\t\t\t\t\t\t\t\t<input type="text" readonly value="'+
((__t=(existing_card.brand))==null?'':__t)+
'"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t';
 } 
__p+='\n\n\t\t\t\t\t<div class="secured"><span>Secured by</span><a href="https://stripe.com/" target="_blank"></a></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="bottom-block inactive">\n\t\t\t\t<div class="send-button">Send Gift<div class="rmpreloader"><div class="arc"></div></div></div>\n\t\t\t\t<div class="charge-sum">YOU WILL BE<br/>CHARGED<br/><span>$'+
((__t=(month_price))==null?'':__t)+
'</span></div>\n\t\t\t\t<div class="error"></div>\n\t\t\t</div>\n\n\t\t\t<div class="charging-overlay"></div>\n\t\t</div>\n\n\t\t<div class="congrats-wrapper invisible">\n\t\t\t<div class="subscription">\n\t\t\t\t<div class="caption"></div>\n\t\t\t\t<div class="price"></div>\n\t\t\t</div>\n\n\t\t\t<div class="awesome"></div>\n\n\t\t\t<div class="order-info"><span class="info-email"></span><br/>will get the email with your gift<br/>on <span class="info-date"></span>.<br/><br/>Just in case, the gift code is:<br/><span class="info-code">adf</span></div>\n\n\t\t\t<div class="back-button">Send Another Gift</div>\n\n\t\t</div>\n\t</div>\n\n\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-common-hotspot-widget'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\n    <div class="common-hotspot">\n\n\t    <div class="pin"></div>\n\n    </div>\n\n';
}
return __p;
}.apply(this, arguments))};

RM.templates['template-common-hotspot-widget-mobile-wrapper'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\n    <div class="hotspot-fullscreen-wrapper invisible">\n        <div class="center-table">\n            <div class="center-cell">\n\n            </div>\n        </div>\n    </div>\n\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-common-login'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\n\t<div class="login-popup hidden">\n\n\t\t<div class="login-popup-wrapper">\n\t\t\t<div class="login ljr-panel hidden">\n\t\t\t\t';
 if (!Modernizr.isboxversion) { 
__p+='\n\t\t\t\t\t<div class="header"><a href="/join/" class="link">Join</a> or <span>Log in</span></div>\n\t\t\t\t';
 } else { 
__p+='\n\t\t\t\t\t<div class="header"><span>Log in</span></div>\n\t\t\t\t';
 } 
__p+='\n\t\t\t\t<form method="post" action="/api/redirect" id="login_form">\n\t\t\t\t\t<input name="username" autocapitalize="off" autocorrect="off" required="required" class="email-input input-template"  autocomplete="on" type="email" spellcheck="false" value="" placeholder="Email"/>\n\t\t\t\t\t<input name="password" autocapitalize="off" autocorrect="off" required="required" class="password-input input-template" autocomplete="on"  type="password" spellcheck="false" value=""  placeholder="Password" />\n\t\t\t\t\t<input name="url" type="hidden" value="" />\n\t\t\t\t\t<div class="go">Log in</div>\n\t\t\t\t</form>\n\t\t\t\t';
 if (!Modernizr.isboxversion) { 
__p+='\n\t\t\t\t\t<div class="social-caption">Log in with</div>\n\t\t\t\t\t<div class="social-auth" data-provider=\'facebook\'>\n\t\t\t\t\t\t<span class="icon"></span>\n\t\t\t\t\t\t<span class="buttonText">Facebook</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="social-auth" data-provider=\'google\'>\n\t\t\t\t\t\t<span class="icon"></span>\n\t\t\t\t\t\t<span class="buttonText">Google</span>\n\t\t\t\t\t</div>\n\t\t\t\t';
 } 
__p+='\n\t\t\t\t<a href="/recover/" class="link forgot">Forgot password?</a>\n\t\t\t\t<div class="error">Invalid email or password</div>\n\t\t\t</div>\n\n\n\t\t\t';
 if (!Modernizr.isboxversion) { 
__p+='\n\t\t\t\t<div class="join ljr-panel hidden">\n\t\t\t\t\t<div class="header"><span>Join</span> or <a href="/login/" class="link">Log in</a></div>\n\t\t\t\t\t<input autocapitalize="on"  autocorrect="off" required="required" class="fullname-input input-template for-validate"  maxlength="24" type="text"     spellcheck="false" value="" placeholder="Name" />\n\t\t\t\t\t<input autocapitalize="off" autocorrect="off" required="required" class="email-input input-template for-validate"     type="email"    spellcheck="false" value="" placeholder="Email" />\n\t\t\t\t\t<input autocapitalize="off" autocorrect="off" required="required" class="password-input input-template for-validate"  type="password" spellcheck="false" value="" placeholder="Password" />\n\n\t\t\t\t\t<div class="checkbox-container">\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<input type="checkbox" class="terms-checkbox for-validate" required="required">\n\t\t\t\t\t\t\t<span class="checkmark"></span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<p>I accept Readymag’s\n\t\t\t\t\t\t\t<a href="https://readymag.com/readymag/terms-and-privacy/" target="_blank">Terms and Privacy Policy</a>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class="checkbox-container">\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<input type="checkbox" class="subscribe-checkbox">\n\t\t\t\t\t\t\t<span class="checkmark"></span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<p>Кeep me updated on news and offers</p>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class="go">Join</div>\n\n\t\t\t\t\t<div class="social-caption">Sign up with</div>\n\t\t\t\t\t<div class="social-auth" data-provider=\'facebook\'>\n\t\t\t\t\t\t<span class="icon"></span>\n\t\t\t\t\t\t<span class="buttonText">Facebook</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="social-auth" data-provider=\'google\'>\n\t\t\t\t\t\t<span class="icon"></span>\n\t\t\t\t\t\t<span class="buttonText">Google</span>\n\t\t\t\t\t</div>\n\t\t\t\t<div class="error"></div>\n\n\t\t\t\t</div>\n\t\t\t';
 } 
__p+='\n\n\t\t\t<div class="recover ljr-panel hidden">\n\t\t\t\t<div class="header"><span>Reset Password</span></div>\n\t\t\t\t<div class="wrapper">\n\t\t\t\t\t<div class="info">Please enter your email address and we\'ll send you instructions:</div>\n\t\t\t\t\t<input name="username" autocapitalize="off" autocorrect="off" required="required" class="email-input input-template"  autocomplete="on" type="email" spellcheck="false" value="" placeholder="Email"/>\n\t\t\t\t\t<div class="go">Submit</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="send-message">Done! You should receive an email shortly.</div>\n\t\t\t\t<div class="go-back">Go Back</div>\n\t\t\t</div>\n\n\t\t\t<div class="reset ljr-panel hidden">\n\t\t\t\t<div class="header"><span>Reset Password</span></div>\n\t\t\t\t<input autocapitalize="off" autocorrect="off" required="required" class="new-password-input input-template"  type="password" spellcheck="false" value="" placeholder="New Password" />\n\t\t\t\t<input autocapitalize="off" autocorrect="off" required="required" class="verify-password-input input-template"  type="password" spellcheck="false" value="" placeholder="Verify Password" />\n\t\t\t\t<div class="go">Save</div>\n\t\t\t\t<div class="error"></div>\n\t\t\t</div>\n\n\t\t\t';
 if (!Modernizr.isboxversion) { 
__p+='\n\t\t\t\t<div class="close-popup"></div>\n\t\t\t\t<a href="/" class="link go-main"></a>\n\t\t\t';
 } 
__p+='\n\t\t</div>\n\t</div>\n\n';
}
return __p;
}.apply(this, arguments))};

RM.templates['template-common-login-preloader'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n    <div class="rmpreloader button">\n        <div class="arc"></div>\n    </div>\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-constructor-pages-panel-settings-domain'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t<div class="header-message section">'+
((__t=((type == 'mag') ? 'Сustom domain name' : 'Custom domain for profile page'))==null?'':__t)+
'</div>\n\n\t<div class="initial-preloader rmpreloader section invisible">\n\t\t<div class="shadow"></div>\n\t\t<div class="arc"></div>\n\t</div>\n\n\t<div class="register-switcher section"><span class="registered item active">Use registered</span><span class="dot">•</span><span class="item new">Register new</span></div>\n\n\t<div class="unmap-message section"><span class="unmap-button">Unmap</span> this domain name</div>\n\n\t<div class="test-block section">\n\t\t<input class="domain-input" type="text" spellcheck="false" value="" placeholder="yourdomain.com" />\n\t\t<div class="test-button common-button disabled">Test<div class="rmpreloader"><div class="arc"></div></div></div>\n\t</div>\n\n\t<div class="invalid-domain-message section"><span class="red">Domain name may contain only alphanumeric characters. No directories are allowed.</span><br/><br/><span class="bold">Examples:</span><br/><span class="grey">mydomain.com<br/>www.mydomain.com<br/>readymag.mydomain.com</span></div>\n\n\t<div class="notfound-domain-message section">Domain’s info is not available. Please check if the name is correct. Note, that sometimes it may take few hours for subdomain to be created.</div>\n\n\t<div class="other-user-domain-message section">This domain is already used by <a class="user-button" href="TEMP" target="_blank">TEMP</a>.</div>\n\n\t<!--__magterm-->\n\t<div class="same-user-domain-message section">\n\t\t<span class="red">This domain is already mapped to <span class="entity-type"></span><a class="mag-button" href="TEMP" target="_blank">TEMP</a>. Do you want to switch it to '+
((__t=((type == 'mag') ? 'the current project' : 'your profile'))==null?'':__t)+
'?</span>\n\t\t<div class="switch-button common-button">Yes<div class="rmpreloader"><div class="arc"></div></div></div>\n\t\t<div class="switch-cancel-button">Cancel</div>\n\t</div>\n\n\t<div class="dns-domain-message section">\n\t\t<span class="red">This domain’s <span class="domain-record-type">TEMP</span><span class="domain-set-phrase"> is currently set to </span><span class="domain-set-phrase-unknown invisible"> is not currently set</span><span class="domain-current-value">TEMP</span>. Please change your <span class="domain-record-type">TEMP</span> to <span class="domain-needed-value">TEMP</span> at your registrar settings.</span><br/><br/><span class="grey">After changing the <span class="domain-record-type">TEMP</span> it may take up to 72 hours to update. Please return to these settings after 72 hours and hit “Map Now”.</span>\n\t\t<div class="map-fake-button common-button disabled">Map Now</div>\n\t</div>\n\n\t<!--__magterm-->\n\t<div class="ok-domain-message section">\n\t\t<!--<span class="green">Your domain is pointing to Readymag and can be mapped to this project.</span>-->\n\t\t<span class="green">Your domain is pointing to Readymag and can be mapped to '+
((__t=((type == 'mag') ? 'this project' : 'your profile'))==null?'':__t)+
'.</span>\n\t\t<div class="map-button common-button">Map Now <div class="rmpreloader"><div class="arc"></div></div></div>\n\t\t<div class="map-cancel-button">Cancel</div>\n\t</div>\n\n\t<div class="domain-readonly-block section">\n\t\t<input class="domain-readonly-input" readonly type="text" spellcheck="false" value="" placeholder="yourdomain.com" />\n\t</div>\n\n\n\t<div class="domain-setting favicon section">\n\t\t<div class="caption">\n\t\t\t<span>Favicon</span>\n\t\t</div>\n\t\t<div class="upload-button">\n\t\t\t<span>Clear</span>\n\t\t\t<input class="favicon-uploader" type="file" name="upload" data-url="/api/upload"/>\n\t\t\t<div class="favicon-preloader">\n\t\t\t\t<div class="rmpreloader">\n\t\t\t\t\t<div class="arc"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class="description">Recommended size 256px</div>\n\n\t</div>\n\n\t<div class="domain-setting ssl-setting section">\n\n\t\t<div class="caption">\n\t\t\t<span>SSL</span>\n\t\t</div>\n\n\t\t<div class="description">Secured with an SSL certificate</div>\n\t\t<div class="switcher"></div>\n\n\t</div>\n\n\t<div class="domain-register-block section">\n\t\t<input class="domain-input" type="text" spellcheck="false" value="" placeholder="iwantmyname.com" />\n\t\t<a class="go-button common-button disabled" href="https://iwantmyname.com" target="_blank">Go</a>\n\t\t<div class="register-message">\n\t\tIf you don’t have a domain name, you can<br/>\n\t\teasly purchase one via our official partner<br/>\n\t\tiwantmyname.com using the search field above<br/>\n\t\tand have it automatically set up to work<br/>\n\t\twith Readymag.</div>\n\t</div>\n\n\t<div class="domain-set-bad-message section">Seems like your DNS settings have been changed. This domain’s <span class="domain-record-type">TEMP</span><span class="domain-set-phrase"> is currently set to </span><span class="domain-set-phrase-unknown invisible"> is not currently set</span><span class="domain-current-value">TEMP</span>. Please change the <span class="domain-record-type">TEMP</span> to: <span class="domain-needed-value">TEMP</span></div>\n\n\t<div class="domain-set-notfound-message section">Domain’s info is not available. Please check if the name is correct. Note, that sometimes it may take few hours for subdomain to be created.</div>\n\n\n\t';
 if (!is_contributor) { 
__p+='\n\t<div class="expired-subscription-message section">Please <a class="link" href="/settings/subscription/update">upgrade</a> your account<br/>to map a custom domain.\n\t<div><a class="pricing-link" href="/pricing" target="_blank">See the pricing</a></div>\n\t</div>\n\t';
 } else { 
__p+='\n\t<div class="expired-subscription-message section">Please upgrade owner’s account to map a custom domain.\n\t<div><a class="pricing-link" href="mailto:'+
((__t=( owner_email ))==null?'':__t)+
'">Contact owner</a></div>\n\t</div>\n\t';
 } 
__p+='\n\n\t<!--__magterm-->\n\t<div class="unpublished-message section">In order to use custom domain mapping, you need to publish this project first.</div>\n\n\t<div class="confirm-message section">\n\t\t<span class="black">Are you sure you want<br/>to unmap '+
((__t=((type == 'mag') ? 'this project' : 'your profile'))==null?'':__t)+
' from<br/><span class="domain-name">TEMP</span>?</span>\n\t\t<div class="confirm-unmap-button common-button">Yes<div class="rmpreloader"><div class="arc"></div></div></div>\n\t</div>\n\n\n\t<div class="error-message error-block section">\n\t\t<span class="black">Something went wrong.<br/>Please try again later.</span>\n\t\t<div class="try-again-button common-button">Ok</div>\n\t</div>\n\n\t<div class="dns-not-updated-yet error-block section">\n\t\t<span class="black">Seems like some DNS servers have not been updated yet.<br/>Please try again later.</span>\n\t\t<div class="try-again-button common-button">Ok</div>\n\t</div>\n\n\t<div class="wait-our-dns-server error-block section">\n\t\t<span class="black">Your domain settings are correct, but it seems like our DNS servers have not been updated yet.<br/>Please try again later.</span>\n\t\t<div class="try-again-button common-button">Ok</div>\n\t</div>\n\n\t<!--__magterm-->\n\t<div class="bottom">\n\n\t\t';
 if (type == 'mag') { 
__p+='\n\t\t\t<div class="bottom-ga-gtm-active section">\n\t\t\t\t<div class="input-wrapper ga-block">\n\t\t\t\t\t<div class="caption">Google Analytics</div>\n\t\t\t\t\t<a class="info" target="_blank" href="http://help.readymag.com/ga/"></a>\n\t\t\t\t\t<input autocapitalize="off" autocorrect="off" autocomplete="off" spellcheck="false" type="text" name="ga_id" id="ga_id" placeholder="UA-XXXXXXX-Y">\n\t\t\t\t</div>\n\t\t\t\t<div class="input-wrapper gtm-block">\n\t\t\t\t\t<div class="caption">Google Tag Manager</div>\n\t\t\t\t\t<a class="info" target="_blank" href="http://help.readymag.com/gtm/"></a>\n\t\t\t\t\t<input autocapitalize="off" autocorrect="off" autocomplete="off" spellcheck="false" type="text" name="gtm_id" id="gtm_id" placeholder="GTM-XXXXXX">\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="bottom-ga-gtm-inactive section">\n\t\t\t\t<div class="input-wrapper ga-block">\n\t\t\t\t\t<div class="caption">Google Analytics</div>\n\t\t\t\t\t<a class="info" target="_blank" href="http://help.readymag.com/ga/"></a>\n\t\t\t\t\t<input disabled readonly type="text" name="ga_id" id="ga_id" placeholder="UA-XXXXXXX-Y">\n\t\t\t\t</div>\n\t\t\t\t<div class="input-wrapper gtm-block">\n\t\t\t\t\t<div class="caption">Google Tag Manager</div>\n\t\t\t\t\t<a class="info" target="_blank" href="http://help.readymag.com/gtm/"></a>\n\t\t\t\t\t<input disabled readonly type="text" name="gtm_id" id="gtm_id" placeholder="GTM-XXXXXX">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t';
 } 
__p+='\n\n\n\t\t<div class="bottom-72-message section">If you don’t see '+
((__t=((type == 'mag') ? 'your project' : 'your profile'))==null?'':__t)+
' or Readymag page when you visit <a class="your-site-button" href="" target="_blank">your website</a>, the DNS record might need more time to update. This can take up to 72 hours.</div>\n\n\t\t<a class="bottom-help-button section" target="_blank" href="http://help.readymag.com/domains/">Need help?</a>\n\n\t\t<div class="bottom-cancel-button section">Cancel</div>\n\n\t\t<a class="bottom-support-button section" href="mailto:'+
((__t=(RM.constants.SUPPORT_MAIL))==null?'':__t)+
'">Support</a>\n\n\t\t<div class="bottom-unmap-message section">Your domain name <span class="domain-name">TEMP</span> is currently using for '+
((__t=((type == 'mag') ? 'this project' : 'your profile'))==null?'':__t)+
'. <div class="unmap-button">Unmap it?</div></div>\n\t</div>\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-common-404'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n    <div id="page404">\n        <table>\n            <tr>\n                <td>\n                    <div class="caption">Page Not Found.</div>\n                    <div class="message">Sorry, there’s nothing here.<br/>Visit our <a class="front-page-link" href="/">front page</a>.</div>\n                </td>\n            </tr>\n        </table>\n    </div>\n';
}
return __p;
}.apply(this, arguments))};

RM.templates['template-common-mag-suspended'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t<div class="magsuspended-container">\n\t\t<div class="img-preloader"></div>\n\t\t<div class="center-table">\n\t\t\t<div class="center-cell">\n\t\t\t\t<div class="center-content">\n\t\t\t\t\t<div class="caption">Suspended</div>\n\t\t\t\t\t<!--__magterm-->\n\t\t\t\t\t<div class="text">Sorry, this project has been suspended due to violation of Readymag’s <a class="link guides-link nowrap" href="https://readymag.com/readymag/terms-and-privacy/">content guidelines</a>.</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<a class="link contact" href="mailto:'+
((__t=(RM.constants.SUPPORT_MAIL))==null?'':__t)+
'">Contact us</a>\n\t</div>\n';
}
return __p;
}.apply(this, arguments))};

RM.templates['template-common-user-suspended'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t<div class="usersuspended-container">\n\t\t<div class="img-preloader"></div>\n\t\t<div class="center-table">\n\t\t\t<div class="center-cell">\n\t\t\t\t<div class="center-content">\n\t\t\t\t\t<div class="caption">Suspended</div>\n\t\t\t\t\t<!--__magterm-->\n\t\t\t\t\t<div class="text">Sorry, this account has been suspended due to violation of Readymag’s <a class="link guides-link nowrap" href="https://readymag.com/readymag/terms-and-privacy/">content guidelines</a>.</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<a class="link contact" href="mailto:'+
((__t=(RM.constants.SUPPORT_MAIL))==null?'':__t)+
'">Contact us</a>\n\t</div>\n';
}
return __p;
}.apply(this, arguments))};

RM.templates['template-common-domain-errors'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\n\t<div class="domain-errors">\n\t\t<div class="message">\n\t\t\t';
 if (state.magNotFound || state.domainNotFound) { 
__p+='\n\t\t\t<div class="message-caption">Website is almost here</div>\n\t\t\t<!--__magterm-->\n\t\t\t<div class="message-text">To complete the setup, please hit <br class="br-phone"/>the “Map Now” <br class="br-desktop"/>button in your <br class="br-phone"/>projects’s settings.</div>\n\t\t\t<a class="help-phone" href="http://help.readymag.com/domains/">Need Help?</a>\n\t\t\t';
 } 
__p+='\n\t\t\t';
 if (state.magNotPublished) { 
__p+='\n\t\t\t<div class="message-caption">Website is Offline</div>\n\t\t\t<!--__magterm-->\n\t\t\t<div class="message-text">This project has been unpublished.</div>\n\t\t\t';
 } 
__p+='\n\t\t\t';
 if (state.subscriptionExpired) { 
__p+='\n\t\t\t<div class="message-caption">Website is Offline</div>\n\t\t\t<div class="message-text"><a href="'+
((__t=(RM.constants.readymag_auth_host))==null?'':__t)+
'/settings/subscription/">Log in</a> to manage your subscription.</div>\n\t\t\t';
 } 
__p+='\n\t\t</div>\n\n\t\t<a class="logo" href="'+
((__t=(RM.constants.readymag_host))==null?'':__t)+
'"></a>\n\n\t\t';
 if (state.magNotFound || state.domainNotFound) { 
__p+='\n\t\t<a class="help" href="http://help.readymag.com/domains/">Need Help?</a>\n\t\t';
 } 
__p+='\n\t</div>\n\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-common-slideshow-player'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t<div class="common-slideshow environment-'+
((__t=(tp))==null?'':_.escape(__t))+
'">\n\t\t<div class="images no-rmswipe">\n\t\t\t<div class="images-wrapper">\n\t\t\t</div>\n\t\t\t<div class="fullscreen">\n\t\t\t\t<svg class="fullscreen-off" xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24">\n\t\t\t\t\t<path class="fullscreen-path-1" d="M4 14 L4 20 L10 20  Z M14 4 L20 4 L20 10  Z " style="fill:#ffffff; stroke:none; stroke-width:0"></path>\n\t\t\t\t\t<path class="fullscreen-path-2" d="M10 14 L5 19 M14 10 L19 5" stroke-linecap="round" style="fill:none; stroke:#ffffff; stroke-width:2px"></path>\n\t\t\t\t</svg>\n\t\t\t\t<svg class="fullscreen-on" xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24">\n\t\t\t\t\t<path class="fullscreen-path-1" d="M5 13 L11 13 L11 19  Z M13 5 L19 11 L13 11  Z " style="fill:#ffffff; stroke:none; stroke-width:0"></path>\n\t\t\t\t\t<path class="fullscreen-path-2" d="M10 14 L5 19 M14 10 L19 5" stroke-linecap="round" style="fill:none; stroke:#ffffff; stroke-width:2px"></path>\n\t\t\t\t</svg>\n\t\t\t</div>\n\n\t\t\t<div class="bottom-arrows">\n\t\t\t\t<div class="prev-picture-arrow-bottom">\n\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="40" height="40">\n\t\t\t\t\t\t<path d="M23.5 11.5 L15.5 19.5 L23.5 27.5" stroke-linejoin="round" stroke-linecap="round" style="fill:none; stroke:#ffffff; stroke-width:3px"></path>\n\t\t\t\t\t</svg>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="next-picture-arrow-bottom">\n\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="40" height="40">\n\t\t\t\t\t\t<path d="M16.5 11.5 L24.5 19.5 L16.5 27.5" stroke-linejoin="round" stroke-linecap="round" style="fill:none; stroke:#ffffff; stroke-width:3px"></path>\n\t\t\t\t\t</svg>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="counters-text">\n\t\t\t\t\t<span class="counters-text-current">1</span>/<span class="counters-text-total">2</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\n\t\t\t<div class="prev-picture-arrow-middle">\n\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="40" height="40">\n\t\t\t\t\t<path d="M23.5 11.5 L15.5 19.5 L23.5 27.5" stroke-linejoin="round" stroke-linecap="round" style="fill:none; stroke:#ffffff; stroke-width:3px"></path>\n\t\t\t\t</svg>\n\t\t\t</div>\n\n\n\t\t\t<div class="next-picture-arrow-middle">\n\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="40" height="40">\n\t\t\t\t\t<path d="M16.5 11.5 L24.5 19.5 L16.5 27.5" stroke-linejoin="round" stroke-linecap="round" style="fill:none; stroke:#ffffff; stroke-width:3px"></path>\n\t\t\t\t</svg>\n\t\t\t</div>\n\n\n\t\t</div>\n\n\t\t<div class="thumbnails no-rmswipe">\n\t\t\t<div class="scroll-wrapper">\n\t\t\t\t<div class="items-wrapper has-horizontal-scroll">\n\t\t\t\t\t<div class="items">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="scroll"></div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="counters no-rmswipe">\n\t\t\t<div class="scroll-wrapper">\n\t\t\t\t<div class="items-wrapper has-horizontal-scroll">\n\t\t\t\t\t<div class="items">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="scroll"></div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="captions">\n\t\t\t';
 if (tp == 'constructor') { 
__p+='\n\t\t\t\t<textarea class="caption" maxlength="9999" placeholder="Type image caption here"></textarea>\n\t\t\t';
 } 
__p+='\n\t\t</div>\n\t</div>\n\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-common-user-menu'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t<div class="collector-menu '+
((__t=((showUpgradeButton ? 'show-upgrade-button': '')))==null?'':__t)+
'" id="global-menu">\n\t\t';
  var innerLink = 'link',
				outerLink = '',
				meLink = me.getLink(),
				goHomeLink = RM.constants.readymag_host;
			if (tp == 'homepage') {
				innerLink = '';
				outerLink = 'link';
				meLink = RM.constants.readymag_auth_host + me.getLink();
				goHomeLink = '/';
			}
		
__p+='\n\n\t\t<a href="'+
((__t=(goHomeLink))==null?'':_.escape(__t))+
'" class="logo '+
((__t=(outerLink))==null?'':_.escape(__t))+
'"></a>\n\n\t\t<div class="separator"></div>\n\n\t\t<a class="upgrade-button '+
((__t=(innerLink))==null?'':_.escape(__t))+
'" href="/settings/subscription/update"><div class="icon"></div>Upgrade</a>\n\n\t\t<div class="create-button"><div class="icon"></div>Create</div>\n\n\t\t<div class="user-button">\n\t\t\t<a class="userpic '+
((__t=(innerLink))==null?'':_.escape(__t))+
'" href="'+
((__t=(meLink))==null?'':_.escape(__t))+
'" style="background-image:url(\''+
((__t=(me.getUserpic(48)))==null?'':_.escape(__t))+
'\')"></a>\n\t\t\t<div class="arrow"><div class="icon"></div></div>\n\t\t\t';
 if (!me.get('email_confirmation_date')) { 
__p+=' <div class="notification-icon">1</div> ';
 } 
__p+='\n\t\t</div>\n\n\t\t<div class="user-popup">\n\t\t\t<a class="user-block '+
((__t=(innerLink))==null?'':_.escape(__t))+
'" href="'+
((__t=(meLink))==null?'':_.escape(__t))+
'">\n\t\t\t\t<div class="username-wrapper-outer">\n\t\t\t\t\t<div class="username-wrapper">\n\t\t\t\t\t\t<div class="username">'+
((__t=(me.get('name')))==null?'':_.escape(__t))+
'</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</a>\n\n\t\t\t<div class="popup-separator"></div>\n\n\t\t\t<a class="settings '+
((__t=(innerLink))==null?'':_.escape(__t))+
'" href="/settings"><div class="icon"></div>Settings</a>\n\n\t\t\t<div class="create-warning">\n\t\t\t\t<div class="icon"></div>\n\t\t\t\t<!--__magterm-->\n\t\t\t\t<div class="message">To create a project please switch to your laptop or desktop computer</div>\n\t\t\t</div>\n\n\t\t\t<div class="popup-separator"></div>\n\n\t\t\t<a class="logout" href="/logout/"><div class="icon"></div>Logout</a>\n\n\t\t\t<div class="popup-separator"></div>\n\n\t\t\t';
 if (!me.get('email_confirmation_date')) { 
__p+='\n\t\t\t\t<div class="notifications-wrapper">\n\t\t\t\t\t<div class="verify-email">Please verify your email. <span>Resend</span>.</div>\n\t\t\t\t</div>\n\t\t\t ';
 } 
__p+='\n\n\t\t\t<div class="popup-footer">\n\t\t\t\t<a href="https://readymag.com/readymag/terms-and-privacy/" class="'+
((__t=(Modernizr.isboxversion? 'disabled': ''))==null?'':__t)+
'" target="_blank">Privacy & Terms</a><span></span><a class="from-user-menu mailto-support" href="https://help.readymag.com" target="_blank">Help</a><span></span><a href="https://readymag.com/readymag/newsletter/" target="_blank">R/m Newsletter</a>\n\t\t\t</div>\n\n\t\t\t<div class="corner-wrapper">\n\t\t\t\t<div class="corner"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n';
}
return __p;
}.apply(this, arguments))};

RM.templates['template-common-user-menu-unlogged'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t\t';
  var innerLink = 'link',
				outerLink = '';
			if (tp == 'homepage') {
				innerLink = '';
				outerLink = 'link';
			}
		
__p+='\n\n\t<a class="collector-menu-unlogged '+
((__t=(outerLink))==null?'':_.escape(__t))+
'" id="global-menu" href="/"></a>\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-common-whats-new'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t<div class="whats-new">\n\t\t<div class="panel-wrapper">\n\t\t\t<div class="panel">\n\t\t\t\t<div class="content">\n\t\t\t\t\t<div class="wn-page" data-date="2013-11-19">\n\t\t\t\t\t\t<div class="caption">What\'s new</div>\n\t\t\t\t\t\t<div class="date">November 19<span>th</span></div>\n\t\t\t\t\t\t<div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Introducing Domain Mapping<br/>and New Price.</div>\n\t\t\t\t\t\t<a class="learn-more" href="https://readymag.com/p43952/" target="blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2013-12-16">\n\t\t\t\t\t\t<div class="caption">What\'s new</div>\n\t\t\t\t\t\t<div class="date">December 16<span>th</span></div>\n\t\t\t\t\t\t<div class="picture"></div>\n\t\t\t\t\t\t<!--__magterm-->\n\t\t\t\t\t\t<div class="text">Duplicating projects, Instagram<br/>and SVG support.</div>\n\t\t\t\t\t\t<a class="learn-more" href="https://readymag.com/p53035/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2014-01-20">\n\t\t\t\t\t\t<div class="caption">What\'s new</div>\n\t\t\t\t\t\t<div class="date">January 20<span>th</span></div>\n\t\t\t\t\t\t<div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Rotation tool.<br/>Grouping widgets.<br/>Faster background images loading.<br/>Bug fixes.</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2014-02-03">\n\t\t\t\t\t\t<div class="caption">What\'s new</div>\n\t\t\t\t\t\t<div class="date">February 4<span>th</span></div>\n\t\t\t\t\t\t<div class="picture">\n\t\t\t\t\t\t\t<div class="line"></div>\n\t\t\t\t\t\t\t<div class="line"></div>\n\t\t\t\t\t\t\t<div class="line"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="text">Introducing<br/>Viewer 1.0</div>\n\t\t\t\t\t\t<a class="learn-more" href="https://readymag.com/p67765/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2014-03-04">\n\t\t\t\t\t\t<div class="caption">What\'s new</div>\n\t\t\t\t\t\t<div class="date">March 4<span>th</span></div>\n\t\t\t\t\t\t<div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Custom Templates<br/>and iFrame</div>\n\t\t\t\t\t\t<a class="learn-more" href="https://readymag.com/p85654/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2014-03-19">\n\t\t\t\t\t\t<div class="caption">What\'s new</div>\n\t\t\t\t\t\t<div class="date">March 19<span>th</span></div>\n\t\t\t\t\t\t<div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Track your audience with<br/>Google Analytics</div>\n\t\t\t\t\t\t<a class="learn-more" href="http://help.readymag.com/ga/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n                    <div class="wn-page" data-date="2014-04-14">\n                        <div class="caption">What\'s new</div>\n                        <div class="date">April 14<span>th</span></div>\n                        <div class="picture"></div>\n                        <div class="text">Introducing<br/>Viewport & Mobile Viewer</div>\n                        <a class="learn-more" href="https://readymag.com/p100897/" target="_blank">Learn More</a>\n                    </div>\n                    <div class="wn-page" data-date="2014-06-24">\n                        <div class="caption">What\'s new</div>\n                        <div class="date">June 24<span>th</span></div>\n                        <div class="picture"></div>\n                        <div class="text">Introducing<br/>Font Explorer</div>\n                        <a class="learn-more" href="https://readymag.com/p151687/" target="_blank">Learn More</a>\n                    </div>\n                    <div class="wn-page" data-date="2014-08-04">\n                        <div class="caption">What\'s new</div>\n                        <div class="date">August 4<span>th</span></div>\n                        <div class="picture"></div>\n                        <div class="text">Introducing New<br/>Webfonts</div>\n                        <a class="learn-more" href="https://readymag.com/p156787/" target="_blank">Learn More</a>\n                    </div>\n                    <div class="wn-page" data-date="2014-09-04">\n                        <div class="caption">What\'s new</div>\n                        <div class="date">September 4<span>th</span></div>\n                        <div class="picture"></div>\n                        <div class="text">Introducing<br/>Template Center</div>\n                        <a class="learn-more" href="https://readymag.com/p172473/" target="_blank">Learn More</a>\n                    </div>\n                    <div class="wn-page" data-date="2014-09-30">\n                        <div class="caption">What\'s new</div>\n                        <div class="date">September 30<span>th</span></div>\n                        <div class="picture"></div>\n                        <div class="text">Introducing<br/>PDF Export</div>\n                        <a class="learn-more" href="https://readymag.com/p185021/" target="_blank">Learn More</a>\n                    </div>\n                    <div class="wn-page" data-date="2014-11-05">\n                        <div class="caption">What\'s new</div>\n                        <div class="date">November 5<span>th</span></div>\n                        <div class="picture"></div>\n                        <div class="text">Introducing<br/>100,000 icons</div>\n                        <a class="learn-more" href="https://readymag.com/p220371/" target="_blank">Learn More</a>\n                    </div>\n                    <div class="wn-page" data-date="2014-12-09">\n                        <div class="caption">What\'s new</div>\n                        <div class="date">December 9<span>th</span></div>\n                        <div class="picture"></div>\n                        <div class="text">Introducing<br/>Link Styles & Fix Position</div>\n                        <a class="learn-more" href="https://readymag.com/p243325/" target="_blank">Learn More</a>\n                    </div>\n                    <div class="wn-page" data-date="2015-01-29">\n                        <div class="caption">What\'s new</div>\n                        <div class="date">January 29<span>th</span></div>\n                        <div class="picture"></div>\n                        <div class="text">Introducing<br/>New Embeds</div>\n                        <a class="learn-more" href="https://readymag.com/p288252/" target="_blank">Learn More</a>\n                    </div>\n\t\t\t\t\t<div class="wn-page" data-date="2015-02-10">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">February 10<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <div class="text">2 Little Things:<br/>Trash & Pages URLs</div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p304538/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2015-03-04">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">March 4<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Introducing<br/>Viewer 2.0</div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p325057/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2015-04-14">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">April 14<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Introducing<br/>Scroll Navigation</div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p360474/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2015-05-14">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">May 14<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Introducing<br/>Buttons, Anchors &amp; Full Width</div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p430667/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!-- Special terms agree message. For next terms change just increase version number in backend config and set new data-date to show. This block position inside template does not matter -->\n\t\t\t\t\t<div class="wn-page agree-terms" data-version="'+
((__t=( RM.constants.CURRENT_TERMS_VERSION ))==null?'':__t)+
'" data-date="2015-09-02">\n\t\t\t\t\t    <div class="caption">UPDATE</div>\n\t\t\t\t\t    <div class="date">Terms of Service</div>\n\t\t\t\t\t\t<div class="text">Hey!<br/>We’ve recently slightly updated our <a href="https://readymag.com/readymag/terms-and-privacy/" target="_blank">Terms of Service</a> due to launching the new Teamwork feature. Please review the changes, as by continuing to use Readymag you automatically accept them. Have a great day!</div>\n\t\t\t\t\t    <div class="learn-more agree-terms-button">I agree</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Special terms agree message end -->\n\n\t\t\t\t\t<div class="wn-page" data-date="2015-09-03">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Sep 3<span>rd</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Introducing<br/>Teamwork</div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p683180/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="wn-page" data-date="2015-10-09">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Oct 9<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Introducing<br/>Hotspot</div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p921047/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="wn-page" data-date="2015-11-18">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Nov 18<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Introducing<br/>5 Tiny Features</div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p1016246/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2016-01-20">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Jan 19<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Introducing<br/>Animations</div>\n\t\t\t\t\t    <a class="learn-more" href="http://animations.readymag.com/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2016-04-12">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Apr 12<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p1351980/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2016-08-04">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Aug 4<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p1617587/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2016-09-29">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Sep 29<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p1730817/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2016-12-01">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Dec 1<span>st</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p1921011/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2017-02-07">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Feb 7<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p2117051/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2017-05-03">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">May 3<span>rd</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p2346155/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2017-08-08">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">August 8<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p2674515/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2017-09-20">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Sep 20<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p2809932/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2017-11-30">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Nov 30<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://help.readymag.com/domains/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2017-12-15">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Dec 15<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://medium.com/@readymag/readymag-under-the-hood-faster-vertical-viewer-implementation-8615457fdf25" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2018-02-15">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Feb 15<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p3276335/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2018-03-29">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Mar 29<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p3488378/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2018-05-24">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">May 24<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/readymag/terms-and-privacy/2/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2018-06-28">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">June 28<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p3857571/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="close"></div>\n\t\t\t\t<div class="arrow up disabled"></div>\n\t\t\t\t<div class="arrow down"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-constructor-block-audio'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t<div class="player-wrapper"></div>\n\t<div class="overlay"></div>\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-constructor-block-button'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\n    <input class="text"\n           value="'+
((__t=(data.text))==null?'':_.escape(__t))+
'"\n           type="text"\n           autocapitalize="off"\n           autocorrect="off"\n           autocomplete="off"\n           spellcheck="false"/>\n\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-constructor-block-facebook-type_like_button'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t<div class="fb-like fb" data-href="'+
((__t=(data.url ? data.url : 'http://readymag.com'))==null?'':_.escape(__t))+
'" '+
((__t=(data.share_button || data.send_button ? 'data-share="true"' : ''))==null?'':__t)+
' data-width="'+
((__t=(data.w))==null?'':__t)+
'" data-show-faces="'+
((__t=(data.show_faces))==null?'':__t)+
'" data-colorscheme="'+
((__t=(data.theme))==null?'':__t)+
'" data-layout="'+
((__t=(data.layout))==null?'':__t)+
'" data-type="data.type_like_button"></div>\n\t<div class="overlay"></div>\n';
}
return __p;
}.apply(this, arguments))};

RM.templates['template-constructor-block-facebook-type_page'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t<div class="fb-page fb" data-href="'+
((__t=(data.url ? data.url : 'https://www.facebook.com/readymag'))==null?'':_.escape(__t))+
'" data-width="'+
((__t=(data.w))==null?'':__t)+
'" data-height="'+
((__t=(data.h))==null?'':__t)+
'" data-show-facepile="'+
((__t=(data.show_faces))==null?'':__t)+
'" data-colorscheme="'+
((__t=(data.theme))==null?'':__t)+
'" data-tabs="'+
((__t=(data.show_stream ? 'timeline, events, messages' : ''))==null?'':__t)+
'" data-show-border="true" data-small-header="'+
((__t=(data.small_header))==null?'':__t)+
'" data-adapt-container-width="true"></div>\n\t<div class="overlay"></div>\n';
}
return __p;
}.apply(this, arguments))};

RM.templates['template-constructor-block-facebook-type_comments'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t<div class="fb-comments fb" data-href="'+
((__t=(data.url ? data.url : 'http://readymag.com'))==null?'':_.escape(__t))+
'" data-width="'+
((__t=(data.w))==null?'':__t)+
'" data-num-posts="'+
((__t=(data.num_posts))==null?'':__t)+
'" data-colorscheme="'+
((__t=(data.theme))==null?'':__t)+
'"></div>\n\t<div class="overlay"></div>\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-constructor-block-gmaps'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n    <div class="rm-search-block">\n        <div class="map-container"></div>\n        <div class="map-overlay"></div>\n        <div class="message-overlay invisible"></div>\n    </div>\n';
}
return __p;
}.apply(this, arguments))};

RM.templates['template-constructor-block-gmaps-search-control'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n    <div class="rm-search-block">\n        <input type="text" class="rm-search source">\n        <input type="text" class="rm-search destination">;\n    </div>\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-constructor-block-slideshow'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t<input class="uploadInput" type="file" name="upload" multiple="multiple" data-url="/api/upload/" />\n\t<div class="slideshow-overlay jsSlideshowOverlay"></div>\n\n\t<div class="drop-text"></div>\n\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-constructor-block-text'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\n\t<div class="margins-wrapper">\n\t\t<div class="margins-wrapper-inner">\n\t\t</div>\n\t</div>\n\n\t<div class="columns-wrapper">\n\t\t<div class="columns-wrapper-inner">\n\t\t</div>\n\t</div>\n\n\t<textarea id="textarea_'+
((__t=(_id))==null?'':__t)+
'" style="display: none; width:'+
((__t=(w))==null?'':__t)+
'px;height:'+
((__t=(h))==null?'':__t)+
'px">'+
((__t=(text))==null?'':_.escape(__t))+
'</textarea>\n\t<div class="text-preview" style="-webkit-nbsp-mode:space; -webkit-line-break:after-white-space;">'+
((__t=(text))==null?'':__t)+
'</div>\n\t<div class="text-mask"></div>\n\n';
}
return __p;
}.apply(this, arguments))};

RM.templates['template-constructor-block-text-margins'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\n\t<div class="margin-handle hidden inactive">\n\t\t<div class="margin-handle-label-wrapper">\n\t\t\t<div class="margin-handle-label">\n\t\t\t\t<input class="margin-input" type="text"  spellcheck="false" value="0" data-mouseSpeed="2" />\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n';
}
return __p;
}.apply(this, arguments))};

RM.templates['template-constructor-block-text-bg'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t<div class="bg"></div>\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-constructor-block-twitter-type_tweet'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t<a href="https://twitter.com/share" class="twitter-share-button" data-url="'+
((__t=(url))==null?'':_.escape(__t))+
'" data-lang="en" data-size="'+
((__t=(large_button ? 'large' : 'medium'))==null?'':__t)+
'" data-text="'+
((__t=( typeof text !== 'undefined' ? text : ''))==null?'':_.escape(__t))+
'">Tweet</a>\n\t<div class="overlay"></div>\n';
}
return __p;
}.apply(this, arguments))};

RM.templates['template-constructor-block-twitter-type_follow'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t<a href="https://twitter.com/'+
((__t=(username ? username : 'Readymag'))==null?'':_.escape(__t))+
'" class="twitter-follow-button" data-show-count="false" data-show-screen-name="'+
((__t=(show_name ? 'true' : 'false'))==null?'':__t)+
'" data-lang="en" data-size="'+
((__t=(large_button ? 'large' : 'medium'))==null?'':__t)+
'">Follow @'+
((__t=(username))==null?'':_.escape(__t))+
'</a>\n\t<div class="overlay"></div>\n';
}
return __p;
}.apply(this, arguments))};

RM.templates['template-constructor-block-twitter-type_hashtag'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t<a href="https://twitter.com/intent/tweet?button_hashtag='+
((__t=(hash))==null?'':_.escape(__t))+
'" class="twitter-hashtag-button" data-size="'+
((__t=(large_button ? 'large' : 'medium'))==null?'':__t)+
'">Tweet #'+
((__t=(hash))==null?'':_.escape(__t))+
'</a>\n\t<div class="overlay"></div>\n';
}
return __p;
}.apply(this, arguments))};

RM.templates['template-constructor-block-twitter-type_timeline'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t'+
((__t=(code))==null?'':__t)+
'\n\t<div class="overlay"></div>\n';
}
return __p;
}.apply(this, arguments))};

RM.templates['template-constructor-block-twitter-type_embed'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t'+
((__t=(code))==null?'':__t)+
'\n\t<div class="overlay"></div>\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-viewer-branding'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t<div class="rm-branding offscreen-initially">\n\t<a class="rm-branding-button" href="https://readymag.com" target="_blank"></a>\n\t</div>\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-viewer-final-page'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\r\n\r\n\t<div class="final-page offscreen hidden '+
((__t=(isStickyVerticalViewer ? '' : 'has-vertical-scroll'))==null?'':__t)+
'">\r\n\t\t<div class="final-page-wrapper tp-'+
((__t=(tp))==null?'':_.escape(__t))+
'">\r\n\t\t\t<div class="final-page-container">\r\n\r\n\t\t\t\t<div class="main-container">\r\n\t\t\t\t\t<div class="social-wrapper">\r\n\r\n\t\t\t\t\t\t<a href="'+
((__t=(mag.model.user.getLink()))==null?'':_.escape(__t))+
'" class="link userpic '+
((__t=( !RM.common.isDownloadedSource? '': 'inactive-link'))==null?'':__t)+
'" style="background-image:url(\''+
((__t=(mag.model.user.getUserpic(128)))==null?'':__t)+
'\')"></a>\r\n\r\n\t\t\t\t\t\t<div class="mag-title selectable">'+
((__t=(mag.title ))==null?'':_.escape(__t))+
'</div>\r\n\r\n\t\t\t\t\t\t<div class="user-name selectable">by <a href="'+
((__t=(mag.model.user.getLink()))==null?'':_.escape(__t))+
'" class="full-name link '+
((__t=( !RM.common.isDownloadedSource? '': 'inactive-link'))==null?'':__t)+
'">'+
((__t=(mag.user.name))==null?'':_.escape(__t))+
'</a></div>\r\n\r\n\t\t\t\t\t\t<div class="share-wrapper">\r\n\t\t\t\t\t\t\t<div class="share-caption">Share</div>\r\n\t\t\t\t\t\t\t<div class="like-tweet '+
((__t=(disableSocials ? 'disabled' : ''))==null?'':__t)+
'">\r\n\t\t\t\t\t\t\t\t<div id="fb-root"></div>\r\n\t\t\t\t\t\t\t\t<div class="fb-like" data-href="'+
((__t=(magLink))==null?'':_.escape(__t))+
'" data-layout="box_count" data-action="like" data-show-faces="false" data-share="false"></div>\r\n\t\t\t\t\t\t\t\t<div class="spacer"></div>\r\n\t\t\t\t\t\t\t\t<a href="https://twitter.com/share" class="twitter-share-button" data-count="vertical" data-url="'+
((__t=(magLink))==null?'':_.escape(__t))+
'" data-text="'+
((__t=(tweetText))==null?'':_.escape(__t))+
'">Tweet</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="share-facebook sprite '+
((__t=(disableSocials ? 'disabled' : ''))==null?'':__t)+
' share-button" data-tp="facebook"></div>\r\n\t\t\t\t\t\t\t<div class="share-twitter sprite '+
((__t=(disableSocials ? 'disabled' : ''))==null?'':__t)+
' share-button" data-tp="twitter"></div>\r\n\t\t\t\t\t\t\t<div class="share-pinterest sprite '+
((__t=(disableSocials ? 'disabled' : ''))==null?'':__t)+
' share-button" data-tp="pinterest"></div>\r\n\t\t\t\t\t\t\t<div class="share-gplus sprite '+
((__t=(disableSocials ? 'disabled' : ''))==null?'':__t)+
' share-button" data-tp="gplus"></div>\r\n\t\t\t\t\t\t\t<div class="share-mail sprite '+
((__t=(disableSocials ? 'disabled' : ''))==null?'':__t)+
' share-button" data-tp="email"></div>\r\n\r\n\t\t\t\t\t\t\t';
 if (!Modernizr.isboxversion && !RM.common.isDownloadedSource) { 
__p+='\r\n\t\t\t\t\t\t\t\t<div class="share-embed '+
((__t=(disableSocials ? 'disabled' : ''))==null?'':__t)+
'">Embed</div>\r\n\t\t\t\t\t\t\t\t<div class="share-report sprite '+
((__t=(disableSocials ? 'disabled' : ''))==null?'':__t)+
' share-button" data-tp="report"></div>\r\n\t\t\t\t\t\t\t';
 } 
__p+='\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class="embed-wrapper hidden">\r\n\t\t\t\t\t\t<div class="caption">Embed</div>\r\n\r\n\t\t\t\t\t\t<div class="size-selector" data-selected="responsive">\r\n\t\t\t\t\t\t\t<div class="size responsive" data-size="responsive">Responsive</div>\r\n\t\t\t\t\t\t\t<div class="size big" data-size="big">512×383</div>\r\n\t\t\t\t\t\t\t<div class="size small" data-size="small">288×236</div>\r\n\t\t\t\t\t\t\t<div class="arrow sprite"></div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class="code-block">\r\n\t\t\t\t\t\t\t<img class="thumb-pic" src="" alt=""/>\r\n\r\n\t\t\t\t\t\t\t';
 if (Modernizr.isphone) { 
__p+='\r\n\t\t\t\t\t\t\t<input type="text" class="embed-code">\r\n\t\t\t\t\t\t\t';
 } else { 
__p+='\r\n\t\t\t\t\t\t\t<textarea class="embed-code" wrap="off"></textarea>\r\n\t\t\t\t\t\t\t';
 } 
__p+='\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class="embed-close">Close</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t';
 if (tp == 'recent') { 
__p+='\r\n\t\t\t\t\t<div class="dop-container-recent">\r\n\t\t\t\t\t\t<div class="caption">More from</div>\r\n\t\t\t\t\t\t<div class="sub-caption"><a href="'+
((__t=(mag.model.user.getLink()))==null?'':_.escape(__t))+
'" class="link" '+
((__t=(RM.common.embedMode ? 'target="_blank"' : ''))==null?'':__t)+
'>'+
((__t=(mag.user.name))==null?'':_.escape(__t))+
'</a></div>\r\n\t\t\t\t\t\t';
 if (!specialRecentView) {
							recentMags.each(function(mag) {
__p+='<div class="recent-mag">\r\n\t\t\t\t\t\t\t\t<div class="cover" style="background-image:url(\''+
((__t=(mag.getPageScreenshot(144, {cover: true})))==null?'':__t)+
'\')"></div>\r\n\t\t\t\t\t\t\t\t<a class="overlay related-link" href="'+
((__t=(mag.getLink()))==null?'':_.escape(__t))+
'" '+
((__t=(RM.common.embedMode ? 'target="_blank"' : ''))==null?'':__t)+
'>\r\n\t\t\t\t\t\t\t\t\t<div class="overlay-wrapper">\r\n\t\t\t\t\t\t\t\t\t\t<div class="overflow-block">'+
((__t=(mag.get('title')))==null?'':_.escape(__t))+
'</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>';
})} else { var mag = recentMags.models[0]; 
__p+='\r\n\t\t\t\t\t\t\t<div class="recent-mag-special">\r\n\t\t\t\t\t\t\t\t<a class="overlay related-link" href="'+
((__t=(mag.getLink()))==null?'':_.escape(__t))+
'" '+
((__t=(RM.common.embedMode ? 'target="_blank"' : ''))==null?'':__t)+
'>\r\n\t\t\t\t\t\t\t\t\t<div class="mag-cover" style="background-image:url(\''+
((__t=(mag.getPageScreenshot(304, {cover: true})))==null?'':__t)+
'\')"></div><br/>\r\n\t\t\t\t\t\t\t\t\t<div class="mag-title">'+
((__t=(mag.get('title')))==null?'':_.escape(__t))+
'</div><br/>\r\n\t\t\t\t\t\t\t\t\t<div class="mag-pages">'+
((__t=(mag.getPagesCount()))==null?'':__t)+
' '+
((__t=(RM.utils.declination('pages', 'page', 'pages', mag.getPagesCount())))==null?'':__t)+
'</div>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t';
 } 
__p+='\r\n\t\t\t\t\t</div>\r\n\t\t\t\t';
 } 
__p+='\r\n\r\n\r\n\t\t\t\t';
 if (tp == 'join') { 
__p+='\r\n\t\t\t\t\t<div class="dop-container-join">\r\n\t\t\t\t\t\t<a class="made-with" href="'+
((__t=(RM.constants.readymag_host))==null?'':__t)+
'">Made with<div class="icon sprite"></div></a>\r\n\r\n\t\t\t\t\t\t<div class="join ljr-panel">\r\n\t\t\t\t\t\t\t<div class="buttons-panel">\r\n\t\t\t\t\t\t\t\t<div class="panel-caption">Create your own <br/>web publications!</div>\r\n\t\t\t\t\t\t\t\t<div class="social-auth" data-provider=\'facebook\'>\r\n\t\t\t\t\t\t\t\t\t<span class="icon-facebook"></span>\r\n\t\t\t\t\t\t\t\t\t<span class="buttonText">Continue with Facebook</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class="social-auth" data-provider=\'google\'>\r\n\t\t\t\t\t\t\t\t\t<span class="icon-google"></span>\r\n\t\t\t\t\t\t\t\t\t<span class="buttonText">Sign in with Google</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<!-- временно пока редиректится на окно регистрации -->\r\n\t\t\t\t\t\t\t\t<!-- <div class="use-email" data-provider=\'native\'><div class="icon sprite"></div>Use your Email</div> -->\r\n\t\t\t\t\t\t\t\t<a href="https://readymag.com/join/" class="use-email" data-provider=\'native\'><div class="icon sprite"></div>Use your Email</a>\r\n\r\n\t\t\t\t\t\t\t\t<a class="learn-more" href="'+
((__t=(RM.constants.readymag_host))==null?'':__t)+
'">Learn More</a>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class="native-join">\r\n\t\t\t\t\t\t\t\t<input autocapitalize="on"  autocorrect="off" required="required" class="fullname-input input-template"  maxlength="24" type="text"     spellcheck="false" value="" placeholder="Name" />\r\n\t\t\t\t\t\t\t\t<input autocapitalize="off" autocorrect="off" required="required" class="email-input input-template"     type="email"    spellcheck="false" value="" placeholder="Email" />\r\n\t\t\t\t\t\t\t\t<input autocapitalize="off" autocorrect="off" required="required" class="password-input input-template"  type="password" spellcheck="false" value="" placeholder="Password" />\r\n\t\t\t\t\t\t\t\t<div class="go">Join</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class="cancel">Cancel</div>\r\n\t\t\t\t\t\t\t\t<div class="error"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t';
 } 
__p+='\r\n\r\n\r\n\t\t\t\t';
 if (tp != 'join') { 
__p+='\r\n\t\t\t\t\t<a class="logo" href="'+
((__t=(RM.constants.readymag_host))==null?'':__t)+
'">Powered by<div class="icon sprite"></div></a>\r\n\t\t\t\t';
 } 
__p+='\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-viewer-mag-menu'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\r\n\r\n\t<div class="mag-menu '+
((__t=((!hasProjectInfo ? 'no-project-info' : '')))==null?'':__t)+
'">\r\n\t\t<div class="menu-wrapper">\r\n\r\n\t\t\t';
 if (hasProjectInfo) { 
__p+='\r\n\t\t\t\t<div class="menu-info">\r\n\r\n\t\t\t\t\t<a class="link '+
((__t=( !RM.common.isDownloadedSource? '': 'inactive-link'))==null?'':__t)+
'" href="'+
((__t=(mag.model.user.getLink()))==null?'':_.escape(__t))+
'">\r\n\t\t\t\t\t\t<div class="userpic" style="background-image:url(\''+
((__t=(mag.model.user.getUserpic(64)))==null?'':__t)+
'\')"></div>\r\n\t\t\t\t\t\t<div class="username">'+
((__t=(mag.user.name))==null?'':_.escape(__t))+
'</div>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<div class="published-by" data_caption="published by" data_date="'+
((__t=(publishDate))==null?'':__t)+
'"></div>\r\n\t\t\t\t\t<div class="mag-title">'+
((__t=(mag.title))==null?'':_.escape(__t))+
'</div>\r\n\t\t\t\t</div>\r\n\t\t\t';
 } 
__p+='\r\n\r\n\t\t\t<div class="scroll-wrapper">\r\n\r\n\t\t\t\t';
 if (!RM.common.isDomainViewer && !Modernizr.android) { 
__p+='\r\n\t\t\t\t\t<a class="logo-wrapper" href="/">\r\n\t\t\t\t\t\t<div class="made-with"> Made with</div>\r\n\t\t\t\t\t\t<div class="logo sprite"></div>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t';
 } 
__p+='\r\n\r\n\t\t\t\t<div class="pages-wrapper has-'+
((__t=(viewerType))==null?'':__t)+
'-scroll">\r\n\t\t\t\t\t<div class="pages">\r\n\r\n\t\t\t\t\t\t';
_.each(pages, function(page, ind) {
							var attr = viewerType == 'horizontal' ? 'left' : 'top',
								val = ind * (viewerType == 'horizontal' ? width : height);
						
__p+='\r\n\t\t\t\t\t\t\t<div class="page" data-id="'+
((__t=(page._id))==null?'':__t)+
'" data-num="'+
((__t=(page.num))==null?'':__t)+
'" data-src="'+
((__t=(mag.model.getPageScreenshot(width, {_id: page._id})))==null?'':__t)+
'" style="width:'+
((__t=(width))==null?'':__t)+
'px;height:'+
((__t=(height))==null?'':__t)+
'px;'+
((__t=(attr))==null?'':__t)+
':'+
((__t=(val))==null?'':__t)+
'px">\r\n\t\t\t\t\t\t\t\t<img class="screenshot" src="'+
((__t=(stub))==null?'':__t)+
'" />\r\n\t\t\t\t\t\t\t\t<div class="num '+
((__t=((page.num > 99 ? 'over99' : '')))==null?'':__t)+
'">'+
((__t=(page.num))==null?'':__t)+
'</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t';
});
__p+='\r\n\r\n\t\t\t\t\t\t';
 if (!RM.common.isDomainViewer && Modernizr.android) { 
__p+='\r\n\t\t\t\t\t\t\t<a class="logo-wrapper" href="/">\r\n\t\t\t\t\t\t\t\t<div class="made-with"> Made with</div>\r\n\t\t\t\t\t\t\t\t<div class="logo sprite"></div>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t';
 } 
__p+='\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="scroll"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-viewer-mag-password'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t<div class="magpassword-container">\n\t\t<div class="img-preloader"></div>\n\t\t<div class="back invisible"></div>\n\t\t<div class="center-table">\n\t\t\t<div class="center-cell">\n\t\t\t\t<div class="center-content invisible">\n\t\t\t\t\t<!--__magterm-->\n\t\t\t\t\t<div class="caption-private">This is a private project.<br/><span class="nowrap">Enter the password:</span></div>\n\t\t\t\t\t<div class="password-wrapper">\n\t\t\t\t\t\t<div class="input-wrapper">\n\t\t\t\t\t\t\t<input type="password" class="password-input" id="magpassword-input" required>\n\t\t\t\t\t\t\t<div class="access disabled">Access</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t';
 if (!user.get('permissions') || !user.get('permissions').white_label) { 
__p+='\n\t\t\t<div class="author invisible">\n\t\t\t\t<div class="userpic">\n\t\t\t\t\t<a href="'+
((__t=(user.getLink()))==null?'':_.escape(__t))+
'"><img src="'+
((__t=(user.getUserpic(128)))==null?'':_.escape(__t))+
'" alt=""></a>\n\t\t\t\t\t<a href="'+
((__t=(user.getLink()))==null?'':_.escape(__t))+
'"><div class="username">'+
((__t=(user.get('name')))==null?'':_.escape(__t))+
'</div></a>\n\t\t\t\t</div>\n\t\t\t\t<div class="caption">Published by</div>\n\t\t\t</div>\n\t\t\t<div class="powered invisible">\n\t\t\t\t<div class="caption-powered">Made with</div>\n\t\t\t\t<a href="'+
((__t=(RM.constants.readymag_host))==null?'':__t)+
'"><div class="logo-powered"></div></a>\n\t\t\t</div>\n\t\t';
 } 
__p+='\n\t</div>\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-viewer-mag'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\n\t<div class="mag">\n\t\t<div class="mag-pages-container">\n\t\t\t<div class="container disable-transitions">\n\n\t\t\t\t<div class="blackout"></div>\n\t\t\t</div>\n\t\t\t<div class="above-pages-container"></div>\n\t\t</div>\n\n\t\t';
 if (hasStandaloneBottomArrow) {
__p+='\n\t\t\t<div class="navigation-arrow bottom offscreen"><div class="icon sprite"></div></div>\n\t\t';
}
__p+='\n\n\n\t\t';
 if (isPreview) {
__p+='\n\t\t\t<div class="mag-pages-viewport-device"></div>\n\t\t';
}
__p+='\n\t</div>\n\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-viewer-navigation'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\n\t<div class="navigation">\n\t\t<div class="navigation-arrow left offscreen"><div class="icon sprite"></div></div>\n\t\t<div class="navigation-arrow right offscreen"><div class="icon sprite"></div></div>\n\t\t<div class="navigation-arrow bottom offscreen"><div class="icon sprite"></div></div>\n\t</div>\n\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-viewer-page'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t<div class="page hidden">\n\t\t<div class="page-fixed-bg-container polyfill-sticky"></div>\n\t\t<div class="fixed-position-container-top polyfill-sticky"></div>\n\t\t<div class="fixed-position-container polyfill-sticky"></div>\n\t\t<div class="content-scroll-wrapper '+
((__t=(isStickyVerticalViewer ? '' : 'has-vertical-scroll'))==null?'':__t)+
'">\n\t\t\t<div class="content-bounds">\n\t\t\t\t<div class="page-content-container" tabindex="-1"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-viewer-share'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\n\t';
 if (hasOverlay) {
__p+='\n\t\t<div class="share-popup-overlay hidden"></div>\n\t';
}
__p+='\n\n\t<div class="share-popup hidden">\n\t\t<div class="content-wrapper">\n\n\t\t\t<div class="share-wrapper">\n\t\t\t\t<div class="caption">Share</div>\n\n\t\t\t\t<div class="type-selector">\n\t\t\t\t\t<!--__magterm-->\n\t\t\t\t\t<div class="type-full">Project</div>\n\t\t\t\t\t<div class="type-page">Current Page</div>\n\t\t\t\t\t<div class="arrow sprite"></div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="buttons-wrapper">\n\t\t\t\t\t<div class="share-facebook button" data-tp="facebook"><div class="icon sprite"></div>Share</div>\n\t\t\t\t\t<div class="share-twitter button" data-tp="twitter"><div class="icon sprite"></div>Tweet</div>\n\t\t\t\t\t<div class="share-gplus button" data-tp="gplus"><div class="icon sprite"></div>Google+</div>\n\t\t\t\t\t<div class="share-pinterest button" data-tp="pinterest"><div class="icon sprite"></div>Pin</div>\n\t\t\t\t\t<div class="share-linkedin button" data-tp="linkedin"><div class="icon sprite"></div>Linkedin</div>\n\t\t\t\t\t<div class="share-mail button" data-tp="email"><div class="icon sprite"></div>Email</div>\n\t\t\t\t</div>\n\n\t\t\t\t';
 if (!Modernizr.isboxversion && !RM.common.isDownloadedSource) { 
__p+='\n\t\t\t\t\t<div class="open-embed"><div class="icon sprite"></div>Embed</div>\n\t\t\t\t\t<div class="close">Close</div>\n\t\t\t\t\t<div class="send-report" data-tp="report"><div class="icon sprite"></div>Report</div>\n\t\t\t\t';
 } 
__p+='\n\t\t\t</div>\n\n\t\t\t';
 if (!Modernizr.isboxversion && !RM.common.isDownloadedSource) { 
__p+='\n\t\t\t\t<div class="embed-wrapper">\n\t\t\t\t\t<div class="caption">Embed</div>\n\n\t\t\t\t\t<div class="size-selector" data-selected="responsive">\n\t\t\t\t\t\t<div class="size responsive" data-size="responsive">Responsive</div>\n\t\t\t\t\t\t<div class="size big" data-size="big">512×383</div>\n\t\t\t\t\t\t<div class="size small" data-size="small">288×236</div>\n\t\t\t\t\t\t<div class="arrow sprite"></div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="code-block">\n\t\t\t\t\t\t<div class="thumb">\n\t\t\t\t\t\t\t<img class="thumb-pic" src="" alt=""/>\n\t\t\t\t\t\t\t<div class="thumb-toolbar">\n\t\t\t\t\t\t\t\t<div class="icon arrows"></div>\n\t\t\t\t\t\t\t\t<div class="icon open"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<textarea class="embed-code"></textarea>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="back">Back</div>\n\t\t\t\t</div>\n\t\t\t';
 } 
__p+='\n\t\t</div>\n\n\t\t<div class="corner-wrapper">\n\t\t\t<div class="corner"></div>\n\t\t</div>\n\t</div>\n\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-viewer-toolbar'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\n\t<div class="toolbar for-viewer">\n\n\t\t';
	var offscreenClass = (isPreview || RM.common.embedMode) ? '' : 'offscreen-initially'; 
__p+='\n\n\t\t';
 if (hasPageCounter && !pageCounterInsideMenu) { 
__p+='\n\t\t\t<div class="page-counter-wrapper '+
((__t=(offscreenClass))==null?'':__t)+
'">\n\t\t\t\t<div class="page-counter"><span class="cur"></span> of <span class="total">'+
((__t=(totalPages))==null?'':__t)+
'</span></div>\n\t\t\t</div>\n\t\t';
 } 
__p+='\n\n\t\t';
 if (hasShare) { 
__p+='\n\t\t\t<div class="share-button sprite '+
((__t=(offscreenClass))==null?'':__t)+
'" data-alt="Share" data-alt-pos="bottom" data-alt-offset="9"></div>\n\t\t';
 } 
__p+='\n\n\t\t';
 if (hasMenu) { 
__p+='\n\t\t\t<div class="menu-button '+
((__t=(offscreenClass))==null?'':__t)+
'" data-alt="Menu (M)" data-alt-pos="bottom" data-alt-offset="9">\n\t\t\t\t';
 if (hasPageCounter && pageCounterInsideMenu) { 
__p+='\n\t\t\t\t\t<div class="page-counter"><span class="cur"></span> of <span class="total">'+
((__t=(totalPages))==null?'':__t)+
'</span></div>\n\t\t\t\t';
 } 
__p+='\n\t\t\t\t<div class="line-1"></div>\n\t\t\t\t<div class="line-2"></div>\n\t\t\t\t<div class="line-3"></div>\n\t\t\t\t<div class="page-preloader sprite"></div>\n\t\t\t</div>\n\t\t';
 } 
__p+='\n\n\t\t';
 if (RM.common.embedMode) { 
__p+='\n\t\t\t<div class="embed-close-button '+
((__t=(offscreenClass))==null?'':__t)+
'">Close</div>\n\t\t';
 } 
__p+='\n\n\t</div>\n\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-viewer-widget'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t<div class="rmwidget"></div>\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-viewer-widget-background'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t<div class="rmwidget widget-background" style="background-color: #'+
((__t=(data.color))==null?'':__t)+
'">\n\n        ';
 if (data.selectedType == 'picture') { 
__p+='\n            <div class="picture-background" style="opacity: '+
((__t=(data.opacity || 1))==null?'':__t)+
';"></div>\n        ';
 } 
__p+='\n\n        ';
 if (data.selectedType == 'video') { 
__p+='\n            <div class="video-background" style="opacity: '+
((__t=(data.videoopacity || 1))==null?'':__t)+
';">\n                <div class="video-container"></div>\n                <div class="overlay"></div>\n            </div>\n        ';
 } 
__p+='\n\t</div>\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-viewer-widget-button'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\n    <input class="text"\n           value="'+
((__t=(data.text))==null?'':_.escape(__t))+
'"\n           type="text"\n           disabled\n           readonly\n           autocapitalize="off"\n           autocorrect="off"\n           autocomplete="off"\n           spellcheck="false"\n           role="button"\n           name="'+
((__t=(data.text))==null?'':_.escape(__t))+
'"/>\n\n';
}
return __p;
}.apply(this, arguments))};


RM.templates['template-viewer-widget-text'] = function(){return $.trim(function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n\t';
var cc = column_count == 1 ? 'auto' : column_count;
__p+='\n\t<div style=" -webkit-nbsp-mode:space; -webkit-line-break:after-white-space; column-count:'+
((__t=(cc))==null?'':__t)+
';-webkit-column-count:'+
((__t=(cc))==null?'':__t)+
' !important;-moz-column-count:'+
((__t=(cc))==null?'':__t)+
';column-gap:'+
((__t=(column_gap))==null?'':__t)+
'px;-webkit-column-gap:'+
((__t=(column_gap))==null?'':__t)+
'px !important;-moz-column-gap:'+
((__t=(column_gap))==null?'':__t)+
'px;background:'+
((__t=(bg))==null?'':_.escape(__t))+
'">'+
((__t=(text))==null?'':__t)+
'</div>\n';
}
return __p;
}.apply(this, arguments))};



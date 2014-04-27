(function(){
	var templates = {
		navbar: {
			template: require('./templates/alarm.html'),
			destination: '#content',
			data:{message:''}
		},
		content: {
			template: require('./templates/navbar.html'),
			destination: '#navbar',
			data:{classes:'hidden'}
		},
		configAlarme: {
			template: require('./templates/config-alarme.html'),
			destination: '#content',//TODO
			data: {}
		}
	};

	var renderTemplates = function(templates){
		$.each(templates, function(template_name, template){
			template.html = template.template.render(template.data);
			$(template.destination).html(template.html);
		});
	}

	renderTemplates(templates);
}());

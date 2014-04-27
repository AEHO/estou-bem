(function(){
	var renderTemplates = function(templates){
		$.each(templates, function(template_name, template){
			template.html = template.template.render(template.data);
			$(template.destination).html(template.html);
		});
	}

	var templates = {
		navbar: {
			template: require('./templates/template.html'),
			destination: '#content',
			data:{message:'aeaeaeae'}
		},
		content: {
			template: require('./templates/navbar.html'),
			destination: '#navbar',
			data:{}
		},
		configAlarme: {
			template: require('./templates/config-alarme.html'),
			destination: '#content',
			data: {

			}
		}
	};

	renderTemplates(templates);
}());

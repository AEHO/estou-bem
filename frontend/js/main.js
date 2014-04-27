(function(){
    var templates = {
        alarm: {
            template: require('./templates/alarm.html'),
            destination: '#alarm',
            data:{message:''},
            fullscreen:true
        },
        navbar: {
            template: require('./templates/navbar.html'),
            destination: '#navbar',
            data:{},
            fullscreen:false
        },
        configAlarme: {
            template: require('./templates/config-alarme.html'),
            destination: '#configAlarm',
            data: {},
            fullscreen:false
        },
        main: {
            template: require('./templates/main.html'),
            destination: '#main',
            data: {},
            fullscreen:false
        },
        profile: {
            template: require('./templates/profile.html'),
            destination: '#profile',
            data: {},
            fullscreen:false
        }
    };

    var renderTemplates = function(templates, hash){
        var key = hash.substring(1, hash.length);
        var template = templates[key];
        
        $.each(templates, function(template_name, template){
            $(template.destination).hide();
        });

        if(!template.fullscreen){
            var navbar = templates.navbar;
            navbar.html = navbar.template.render(navbar.data);
            $(navbar.destination).html(navbar.html);
            $(navbar.destination).removeClass('hidden');
            $(navbar.destination).fadeIn();
        }

        template.html = template.template.render(template.data);
        $(template.destination).html(template.html);
        $(template.destination).removeClass('hidden');
        $(template.destination).fadeIn();
    };

    if(document.location.hash === '#' || !document.location.hash){
        renderTemplates(templates, '#main');
    }else{
        renderTemplates(templates, document.location.hash);
    }


    $(window).on('hashchange', function() {
        renderTemplates(templates, document.location.hash);
    });
}());

var events = require('./event.js');

(function(){
    var templates = {
        alarm: {
            template: require('./templates/alarm.html'),
            destination: '#alarm',
            data:{message:''}
        },
        navbar: {
            template: require('./templates/navbar.html'),
            destination: '#navbar',
            data:{}
        },
        configAlarme: {
            template: require('./templates/config-alarme.html'),
            destination: '#configAlarm',
            data: {}
        },
        main: {
            template: require('./templates/main.html'),
            destination: '#main',
            data: {}
        },
        profile: {
            template: require('./templates/profile.html'),
            destination: '#profile',
            data: {}
        }
    };

    var toggleDiv = function (div, hidden) {

        if (typeof hidden === 'undefined')
            throw new Error('coloca o hidden mano');


        var $div = $(div);
        if (hidden) {

            return $div.hide().removeClass('hidden').fadeIn();
        }
        return $div.fadeOut();
    };

    var renderTemplates = function(templates, hash){
        var key = hash.substring(1, hash.length);
        $.each(templates, function(template_name, template){
            $(template.destination).hide();
        });
        var template = templates[key];
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

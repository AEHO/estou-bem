(function(){
    var templates = {
        alarm: {
            template: require('./templates/alarm.html'),
            destination: '#alarm',
            data:{message:''},
        },
        navbar: {
            template: require('./templates/navbar.html'),
            destination: '#navbar',
            data:{},
        },
        configAlarme: {
            template: require('./templates/config-alarme.html'),
            destination: '#config-alarm',
            data: {},
        },
        main: {
            template: require('./templates/main.html'),
            destination: '#main',
            data: {},
        },
        profile: {
            template: require('./templates/profile.html'),
            destination: '#profile',
            data: {},
        }
    };

    var toggleDiv = function (div, hidden) {

        if (typeof hidden === 'undefined')
            throw new Error('coloca o hidden mano');

        console.log(div);

        var $div = $(div);
        if (hidden) {

            console.log('mostrar');

            return $div.hide().removeClass('hidden').fadeIn();
        }
        console.log('tirar');
        return $div.fadeOut();
    };

    var renderTemplates = function(templates){
        $.each(templates, function(template_name, template){
            template.html = template.template.render(template.data);
            $(template.destination).html(template.html);
        });
    };
    if(document.location.hash === '#' || !document.location.hash){
        toggleDiv("#config-alarm", true);
    }else{
        toggleDiv(document.location.hash, true);
    }


    $(window).on('hashchange', function() {
        toggleDiv(document.location.hash, true);
    });

    renderTemplates(templates);
}());

var events = require('./event.js');

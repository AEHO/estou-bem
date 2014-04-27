var events = (function($){
    $('#estou-mal').on('click', function(e){
        var $this = $(this);
        $this.text('Enviando alerta...');
        setTimeout(function(){
            $this.text('Alerta enviado');
            $this.addClass('sent');
        }, 5000);
    });
}($));

exports.events = events;

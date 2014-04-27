var send_mail = require('./send_mail').send_mail;

var events = (function($){
    $('.botao-mal').each(function(){
        var $this = $(this);
        var text_before = $this.text();
        $this.on('click', function(e){
            $this.text('Enviando alerta...');
            send_mail()
                .done(function(){
                    $this.text('Alerta enviado');
                    $this.addClass('sent');
                })
                .fail(function(){
                    $this.text('O ALERTA NÃO PODE SER ENVIADO!');
                })
                .always(function() {
                    setTimeout(function(){
                        $this.removeClass('sent');
                        $this.text(text_before);
                    }, 5000);
                }); 
        });
    });

    ///////////////////
    // CONFIG ALARME //
    ///////////////////

    (function () {

        var $configAlarm = $('#config-alarm');

        function getInputValues () {
            return {
                horaInicial: $('#hora-inicial', $configAlarm).val(),
                horaFinal: $('#hora-final', $configAlarm).val(),
                repeticoes: $('#repeticoes', $configAlarm).val()
            };
        }

        $('#btn-salvar-config', $configAlarm).click(function (ev) {
            var result = getInputValues();

            Android.showToast('dahora');
            Android.setAlarmFromJS();

            document.location.href = "/#main";

        });

    })();

}($));

exports.events = events;

var events = (function($){
    $('.botao-mal').each(function(){
        $(this).on('click', function(e){
            var $this = $(this);
            $this.text('Enviando alerta...');
            setTimeout(function(){
                $this.text('Alerta enviado');
                $this.addClass('sent');
            }, 5000);
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

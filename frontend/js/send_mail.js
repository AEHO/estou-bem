var send_mail = function(){
  var date = new Date();
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hour = date.getHours();
  var momento = hour + ":" + minutes +  ":" + seconds;
  var localizacao = "https://goo.gl/maps/UX1ec";
  var json_madrill = {
      "key": "",
      "template_name": "Estou bem",
      "template_content": [
          {
            "name":"localizacao",
            "content":localizacao,
          },
          {
            "name":"hora",
            "content":momento,
          }
      ],
      "message": {
          "to": [
              {
                  "email": "ciro_wrc@hotmail.com",
                  "name": "Ciro",
              }
          ],
          "headers": {
              "Reply-To": "contato@farmaciahumanitas.com.br"
          },
      },
      "async": true,
  },
  url = "https://mandrillapp.com/api/1.0/messages/send-template.json";
  return $.ajax({url:url, data:json_madrill,type:"POST"});
}

exports.send_mail = send_mail;

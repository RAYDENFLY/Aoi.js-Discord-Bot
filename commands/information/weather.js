module.exports = {
    name: "weather",
    code: `$title[Weather In $message] 
    $description[
    Locacion: **$jsonRequest[http://api.somecool.repl.co/weather?place=$message;location;]**
    Temperatura: **$jsonRequest[http://api.somecool.repl.co/weather?place=$message;temperature;]**
    Humedad: **$jsonRequest[http://api.somecool.repl.co/weather?place=$message;humidity;]**
    Velocidad del tiempo: **$jsonRequest[http://api.somecool.repl.co/weather?place=$message;wind_speed;]**
    Pantalla de viento: **$jsonRequest[http://api.somecool.repl.co/weather?place=$message;wind_display;]**
    Tiempo de observacion: **$jsonRequest[http://api.somecool.repl.co/weather?place=$message;observation_time;]**
    ]
    $argsCheck[>1;:x:Por favor, pon una locacion!]
    $color[76C8C0]`
    }
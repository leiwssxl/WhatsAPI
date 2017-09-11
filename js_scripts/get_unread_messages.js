var Chats = Store.Chat.models;
var ultimaMsg = {};

function evidenciaConsole(valor){
    var traco = "--------------------------------------------------------------";
    console.log(traco + " Inicio " + traco);
    console.log(JSON.stringify(valor));
    console.log(valor);
    console.log(traco + "  Fim   " + traco);
}

function getTipoVariavel(variavel){
    return ({}).toString.call(variavel).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}

function setCookie(name, value, duration) {
        var cookie = name + "=" + escape(value);
        document.cookie = cookie;
}

function getCookie(name) {
    var cookies = document.cookie;
    var prefix = name + "=";
    var begin = cookies.indexOf("; " + prefix);
 
    if (begin == -1) {
 
        begin = cookies.indexOf(prefix);
         
        if (begin != 0) {
            return null;
        }
 
    } else {
        begin += 2;
    }
 
    var end = cookies.indexOf(";", begin);
     
    if (end == -1) {
        end = cookies.length;                        
    }
 
    return unescape(cookies.substring(begin + prefix.length, end));
}
var Output = [];
for (chat in Chats) {
    if (isNaN(chat)) {
        continue;
    };
    console.log("SDF");
    
    
    var temp = {};
    temp.contact = Chats[chat].__x_formattedTitle;
    temp.id = Chats[chat].__x_id;
    temp.messages = [];
    var messages = Chats[chat].msgs.models;
    for (var i=messages.length-1;i>=0;i--) {
        if(getCookie(messages[i].id.remote) != i && !messages[i].id.fromMe){
            biscoito = getCookie(messages[i].id.remote);
            if(biscoito != null){
               if(biscoito == messages[i]["id"]["id"]){
                   break;
               } 
            }            
            evidenciaConsole(messages[i]);
            temp.messages.push(
                {
                    id: messages[i]["id"]["id"],
                    message: messages[i].__x_body,
                    timestamp: messages[i].__x_t,
                    clientUrl: messages[i].__x_clientUrl,
                    mediaKey: messages[i].__x_mediaKey,
                    type: messages[i].__x_type,
                    filename: messages[i].__x_filename,
                    lat: messages[i].__x_lat,
                    lng: messages[i].__x_lng
                }
            );
        }
    }
    if(temp.messages.length>0)
        Output.push(temp);
    
}
//console.log("hi", Output);

return Output;

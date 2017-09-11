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
//setCookie(messages[i].id.remote,[messages[i].__x_t,messages[i].__x_body]);
var Chats = Store.Chat.models;
var jid = arguments[0];
var idMensagem = arguments[1];
setCookie(jid, idMensagem);
return true

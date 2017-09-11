#!/usr/bin/env python2
import time
from webwhatsapp import WhatsAPIDriver
import re
from pprint import pprint

class WhatsappAPI(object):
    
    __driver =  None
    __ultimasMensagens = {}
    __tempoEspera = 10
        
    def __init__(self):
        self.__driver = WhatsAPIDriver()
        self.__driver.firstrun()
        self.espera()
        self.__driver.view_unread()
        
    def setTempoEspera(self, tempo):
        self.__tempoEspera = tempo
        
    def espera(self):
        time.sleep(self.__tempoEspera)
        
    def getMensagens(self):
        self.espera()
        javaScript = self.__driver.view_unread()
        contatos = {}
        contato = {}
        for contato in javaScript:
            jid = contato[u'id']
            contato['contato'] = contato[u'contact']
            self.salvaUltimaMensagem(jid, contato[u'messages'][0][u'id'])
            contato['mensagens'] = self.ordenaMsg(contato[u'messages'])
            contatos[jid] = contato.copy()
            contato.clear()
        return contatos
    
    def ordenaMsg(self, mensagens):
        return mensagens.reverse()
    
    def filtraJid(self, jid):
        return " ".join(re.findall("[0-9]+", jid))
    
    def salvaUltimaMensagem(self, jid, idMensagem):
        self.__driver.set_ultima_msg_recebida(jid, idMensagem)
        #self.__ultimasMensagens[jid] = idMensagem
        
    def enviarMensagem(self, jid, mensagem):
        print jid
        self.__driver.send_to_whatsapp_id(jid, mensagem)

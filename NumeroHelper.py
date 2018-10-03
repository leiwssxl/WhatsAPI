#!/usr/bin/python
import string

'''

    Exemplos:
    
    JID                  553194770338@c.us
    Numero               553194770338
    Numero Futurofone    031994770338
    
'''

class NumeroHelper():

    @staticmethod
    def toNumeroFutorofone(jid):
	arrayTelefone = string.split(jid, '@')
	return "0{ddd}9{tel}".format(ddd=arrayTelefone[0][2:-8], tel=arrayTelefone[0][4:])
    
    @staticmethod
    def toJid(numero):
        if '@' in numero:
            return numero
        return "%s@c.us" % numero

    @staticmethod
    def toNumero(numeroFuturofone):
        return "55{ddd}{tel}".format(ddd=numeroFuturofone[1:3], tel=numeroFuturofone[-8:]) 

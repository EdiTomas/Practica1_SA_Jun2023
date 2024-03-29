''' Importamos la libreria zeep la cual nos brindara soporte 
    para poder usar peticiones SOAP '''
from zeep import Client
import os
import requests


#import zeep


class Cliente():
    def __init__(self):
        #URL proporcionado con todos los servicios
        self.url = "http://www.dneonline.com/calculator.asmx?WSDL"

        #self.url= "https://pokeapi.co/api/v2/pokemon?"
        #objeto tipo cliente referente a la libreria zeep
        #self.client = Client(self.url)

    #Metodo utilizado para crear contacto (POST)
    def create(self,name="default",catid = 1, published = 1):
        '''Name:string(obligatorio), catid:int(opcional), published:int(opcional)'''
        #peticion para crear un contacto en el servidor SOAP
        self.client.service.create(name= name, catid=catid, published=published)


    #Metodo para listar contactos referentes al servidor (GET)
    def readList(self):
        #peticion al servicion readlList en el servidor SOAP
        result = self.client.service.readList()
        #recorremos el resultado para imprimirlo en consola
        for contact in result:
            print("ID:", contact["id"],"Nombre:",contact["name"])

    def Lista(self):
             payload={}
             headers={}
             link= "https://pokeapi.co/api/v2/pokemon?"
             response = requests.request("GET",link,headers=headers,data=payload)
             data=response.json()
             result = data['results']
             return result;
             #for x in result:
                
             #   print("Nombre:",x["name"],"url:", x["url"])
     
             #print(data)


    def Suma(self,num1,num2):
        
        #wsdl_url = os.environ.get('WSDL_URL')
        #url = "http://www.dneonline.com/calculator.asmx?WSDL"
        soap = Client(wsdl=self.url, 
                       service_name="Calculator",
                       port_name="CalculatorSoap12")
        result = soap.service.Add(num1, num2)
        return result;
        #print(result)
        #assert result == 10

#from flask import Flask





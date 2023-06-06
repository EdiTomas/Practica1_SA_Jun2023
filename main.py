#importamos nuestra clase cliente
from src.client import Cliente
#from flask import Flask, jsonify
#inicializamos nuestro objeto
#app = Flask(__name__)

#cliente = Cliente()
#creamos los contactos
#cliente.create(name="Fernando Jose Paz", catid=201404082, published = 1)

#listamos todos los contactos con nuestro cliente en el servidor SOAP
#cliente.readList()
#cliente.sometimes()
#cliente.Lista()

from flask import Flask, jsonify,request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/list',methods = ['GET'])
def List():
      cliente = Cliente()
      lista =cliente.Lista()
      return jsonify({
         "result":lista  
      });  

@app.route('/Suma',methods = ['POST'])
def Add():
       num1 = request.json['num1']
       num2 = request.json['num2']
       cliente = Cliente()
       resultado =cliente.Suma(num1,num2)
       return jsonify({
         "result":resultado  
      });  

if __name__ == '__main__':
     app.run(debug=True, port=4000)


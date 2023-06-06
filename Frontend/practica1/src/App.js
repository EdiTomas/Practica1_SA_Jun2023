//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table,Container } from 'reactstrap';
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
    const [consult, setconsult] = useState([]);
    const consulta = async () => {
      try{
          const res= await axios.get("http://localhost:4000/list");
          var dat=[];
          for(var i=0;i<res.data.result.length;i++){
            let vector =res.data.result[i];
            let lista ={
              name: vector['name'],
              url: vector['url']
            }
            dat.push(lista) ;
          }
        setconsult(dat);
      }catch(ex){
          console.log(ex);
      }
  };



















  useEffect(() => {
      consulta();
     
      




  }, []);



  const [data, setdata]=useState([
    {
        name:"Edi",
        url:"Pan",
    },
    {
        name:"Rudy",
        url:"Une",
    },
    ])

  
  return (
    <>
      <div>
      
      </div>
      <div>
        <Tabla data={consult}/> 
      </div>
     


    </>
  );
}

function Tabla(Prop) {
  return (
    <>
    <div>
      <Container>
            <Table>
                <thead>
                        <tr>
                        <th>No</th>
                        <th>Nombre</th>
                        <th>url</th>
                        </tr>
                </thead>
                <tbody>
                    {
                        Prop.data.map((elemento,index)=>(
                            <tr>
                            
                            <td>{index}</td>
                            <td>{elemento.name}</td>
                            <td>{elemento.url}</td>
                            </tr>)
                            
                        )
                    }
                    
                
                </tbody>  
            </Table>    
            
      </Container>
    </div>
  </>
  );
}

/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/ 
export default App;

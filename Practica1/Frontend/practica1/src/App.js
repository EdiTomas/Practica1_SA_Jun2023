//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table,Container,FormGroup,Button } from 'reactstrap';
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
    const [consult, setconsult] = useState([]);
    const [consult2, setconsult2] = useState([]);

    const [data, setdata]=useState([{  num1:0,num2:0}])
    const [formt, setformt] = useState({num1:0,num2:0});
  
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


  const consulta2 = async () => {
    try{
        const res= await axios.post("http://localhost:4000/Suma",data);
        
        console.log(res.data.result)
        let rs =res.data;
        //alert(rs)
        setconsult2(rs);
    }catch(ex){
        console.log(ex);
    }
};









const Insertar=(evt)=>{
  //console.log(formt)
  setdata([...data,formt])
  //consulta2(data);
     
}

function handlechange(evt) {
    const { target } = evt;
    const { name, value } = target;

    const newValues = {
      ...formt,
      [name]: value,
    };

  // Sincroniza el estado de nuevo
  setformt(newValues);
}






  useEffect(() => {
      consulta();
      consulta2();
     
      




  }, []);



  


  
  return (
    <>
      <div>
      <FormGroup>
            <label>Num1</label>
            <input className="form-control"  type="number" name="num1" onChange={handlechange}/>
      </FormGroup>
      <FormGroup>
            <label>Num2</label>
            <input className="form-control"  type="number" name="num2" onChange={handlechange} />
      </FormGroup>
      <FormGroup>
            <label>resultado</label>
            <input className="form-control"  type="number" name="total" value={consult2} />
      </FormGroup>
      <FormGroup>
            <Button color="success" onClick={Insertar}  >Insertar</Button>{" "}
      </FormGroup>
                              
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

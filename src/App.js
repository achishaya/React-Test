import React, { useEffect, useState } from 'react';
import {Paper, TextField, FormControl, Select, Button} from '@material-ui/core';
import Axios from 'axios';
import './style.css';

function App(){
  const [text1, setText1] = useState(1);
  const [text2, setText2] = useState(1);
  const [country1, setCountry1] = useState([]);
  const [country2, setCountry2] = useState([]);
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(1);

  useEffect(()=>{getData();},[])

  async function getData(){
    const result = await Axios.get("http://data.fixer.io/api/latest?access_key=914197e91c74e85d24ef074c03e1cd8d");
    console.log(result.data);
    setCountry1(result.data.rates);
    setCountry2(result.data.rates);
  }

  function convert(e){
    e.preventDefault();
    let num = (value2/value1)*text1;
    setText2(num);
  }

  return(
    <div>
        <Paper className = "paper">
        <h1>Currency Convertor</h1>
        <form onSubmit = {convert}>
        <div>
          <TextField variant = "outlined" value = {text1 || ""} onChange={(e) => setText1(e.target.value)} autoComplete = 'off'></TextField>
          <FormControl classname = "dropdown" variant = "outlined" onChange={(e) => setValue1(e.target.value)}>
            <Select native>
            {Object.keys(country1).map((value, index)=>
              <option key = {index} value = {country1[value]}>{value}</option>)}
            </Select>
          </FormControl>
        </div>
        <div>
          <TextField variant="outlined" value = {text2 || ""}></TextField>
          <FormControl classname = "dropdown" variant="outlined" onChange={(e) => setValue2(e.target.value)}>
            <Select native>
              {Object.keys(country2).map((value, index)=>
              <option key = {index} value = {country2[value]}>{value}</option>)}
              {/* <option>ASD</option> */}
            </Select>
          </FormControl>
        </div>

        <div>
        <Button type = "submit" classname = "button" variant = "contained">
          Convert
        </Button>
        </div>

        </form>

        </Paper>
    </div>
  );  
}

export default App;
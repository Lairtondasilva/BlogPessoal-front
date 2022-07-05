import axios from 'axios';

export const api = axios.create(
{
  baseURL:'https://bloggeneration.herokuapp.com/'
}
);

export const cadastrar = async (url: any, dados: any, setDados: any)=>{
  const response = await api.post(url, dados);
  setDados(response.data);
}

export const login = async (url: any, dados: any, setDados: any)=>{
  const response = await api.post(url, dados);
  setDados(response.data.token);
}
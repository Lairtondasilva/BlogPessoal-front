import axios, { Axios } from 'axios';

export const api = axios.create(
{
  baseURL:'https://my-blog-pessoal.herokuapp.com/'
}
);

export const cadastrar = async (url: any, dados: any, setDados: any)=>{
  const response = await api.post(url, dados);
  setDados(response.data);
}

export const login = async (url: any, dados: any, setDados: any)=>{
  try{
    const response = await api.post(url, dados);
    setDados(response.data.token);
    alert('login feito com sucesso')
  }
  catch(e){
    alert('Dados inconsistentes')
  }
}

export const busca = async (url:any, setDados: any, header:any)=>{
  const response = await api.get(url, header);
  setDados(response.data)
}

export const buscaId = async (url:any, setDados: any, header:any)=>{
  const response = await api.get(url, header);
  console.log(response.data.descricao)
  setDados(response.data)
}

export const post = async (url:any, dados:any, setDados: any, header:any)=>{
  const response = await api.post(url,dados, header);
  setDados(response.data)
}

export const put = async (url:any, dados:any, setDados: any, header:any)=>{
  const response = await api.put(url,dados, header);
  setDados(response.data)
}

export const deleteId = async (url:any,header:any)=>{
  await api.delete(url, header);
}
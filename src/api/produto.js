import http from './httpCommon';

const ULR_PRODUTO = '/produto';

const listarTodos = () => {
  return http.get(ULR_PRODUTO);
};

const listarID = (id) => {
  return http.get(`${ULR_PRODUTO}/${id}`);
};

const incluir = (data) => {
  return http.post(ULR_PRODUTO, data);
};

const atualizar = (id, data) => {
  return http.put(`${ULR_PRODUTO}/${id}`, data);
};

const deletar = (id) => {
  return http.delete(`${ULR_PRODUTO}/${id}`);
};

export default {listarTodos, incluir, atualizar, deletar, listarID,};

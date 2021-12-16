import http from './httpCommon';

const ULR_CATEGORIA = '/categoria';

const listarTodos = () => {
  return http.get(ULR_CATEGORIA);
};

export default {
  listarTodos,
};

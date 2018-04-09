import _ from 'lodash';

/* Método utilizado para facilitar a manupulação de erros */
const parseErrors = (errors) => {
  const result = {};
  _.forEach(errors, (val, key) => {
    result[key] = val.message;
  });
  return result;
};

/* Método que manupula rotas assíncronas. Utilizado para caso haja um erro */
const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export { parseErrors, asyncMiddleware };

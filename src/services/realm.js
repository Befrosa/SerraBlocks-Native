import Realm from 'realm';
import FuncionarioSchema from '../schemas/FuncionarioSchema';

function getRealm() {
  return Realm.open({
    schema: [FuncionarioSchema],
  });
}

export default getRealm;

import { BaseQuery } from './query';

type BaseSchema = {
  _type: string;
};

function create<Schema extends BaseSchema>(base?: string) {
  return new BaseQuery<Schema>(base);
}

const q = {
  create,
};

export default q;

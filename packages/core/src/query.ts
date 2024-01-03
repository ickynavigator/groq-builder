type BaseSchema = {
  _type: string;
};
type PickDocumentThatMatches<
  T extends BaseSchema,
  U extends T['_type'],
> = T extends { _type: U } ? T : never;

export interface Q<Schema extends BaseSchema> {
  //   filter: (docType: Schema['_type']) => any;
  //   filter: (docType: Schema['_type']) => {
  //     query: string;
  //     schema: PickDocumentThatMatches<Schema, 'personalInfo'>;
  //   };
}

interface IBaseQuery<Doc extends BaseSchema> extends Q<Doc> {}

export class BaseQuery<Schema extends BaseSchema>
  implements IBaseQuery<Schema>
{
  query = '';
  schema = {};

  constructor(base?: string) {
    this.query = base ?? '';
    return this;
  }

  // filter<DocType extends Schema['_type'] infer `${R}` ? R : never>(docType: DocType) {
  filter<DocType = Schema extends BaseSchema infer PickDocumentThatMatches<Schema, T> ? T : never>(docType: DocType) {
    // this.query += `[ _type = ${docType}]`;
    this.schema = {} as PickDocumentThatMatches<Schema, DocType>;

    return this;
  }
}

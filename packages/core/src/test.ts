import q from './index';

// SANITY DOCUMENTS
type SocialLinks = {
  _type: 'socialLinks';
  name: string;
};
type PersonalInfo = {
  _type: 'personalInfo';
  socialLinks: SocialLinks;
};
type Project = {
  _type: 'project';
};
type Documents = PersonalInfo | Project;

const query = q.create<Documents>();

const res = query.filter(['personalInfo']).schema;
//      ^?

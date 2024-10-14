export interface IMarkdownDocument {
  id: string;
  fileName: string;
  title: string;
  content: string;
  created: string | undefined; //Shouldn't be undefined
  updated: string | undefined; //Shouldn't be undefined
  tags: string[];
}

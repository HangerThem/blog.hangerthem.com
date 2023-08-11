import { IContent } from "./IContent";

export interface IPost {
  id: number;
  date: Date;
  type: "post" | "quote";
  title: string;
  content: IContent[];
}

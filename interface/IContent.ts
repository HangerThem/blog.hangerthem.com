import { IParagraph } from "./IParagraph";
import { IImage } from "./IImage";

export interface IContent {
  type: "paragraph" | "image" | "title" | "list";
  content: IParagraph | IImage | string | string[];
}

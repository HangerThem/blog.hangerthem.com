import { IParagraph } from "./IParagraph";
import { IImage } from "./IImage";

export interface IContent {
  type: "paragraph" | "image";
  content: IParagraph | IImage;
}

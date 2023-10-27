interface IPost {
  id: number;
  date: Date;
  author: string;
  title: string;
  content: (IParagraph | IImage | IHeader | IList)[];
}

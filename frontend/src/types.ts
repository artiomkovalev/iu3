export interface ICard {
  id: number;
  coverUrl: string;
  title: string;
  description: string;
  degrees: string[];
  subjectIds: number[];
};

export interface Comics {
  id: number;
  src: string;
  date: string;
};
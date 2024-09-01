export interface ISubject {
  id: number;
  title: string;
  degree: "b1"|"b2"|"m";
  hours: number[];
  description: string;
  faculty: {
    name: string;
    link: string;
  };
  tutors: string[];
  technologies: {
    logoUrl: string;
    link: string;
  }[];
};

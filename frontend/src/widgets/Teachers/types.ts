export interface IText {
  tag: "text",
  content: string;
};

export interface ILink {
  tag: "link",
  content: {
    title: string;
    link: string;
  };
};

export interface ITeacher {
  avatarUrl: string;
  name: string;
  description: (IText | ILink)[];
};

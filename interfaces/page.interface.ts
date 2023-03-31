export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}
export interface Advantage {
  _id: string;
  title: string;
  description: string;
}
export interface Hh {
  _id: string;
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updatedAt: Date;
}
export interface TopPageModel {
  tags: string[];
  _id: string;
  secondCategori: string;
  alias: string;
  title: string;
  category: string;
  seoText: string;
  tagsTitle: string;
  metaTitle: string;
  metaDescription: string;
  firstCategory: TopLevelCategory;
  advantages: Advantage[];
  createAt: Date;
  updateAt: Date;
  __v: number;
  hh: Hh;
}

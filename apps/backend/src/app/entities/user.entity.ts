import { Course } from "./course.entity"

export class User {
  _id: string;
  isOnline: boolean;
  name: string;
  avatar: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  inscriptionDate: string;
  courses: Course[];
}

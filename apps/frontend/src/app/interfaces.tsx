export interface Course {
  _id: string;
  name: string;
  description: string;
  inscriptionDate: string;
  percentCompleted: number;
}
export interface User {  
  _id: string;
  name: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  inscriptionDate: string;
  avatar: string;
  isOnline: boolean;
  courses: Course[];
}

export interface InfoUserProps {
  user: User;
}

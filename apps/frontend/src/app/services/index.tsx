import { User } from "../interfaces";

type Response = {
  data: User[];
}

const getUsers = async (currentPage: number): Promise<Response>  => {
  const response = await fetch(`http://localhost:3333/api/users?page=${currentPage}`);
  const data = await response.json();
  return data
};

export {
  getUsers
}
import { User } from "../entities/user.entity";

export class ListAllEntities {
  data: User[];
  totalItems: number;
  currentPage: number;
  totalPages: number;
}

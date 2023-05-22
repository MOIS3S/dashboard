import { useEffect } from "react";
import useAppStore from "../store";
import { getUsers } from "../services";


export function fetchUsers(currentPage: number) {
  const [users, setUsers] = useAppStore(state => [state.users, state.setUsers]);

  const feactUsers = async () => {
    const data = await getUsers(currentPage);
    setUsers([...new Set([...data.data, ...users])]);
  };

  useEffect(() => {
    feactUsers();
  }, [currentPage]);

  return [users]
}
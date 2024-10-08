import { User } from "../types/User";

export const filterUsers = (users: User[], filterText: string) => {
  return users.filter(user =>
    user.name.toLowerCase().includes(filterText.toLowerCase())
  );
};

import { User } from "../types/User";

export const sortUsers = (
  users: User[],
  field: "name" | "email",
  order: "asc" | "desc"
) => {
  return users.sort((a, b) => {
    if (order === "asc") {
      return a[field] > b[field] ? 1 : -1;
    } else {
      return a[field] < b[field] ? 1 : -1;
    }
  });
};

import { User } from "../types/User";

const USER_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsersAPI = async () => {
  try {
    const response = await fetch(USER_URL, {
      method: "GET",
      cache: "force-cache"
    });
    const data: User[] = await response.json();
    return data;
  } catch (error) {
    console.log({ error });
    return [];
  }
};

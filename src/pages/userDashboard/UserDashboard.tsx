import React, { useEffect, useState } from "react";
import styles from "./UserDashboard.module.scss";
import { User } from "../../types/User";
import UserCard from "../../components/userItem/UserCard";
import UserFilter from "../../components/filterSortBar/UserFilterSortBar";
import { fetchUsersAPI } from "../../services/userService";
import { filterUsers } from "../../utils/filterUsers";
import { sortUsers } from "../../utils/sortUsers";

export default function UserDashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchedName, setSearchedName] = useState("");
  const [sortField, setSortField] = useState<"name" | "email">("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await fetchUsersAPI();
      setUsers(data);
      setFilteredUsers(data);
    };
    fetchUsers();
  }, []);

  const handleSearchName = (name: string) => {
    setSearchedName(name);
  };

  const handleSortField = (field: "name" | "email") => {
    setSortField(field);
  };

  const handleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  useEffect(() => {
    let sortedUsers = [...users];

    if (searchedName) {
      sortedUsers = filterUsers(sortedUsers, searchedName);
    }

    sortedUsers = sortUsers(sortedUsers, sortField, sortOrder);
    setFilteredUsers(sortedUsers);

    setFilteredUsers(sortedUsers);
  }, [users, searchedName, sortField, sortOrder]);

  return (
    <>
      <UserFilter
        searchedName={searchedName}
        handleSearchName={handleSearchName}
        sortOrder={sortOrder}
        handleSortOrder={handleSortOrder}
        sortField={sortField}
        handleSortField={handleSortField}
      />

      {filteredUsers.length === 0 ? (
        <div>
          <p className="center-text">No users found</p>
        </div>
      ) : (
        <div className={styles.userGrid}>
          {filteredUsers.map(user => (
            <UserCard user={user} searchTerm={searchedName} key={user.id} />
          ))}
        </div>
      )}
    </>
  );
}

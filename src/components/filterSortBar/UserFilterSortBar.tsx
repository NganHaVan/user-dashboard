import React from "react";
import styles from "./UserFilterSortBar.module.scss";

interface UserFilterProps {
  searchedName: string;
  handleSearchName: (name: string) => void;
  sortOrder: "asc" | "desc";
  handleSortOrder: () => void;
  sortField: "name" | "email";
  handleSortField: (sortField: "name" | "email") => void;
}

const UserFilter: React.FC<UserFilterProps> = ({
  searchedName,
  handleSearchName,
  sortOrder,
  handleSortOrder,
  sortField,
  handleSortField
}) => {
  return (
    <div className={styles.controls}>
      <input
        type="text"
        placeholder="Search by name"
        value={searchedName}
        onChange={e => handleSearchName(e.target.value)}
        className={styles.searchInput}
      />
      <select
        value={sortField}
        onChange={e => handleSortField(e.target.value as "name" | "email")}
        className={styles.sortDropdown}
      >
        <option value="name">Sort by Name</option>
        <option value="email">Sort by Email</option>
      </select>
      <button onClick={handleSortOrder} className={styles.sortButton}>
        Sort Order: {sortOrder === "asc" ? "Ascending" : "Descending"}
      </button>
    </div>
  );
};

export default UserFilter;

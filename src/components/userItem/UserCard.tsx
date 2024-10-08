import React from "react";
import { User } from "../../types/User";
import styles from "./UserCard.module.scss";

export default function UserCard({
  user,
  searchTerm
}: {
  user: User;
  searchTerm: string;
}) {
  // Function to highlight matching letters in the list
  const highlightMatchedName = (text: string, highlight: string) => {
    if (!highlight.trim()) return text;

    const regex = new RegExp(`(${highlight})`, "gi"); // Case-insensitive matching
    const parts = text.split(regex);

    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={index} className={styles.highlight}>
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <div className={styles.userCard}>
      <h2>{highlightMatchedName(user.name, searchTerm)}</h2>
      <p>
        <b>Email:</b> {user.email}
      </p>
      <p>
        <b>Phone:</b> {user.phone}
      </p>
      <p>
        <b>Website:</b> {user.website}
      </p>
      <p>
        <b>Address:</b> {user.address.street}, {user.address.city},{" "}
        {user.address.zipcode}
      </p>
    </div>
  );
}

import { useState, createContext, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  //---------------------------------

  //bien user nhan o day la nhan state ban dau neu trong localstograte co san currentUser
  const [currentUser, setCurrentUser] = useState(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    return user || null;
  });
  // con bien user nhan o day la nhan tu ham mutation gui ben signin qua khong lien quan user o tren
  const handleSignin = (user) => {
    // phai set state khi dang nhap chu khong bien currentUser khong co tac dung va bi null
    setCurrentUser(user);

    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  const handleSignout = () => {
    setCurrentUser(null);

    // // Xóa currentUser trong localStograte
    localStorage.removeItem("currentUser");
    // Xóa currentUser trong localStograte
    localStorage.removeItem("storedCartIdfromUser");
  };

  return (
    <UserContext.Provider value={{ currentUser, handleSignin, handleSignout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const value = useContext(UserContext);
  return value;
};

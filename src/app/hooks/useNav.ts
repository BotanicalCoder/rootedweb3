import { useState } from "react";

function useNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen((prevState) => !prevState);
  };

  return [toggleNav, isOpen];
}

export default useNav;

"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./menu.module.css";

export type TItems = {
  name: string;
  icon?: string;
  command: () => void;
};

interface Props {
  items: TItems[];
}

function Menu({ items }: Props): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const openMenu = (): void => {
    setIsOpen(true);
  };

  const selectedMenu = (action: () => void): void => {
    setIsOpen(false);
    action();
  };

  const clickOutsideMenu = (e: MouseEvent) => {
    if (!menuRef.current?.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", clickOutsideMenu);
    return () => {
      document.removeEventListener("click", clickOutsideMenu);
    };
  }, []);

  return (
    <div ref={menuRef} className={styles.menu}>
      <button className={styles["menu-trigger"]} type="button" onClick={openMenu}>
        Select board
      </button>
      {isOpen && (
        <div className={styles["menu-content"]}>
          {items.map((item) => (
            <button
              key={item.name}
              className={styles["menu-content__item"]}
              type="button"
              onClick={() => selectedMenu(item.command)}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
export default Menu;

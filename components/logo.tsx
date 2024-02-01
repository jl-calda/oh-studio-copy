import { MdOutlineWbSunny } from "react-icons/md";
import { LuSunDim } from "react-icons/lu";
import { MdSunny } from "react-icons/md";
import { cn } from "@/lib/utils";

import styles from "./logo.module.scss";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <div>
        <MdOutlineWbSunny className={cn(styles.icon, styles.icon_2)} />
        <LuSunDim className={cn(styles.icon, styles.icon_2)} />
        <MdSunny className={cn(styles.icon, styles.icon_2)} />
      </div>
    </div>
  );
};

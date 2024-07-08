import React, { ReactNode } from "react";
import CategoryNav from "./categorynav";


const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <CategoryNav />
        <main>{children}</main>
      
    </div>
  );
};

export default layout;

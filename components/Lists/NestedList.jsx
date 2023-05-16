import React from "react";
import { ListItem } from "..";

const NestedList = ({ items }) => {
  return (
    <ul className="flex flex-col gap-2">
      {items?.map((item) => (
        <ListItem key={item.id} title={item.title}>
          {item.children && <NestedList items={item.children} />}
        </ListItem>
      ))}
    </ul>
  );
};

export default NestedList;

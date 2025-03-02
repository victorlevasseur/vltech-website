import React, {Children} from "react";

export const parseTechKeywordFilter = (children?: React.ReactNode, override?: string) => {
  const childrenArray = Children.toArray(children);
  const computedInternalName = childrenArray
    .filter((child) => typeof child === "string")
    .reduce((text, part) => text + part, '');

  const internalName = (override ?? computedInternalName)
    .toLowerCase()
    .replace(' ', '-')
    .replace('.', '');

  if (!internalName) {
    throw Error('Unable to compute TechKeyword internal name, please provide one manually as a prop.');
  }

  return internalName;
}
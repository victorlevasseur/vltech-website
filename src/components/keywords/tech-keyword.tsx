import React, { Children } from 'react';
import Link from "next/link";
import {isTechnologyWithProjects} from "@/common/technologies.actions";

export interface TechKeywordProps {
  /**
   * To provide another name for the keyword when searching in
   * the project list.
   */
  technologyId?: string;

  children?: React.ReactNode;
}

export const parseTechKeywordFilter = (children?: React.ReactNode, override?: string) => {
  const childrenArray = Children.toArray(children);
  const computedTechnologyId = childrenArray
    .filter((child) => typeof child === "string")
    .reduce((text, part) => text + part, '');

  const technologyId = (override ?? computedTechnologyId)
    .toLowerCase()
    .replaceAll(' ', '-')
    .replaceAll('.', '');

  if (!technologyId) {
    throw Error('Unable to compute TechKeyword technology id, please provide one manually as a prop.');
  }

  return technologyId;
}

export const TechKeyword: React.FC<TechKeywordProps> = async (props) => {
  const technologyId = parseTechKeywordFilter(props.children, props.technologyId);

  if (await isTechnologyWithProjects(technologyId)) {
    return (
      <Link href={'/projects?tech=' + encodeURIComponent(technologyId)}>
        {props.children}
      </Link>
    );
  } else {
    return (
      <em>{props.children}</em>
    );
  }
}

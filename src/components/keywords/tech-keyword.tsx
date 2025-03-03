import React from "react";
import Link from "next/link";
import {isTechnologyWithProjects, parseTechKeywordFilter} from "@/data/technology-utils";

export interface TechKeywordProps {
  /**
   * To provide another name for the keyword when searching in
   * the project list.
   */
  technologyId?: string;

  children?: React.ReactNode;
}

export const TechKeyword: React.FC<TechKeywordProps> = (props) => {
  const technologyId = parseTechKeywordFilter(props.children, props.technologyId);

  if (isTechnologyWithProjects(technologyId)) {
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

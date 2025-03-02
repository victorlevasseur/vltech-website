import React from "react";
import Link from "next/link";
import {parseTechKeywordFilter} from "@/components/keywords/tech-keyword-utils";

export interface TechKeywordProps {
  /**
   * To provide another name for the keyword when searching in
   * the project list.
   */
  internalName?: string;

  children?: React.ReactNode;
}

export const TechKeyword: React.FC<TechKeywordProps> = (props) => {
  const internalName = parseTechKeywordFilter(props.children, props.internalName);

  return (
    <Link href={'/projects?tech=' + encodeURIComponent(internalName)}>
      {props.children}
    </Link>
  );
}

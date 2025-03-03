import React from "react";
import {Technology} from "@/data/technology/technology";

export interface Project {
  id: string;

  name: string;
  summary: string;

  /**
   * Full description of the project, as a markdown string or a fully custom React component.
   */
  content: string | React.ComponentType;

  technologies: Technology[];
}
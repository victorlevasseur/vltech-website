import React from "react";
import {LayoutContainer} from "@/components/layout/layout-container";
import {LayoutColumn} from "@/components/layout/layout-column";
import {Page} from "@/components/layout/page";

const ProjectPage: React.FC<{ searchParams: Promise<Record<string, string|string[]|undefined>> }> = async (props) => {
  const searchParams = await props.searchParams;
  const techKeyword = searchParams.tech;

  return (
    <Page>
      <LayoutContainer>
        <LayoutColumn small={12}>
          {
            techKeyword ?
              (<p>
                Retrouvez bientôt ici les projets que j&apos;ai réalisés pendant mes expériences passées en {techKeyword}.
              </p>) :
              (<p>
                Retrouvez bientôt ici les projets que j&apos;ai réalisés pendant mes expériences passées.
              </p>)
          }
        </LayoutColumn>
      </LayoutContainer>
    </Page>
  )
}

export default ProjectPage;
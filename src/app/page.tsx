import { LayoutColumn } from "@/components/layout/layout-column";
import { LayoutContainer } from "@/components/layout/layout-container";
import { Page } from "@/components/layout/page";

export default function Home() {
  return (
    <Page>
      <LayoutContainer>
        <LayoutColumn small={12}>
          <h1>Victor Levasseur Tech</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis nesciunt laboriosam fugiat! Possimus amet eaque ut provident. 
            Tempore tempora natus explicabo amet eligendi non voluptates ullam, autem exercitationem quibusdam sapiente.
          </p>
          <h2>Victor Levasseur Tech</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ullamcorper, justo at suscipit lacinia, justo nisi aliquet dui, nec
            fermentum nisl purus nec justo. Vivamus nec orci at mi ultrices
            tincidunt. Sed vel nulla ac justo tincidunt luctus. Nullam
            ullamcorper, justo at suscipit lacinia, justo nisi aliquet dui, nec
            fermentum nisl purus nec justo. Vivamus nec orci at mi ultrices
            tincidunt. Sed vel nulla ac justo tincidunt luctus.
          </p>
          <h3>Victor Levasseur Tech</h3>
        </LayoutColumn>
      </LayoutContainer>
    </Page>
  );
}

import {Page} from "@/components/layout/page";
import {LayoutContainer} from "@/components/layout/layout-container";
import {LayoutColumn} from "@/components/layout/layout-column";

export default function FakePage() {
  return (
    <Page>
      <LayoutContainer>
        <LayoutColumn large={12}>
          <p>This is a fake page!</p>
        </LayoutColumn>
      </LayoutContainer>
    </Page>
  )
}
import { LayoutColumn } from "@/components/layout/layout-column";
import { LayoutContainer } from "@/components/layout/layout-container";
import { Page } from "@/components/layout/page";

export default function Home() {
  return (
    <Page>
      <LayoutContainer>
        <LayoutColumn small={12}>
          <h1>Victor Levasseur</h1>

          <p><em>Avec mon expérience à la fois technique et stratégique, je suis capable de concevoir des solutions robustes et adaptées à vos besoins qu&apos;il s&apos;agisse de performance, de scalabilité ou de sécurité.</em></p>

          <p>Je suis en mesure d&apos;intervenir sur tous les aspects de votre projet :</p>
          <ul>
            <li>backends monolithiques ou en microservices (Spring Boot, Node.js, ...)</li>
            <li>frontends monolithiques ou en microfrontend (Angular, React, React Native, single-spa.js)</li>
            <li>infrastructures (AWS, infra as code, CI/CD, solutions de monitoring diverses, ...).</li>
          </ul>

          <p>Je peux également apporter mes conseils sur votre stratégie IT pour vous aider à développer votre projet.</p>

          <p>Votre projet a besoin de scaler ? Je peux également vous aider à recruter en interne des talents pour le pérenniser.</p>
    
          <p>A l&apos;écoute pour découvrir vos projets et vous proposer une prestation adaptée.</p>

          <p><em>Ce site est encore en construction, retrouvez toutes les infos et contactez moi sur <a href="https://www.malt.fr/profile/victorlevasseur2">mon profil Malt</a>.</em></p>
        </LayoutColumn>
      </LayoutContainer>
    </Page>
  );
}

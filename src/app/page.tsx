import { LayoutColumn } from '@/components/layout/layout-column';
import { LayoutContainer } from '@/components/layout/layout-container';
import { Page } from '@/components/layout/page';
import { LinkButton } from '@/components/button/link-button';
import { CONFIG } from '@/config';

import styles from './page.module.scss';
import Image from "next/image";

export default function Home() {
  return (
    <Page>
      <LayoutContainer>
        <LayoutColumn small={12}>
          <hgroup>
            <h1>Victor Levasseur</h1>
            <p>
              Tech Lead Java, Spring Boot, Angular, React et AWS en freelance.
            </p>
          </hgroup>
        </LayoutColumn>
        <LayoutColumn small={12} medium={5} large={4} className={styles.myselfPictureColumn}>
          <Image
            className={styles.myselfPicture}
            src={'/assets/me.png'}
            alt={'Victor Levasseur'}
            fill
            objectFit={'contain'}
            sizes={'(max-width: 575px), 100vw, 33vw'}/>
        </LayoutColumn>
        <LayoutColumn small={12} medium={7} large={8}>
          <p>
            <em>
              Avec mon expérience à la fois technique et stratégique, je suis
              capable de concevoir des solutions robustes et adaptées à vos
              besoins qu&apos;il s&apos;agisse de performance, de scalabilité ou
              de sécurité.
            </em>
          </p>

          <p>
            Je suis en mesure d&apos;intervenir sur tous les aspects de votre
            projet :
          </p>
          <ul>
            <li>
              backends monolithiques ou en microservices (Spring Boot, Node.js,
              ...)
            </li>
            <li>
              frontends monolithiques ou en microfrontend (Angular, React, React
              Native, single-spa.js)
            </li>
            <li>
              infrastructures (AWS, infra as code, CI/CD, solutions de
              monitoring diverses, ...).
            </li>
          </ul>

          <p>
            Je peux également apporter mes conseils sur votre stratégie IT pour
            vous aider à développer votre projet.
          </p>

          <p>
            Votre projet a besoin de scaler ? Je peux également vous aider à
            recruter en interne des talents pour le pérenniser.
          </p>
        </LayoutColumn>
        <LayoutColumn small={12}>
          <p>
            A l&apos;écoute pour découvrir vos projets et vous proposer une
            prestation adaptée.
          </p>
          <div className={styles.ctaContainer}>
            <LinkButton
              label={'Discuter de votre projet'}
              href={CONFIG.calendlyUrl}
              target={'_blank'}
            />
            <LinkButton
              variant={'secondary'}
              label={'Consulter mon profil sur Malt'}
              href={CONFIG.maltUrl}
              target={'_blank'}
            />
          </div>
          <p></p>
          <p>
            <em>
              Ce site est en construction, revenez vite pour découvrir plus de
              contenu.
            </em>
          </p>
        </LayoutColumn>
      </LayoutContainer>
    </Page>
  );
}

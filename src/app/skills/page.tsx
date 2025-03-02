import React from "react";
import {Page} from "@/components/layout/page";
import {LayoutContainer} from "@/components/layout/layout-container";
import {LayoutColumn} from "@/components/layout/layout-column";
import {InfoCard} from "@/components/card/info-card";
import {TechKeyword as TK} from "@/components/keywords/tech-keyword";

const SkillsPage: React.FC = () => {
  return (
    <Page>
      <LayoutContainer>
        <LayoutColumn small={12}>
          <h1>Compétences</h1>
          <p>
            Mes compétences variées me permettent d&apos;intervenir sur <em>tous les aspects</em> de votre projet
            et sur une large panoplie de technologies, réputées et récentes, afin de trouver les solutions adaptées
            et opportunes.
          </p>
          <p>
            Vous pouvez cliquer sur les technologies mentionnées pour découvrir les projets réalisés avec.
          </p>
        </LayoutColumn>
        <LayoutColumn small={12} medium={12} large={6}>
          <InfoCard title={'Langages'} fullHeight>
            <p>Expertise en <TK>Java</TK>, <TK>Javascript</TK>, <TK>Typescript</TK> et C++.</p>
            <p>Connaissances en Kotlin, Rust, C et Python.</p>
          </InfoCard>
        </LayoutColumn>
        <LayoutColumn small={12} medium={12} large={6}>
          <InfoCard title={'Frontend'} fullHeight>
            <p>Expertise en <TK>Angular</TK>, <TK>React</TK> et <TK>React Native</TK></p>
            <p>Expertise en conception de <TK>microfrontends</TK>, avec notamment <TK>single-spa.js</TK></p>
            <p>
              Connaissances en <TK>analytics</TK> (Firebase, Google Analytics, Amplitude)
              et en <TK internalName={'gtm'}>tag management/plan de taggage</TK> (GTM).
            </p>
            <p>Expertise en implémentation de <TK>Design System</TK> (gestion de lib, Storybook, Chromatic).</p>
            <p>
              Sensibilisé au problématiques d&apos;<TK>accessibilité</TK> et de <TK>SEO</TK>.
            </p>
          </InfoCard>
        </LayoutColumn>
        <LayoutColumn small={12} medium={12} large={6}>
          <InfoCard title={'Backend'} fullHeight>
            <p>
              Expertise sur les frameworks backend comme <TK>Spring Boot</TK>, <TK>ExpressJS</TK> (NodeJS)
              et <TK>Quarkus.</TK>
            </p>
            <p>
              Expertise en <TK>SQL</TK>, en base de données <TK>PostgreSQL</TK>, <TK>AWS DynamoDB</TK>,
              et en ORM <TK>Hibernate</TK>.
            </p>
            <p>
              Expertise en <TK>REST</TK>, <TK>GraphQL</TK> (dont &quot;Federation&quot; avec Apollo Server/Gateway/Router)
              et <TK>gRPC</TK>.
            </p>
            <p>
              Maîtrise de conceptions de backends en <TK>micro-services</TK>, avec des communications synchrones ou
              asynchrones (messaging bus, etc.), gateways.
            </p>
            <p>Maîtrise de <TK>Elasticsearch</TK> (et Kibana) et <TK>AWS OpenSearch</TK></p>
            <p>Maîtrise de <TK>CMS Headless</TK> (Prismic et Strapi).</p>
          </InfoCard>
        </LayoutColumn>
        <LayoutColumn small={12} medium={12} large={6}>
          <InfoCard title={'Infrastructure'} fullHeight>
            <p>
              Expertise sur l&apos;utilisation du cloud <TK>AWS</TK> dont <TK>EC2</TK>, <TK>ECS</TK>, <TK>ALB</TK>, <TK>Autoscaling</TK>, <TK>
              VPC</TK> (et Client VPN), <TK>RDS</TK>, <TK>DynamoDB</TK>, <TK>S3</TK>, <TK>CloudFront</TK>, <TK>
              Lambda</TK>, <TK>EventBridge</TK>, <TK>SQS</TK>.
            </p>
            <p>
              Expertise sur la gestion du cloud <TK>AWS</TK> avec des services comme <TK>
              IAM</TK>, <TK>IAM Identity Center</TK>, <TK>Organization</TK>
            </p>
            <p>
              Expertise en CI/CD sur <TK>AWS CodePipeline</TK>, <TK>AWS CodeBuild</TK>, <TK>
              GitLab CI</TK>, <TK>GitHub Actions</TK> et les stratégies de déploiement sans interruption.
            </p>
            <p>
              Expertise en monitoring avec des solutions AWS native et open-source comme <TK>
              AWS CloudWatch</TK> (metrics, logs, traces), <TK>Prometheus</TK> et <TK>Grafana</TK>.
            </p>
            <p>
              Expertise en infra-as-code (IaC) avec <TK>AWS CDK</TK> et connaissances en <TK>Terraform</TK>.
            </p>
            <p>
              Maîtrise de technologies de conteneurisation comme <TK>Docker</TK>.
            </p>
            <p>
              Sensibilisation à Kubernetes et aux outils GitOps (ArgoCD).
            </p>
          </InfoCard>
        </LayoutColumn>
        <LayoutColumn small={12} medium={12} large={6}>
          <InfoCard title={'Architecture'} fullHeight>
            <p>
              Expertise en architecture <TK>micro-services</TK> et <TK>microfrontends</TK>.
            </p>
            <p>
              Expertise en analyse de coût cloud <TK>AWS</TK>.
            </p>
            <p>
              Maîtrise des problématiques de sécurités : scanner d&apos;image Docker,
              sécurité et bonnes pratiques du cloud (Lacework).
            </p>
            <p>
              Maîtrise des méthodologies agiles (scrum, kanban).
            </p>
            <p>
              Maîtrise de modélisations de systèmes d&apos;information : UML et <TK>C4</TK>
            </p>
          </InfoCard>
        </LayoutColumn>
        <LayoutColumn small={12} medium={12} large={6}>
          <InfoCard title={'Management & Coaching'} fullHeight>
            <p>Management de plusieurs squads de développeurs</p>
            <p>
              Coaching et collaboration avec les équipes de dev mais aussi produit pour
              travailler sur les spécifications techniques et fonctionnelles.
            </p>
            <p><TK>Formation</TK> des équipes.</p>
            <p>Evaluation annuelles et feedback aux équipes.</p>
            <p><TK>Recrutement</TK> de profils de Tech Lead et de développeurs.</p>
          </InfoCard>
        </LayoutColumn>
      </LayoutContainer>
    </Page>
  )
};

export default SkillsPage;
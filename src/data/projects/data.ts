import {Project} from "@/data/projects/project";
import {TECHNOLOGIES} from "@/data/technology/data";

export const PROJECTS = {
  'vltech-website': {
    id: 'vltech-website',
    name: 'Site Web victorlevasseur.tech',
    summary: 'Ce site web, oui oui, ce site web sur lequel vous naviguez actuellement',
    content: `
      Le site a été conçu à l'aide du framework Next.js qui permet d'exploiter React
      avec des fonctionnalité très puissantes favorisant le SEO comme le SSR et les 
      Server Components.

      Il est déployé sur AWS à l'aide de Terraform et du module Open Next pour avoir
      des fonctionnalités au plus proche d'un déploiement Next.js chez Vercel tout en 
      réduisant les coûts (grâce à l'utilisation de AWS Lambda).

      Des workflows GitHub Actions permettent de gérer les pull requests et leur validation facilement.
      Des tests unitaires, de composants (comportement et visuels avec Storybook et Chromatic)
      et E2E (Cypress) sont exécutés sur chaque pull request.
      
      Les mises en production sont également automatisée par un workflow GitHub Actions.

      Renovate gère les mises à jour des dépendances automatiquement (et les workflows GitHub Actions)
      permettent de pouvoir avoir un merge automatique des versions mineures et patch sans intervention.
    `,
    technologies: [
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.react,
      TECHNOLOGIES.aws,
      TECHNOLOGIES.terraform,
      TECHNOLOGIES["github-actions"],
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.javascript,
      TECHNOLOGIES.sass,
      TECHNOLOGIES.yarn,
      TECHNOLOGIES.prettier,
      TECHNOLOGIES["design-system"],
      TECHNOLOGIES.storybook,
      TECHNOLOGIES.chromatic,
      TECHNOLOGIES["aws-lambda"],
      TECHNOLOGIES["aws-cloudfront"],
      TECHNOLOGIES["aws-s3"]
    ]
  },
} satisfies { [projectId: string]: Project };

import { Technology } from '@/data/technology/technology';
import { TechnologyCategory } from '@/data/technology/technology-category';

export const TECHNOLOGIES_CATEGORIES = {
  Language: {
    id: 'Language',
    name: 'Langage',
    priority: 0,
  },
  Backend: {
    id: 'Backend',
    name: 'Back-end',
    priority: 1,
  },
  Frontend: {
    id: 'Frontend',
    name: 'Front-end',
    priority: 2,
  },
  Infra: {
    id: 'Infra',
    name: 'Infrastructure',
    priority: 3,
  },
  Tools: {
    id: 'Tools',
    name: 'Outillage',
    priority: 3.5,
  },
  Architecture: {
    id: 'Architecture',
    name: 'Architecture',
    priority: 4,
  },
  Management: {
    id: 'Management',
    name: 'Management',
    priority: 5,
  },
} satisfies { [technologiesCategoryId: string]: TechnologyCategory };

export const TECHNOLOGIES = {
  java: {
    id: 'java',
    name: 'Java',
    category: TECHNOLOGIES_CATEGORIES.Language,
  },
  javascript: {
    id: 'javascript',
    name: 'Javascript',
    category: TECHNOLOGIES_CATEGORIES.Language,
  },
  typescript: {
    id: 'typescript',
    name: 'Typescript',
    category: TECHNOLOGIES_CATEGORIES.Language,
  },
  sass: {
    id: 'sass',
    name: 'SASS',
    category: TECHNOLOGIES_CATEGORIES.Language,
  },

  angular: {
    id: 'angular',
    name: 'Angular',
    category: TECHNOLOGIES_CATEGORIES.Frontend,
  },
  react: {
    id: 'react',
    name: 'React',
    category: TECHNOLOGIES_CATEGORIES.Frontend,
  },
  'react-native': {
    id: 'react-native',
    name: 'React Native',
    category: TECHNOLOGIES_CATEGORIES.Frontend,
  },
  nextjs: {
    id: 'nextjs',
    name: 'Next.js',
    category: TECHNOLOGIES_CATEGORIES.Frontend,
  },
  microfrontends: {
    id: 'microfrontends',
    name: 'Microfrontends',
    category: TECHNOLOGIES_CATEGORIES.Frontend,
  },
  'single-spajs': {
    id: 'single-spajs',
    name: 'single-spa.js',
    category: TECHNOLOGIES_CATEGORIES.Frontend,
  },
  analytics: {
    id: 'analytics',
    name: 'Analytics',
    category: TECHNOLOGIES_CATEGORIES.Frontend,
  },
  gtm: {
    id: 'gtm',
    name: 'Tag management/plan de taggage',
    category: TECHNOLOGIES_CATEGORIES.Frontend,
  },
  'design-system': {
    id: 'design-system',
    name: 'Design System',
    category: TECHNOLOGIES_CATEGORIES.Frontend,
  },
  storybook: {
    id: 'storybook',
    name: 'Storybook',
    category: TECHNOLOGIES_CATEGORIES.Frontend,
  },
  chromatic: {
    id: 'chromatic',
    name: 'Chromatic',
    category: TECHNOLOGIES_CATEGORIES.Frontend,
  },
  a11y: {
    id: 'a11y',
    name: 'Accessibilité',
    category: TECHNOLOGIES_CATEGORIES.Frontend,
  },
  seo: { id: 'seo', name: 'SEO', category: TECHNOLOGIES_CATEGORIES.Frontend },

  'spring-boot': {
    id: 'spring-boot',
    name: 'Spring Boot',
    category: TECHNOLOGIES_CATEGORIES.Backend,
  },
  expressjs: {
    id: 'expressjs',
    name: 'ExpressJS',
    category: TECHNOLOGIES_CATEGORIES.Backend,
  },
  quarkus: {
    id: 'quarkus',
    name: 'Quarkus',
    category: TECHNOLOGIES_CATEGORIES.Backend,
  },
  sql: { id: 'sql', name: 'SQL', category: TECHNOLOGIES_CATEGORIES.Backend },
  postgresql: {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: TECHNOLOGIES_CATEGORIES.Backend,
  },
  'aws-dynamodb': {
    id: 'aws-dynamodb',
    name: 'AWS DynamoDB',
    category: TECHNOLOGIES_CATEGORIES.Backend,
  },
  hibernate: {
    id: 'hibernate',
    name: 'Hibernate',
    category: TECHNOLOGIES_CATEGORIES.Backend,
  },
  rest: { id: 'rest', name: 'REST', category: TECHNOLOGIES_CATEGORIES.Backend },
  graphql: {
    id: 'graphql',
    name: 'GraphQL',
    category: TECHNOLOGIES_CATEGORIES.Backend,
  },
  grpc: { id: 'grpc', name: 'gRPC', category: TECHNOLOGIES_CATEGORIES.Backend },
  'micro-services': {
    id: 'micro-services',
    name: 'Micro-services',
    category: TECHNOLOGIES_CATEGORIES.Backend,
  },
  elasticsearch: {
    id: 'elasticsearch',
    name: 'Elasticsearch',
    category: TECHNOLOGIES_CATEGORIES.Backend,
  },
  'aws-opensearch': {
    id: 'aws-opensearch',
    name: 'AWS OpenSearch',
    category: TECHNOLOGIES_CATEGORIES.Backend,
  },
  'cms-headless': {
    id: 'cms-headless',
    name: 'CMS Headless',
    category: TECHNOLOGIES_CATEGORIES.Backend,
  },

  aws: { id: 'aws', name: 'AWS', category: TECHNOLOGIES_CATEGORIES.Infra },
  'aws-ec2': {
    id: 'aws-ec2',
    name: 'AWS EC2',
    category: TECHNOLOGIES_CATEGORIES.Infra,
    logoAssetName: 'aws',
  },
  'aws-ecs': {
    id: 'aws-ecs',
    name: 'AWS ECS',
    category: TECHNOLOGIES_CATEGORIES.Infra,
    logoAssetName: 'aws',
  },
  'aws-alb': {
    id: 'aws-alb',
    name: 'AWS ALB',
    category: TECHNOLOGIES_CATEGORIES.Infra,
    logoAssetName: 'aws',
  },
  'aws-autoscaling': {
    id: 'aws-autoscaling',
    name: 'AWS Autoscaling',
    category: TECHNOLOGIES_CATEGORIES.Infra,
    logoAssetName: 'aws',
  },
  'aws-vpc': {
    id: 'aws-vpc',
    name: 'AWS VPC',
    category: TECHNOLOGIES_CATEGORIES.Infra,
    logoAssetName: 'aws',
  },
  'aws-rds': {
    id: 'aws-rds',
    name: 'AWS RDS',
    category: TECHNOLOGIES_CATEGORIES.Infra,
    logoAssetName: 'aws',
  },
  'aws-s3': {
    id: 'aws-s3',
    name: 'AWS S3',
    category: TECHNOLOGIES_CATEGORIES.Infra,
    logoAssetName: 'aws',
  },
  'aws-cloudfront': {
    id: 'aws-cloudfront',
    name: 'AWS CloudFront',
    category: TECHNOLOGIES_CATEGORIES.Infra,
    logoAssetName: 'aws',
  },
  'aws-lambda': {
    id: 'aws-lambda',
    name: 'AWS Lambda',
    category: TECHNOLOGIES_CATEGORIES.Infra,
    logoAssetName: 'aws',
  },
  'aws-eventbridge': {
    id: 'aws-eventbridge',
    name: 'AWS EventBridge',
    category: TECHNOLOGIES_CATEGORIES.Infra,
    logoAssetName: 'aws',
  },
  'aws-sqs': {
    id: 'aws-sqs',
    name: 'AWS SQS',
    category: TECHNOLOGIES_CATEGORIES.Infra,
    logoAssetName: 'aws',
  },
  'aws-iam': {
    id: 'aws-iam',
    name: 'AWS IAM',
    category: TECHNOLOGIES_CATEGORIES.Infra,
    logoAssetName: 'aws',
  },
  'aws-iam-identity-center': {
    id: 'aws-iam-identity-center',
    name: 'AWS IAM Identity Center',
    category: TECHNOLOGIES_CATEGORIES.Infra,
    logoAssetName: 'aws',
  },
  'aws-organization': {
    id: 'aws-organization',
    name: 'AWS Organization',
    category: TECHNOLOGIES_CATEGORIES.Infra,
    logoAssetName: 'aws',
  },
  'aws-codepipeline': {
    id: 'aws-codepipeline',
    name: 'AWS CodePipeline',
    category: TECHNOLOGIES_CATEGORIES.Infra,
    logoAssetName: 'aws',
  },
  'aws-codebuild': {
    id: 'aws-codebuild',
    name: 'AWS CodeBuild',
    category: TECHNOLOGIES_CATEGORIES.Infra,
    logoAssetName: 'aws',
  },
  'aws-cloudwatch': {
    id: 'aws-cloudwatch',
    name: 'AWS CloudWatch',
    category: TECHNOLOGIES_CATEGORIES.Infra,
    logoAssetName: 'aws',
  },

  yarn: { id: 'yarn', name: 'Yarn', category: TECHNOLOGIES_CATEGORIES.Tools },
  prettier: {
    id: 'prettier',
    name: 'Prettier',
    category: TECHNOLOGIES_CATEGORIES.Tools,
  },

  'gitlab-ci': {
    id: 'aws-gitlab-ci',
    name: 'GitLab CI',
    category: TECHNOLOGIES_CATEGORIES.Infra,
    logoAssetName: 'gitlab',
  },
  'github-actions': {
    id: 'aws-github-actions',
    name: 'GitHub Actions',
    category: TECHNOLOGIES_CATEGORIES.Infra,
    logoAssetName: 'github',
  },
  prometheus: {
    id: 'prometheus',
    name: 'Prometheus',
    category: TECHNOLOGIES_CATEGORIES.Infra,
  },
  grafana: {
    id: 'grafana',
    name: 'Grafana',
    category: TECHNOLOGIES_CATEGORIES.Infra,
  },
  'aws-cdk': {
    id: 'aws-cdk',
    name: 'AWS CDK',
    category: TECHNOLOGIES_CATEGORIES.Infra,
  },
  terraform: {
    id: 'terraform',
    name: 'Terraform',
    category: TECHNOLOGIES_CATEGORIES.Infra,
  },
  docker: {
    id: 'docker',
    name: 'Docker',
    category: TECHNOLOGIES_CATEGORIES.Infra,
  },
  kubernetes: {
    id: 'kubernetes',
    name: 'Kubernetes',
    category: TECHNOLOGIES_CATEGORIES.Infra,
  },
  argocd: {
    id: 'argocd',
    name: 'ArgoCD',
    category: TECHNOLOGIES_CATEGORIES.Infra,
  },

  'micro-services-archi': {
    id: 'micro-services-archi',
    name: 'Architecture micro-services',
    category: TECHNOLOGIES_CATEGORIES.Architecture,
  },
  'microfrontends-archi': {
    id: 'microfrontends-archi',
    name: 'Architecture microfrontends',
    category: TECHNOLOGIES_CATEGORIES.Architecture,
  },
  'aws-cost-analysis': {
    id: 'aws-cost-analysis',
    name: 'Analyse de coût AWS',
    category: TECHNOLOGIES_CATEGORIES.Architecture,
  },
  c4: { id: 'c4', name: 'C4', category: TECHNOLOGIES_CATEGORIES.Architecture },

  formation: {
    id: 'formation',
    name: 'Formation',
    category: TECHNOLOGIES_CATEGORIES.Management,
  },
  recrutement: {
    id: 'recrutement',
    name: 'Recrutement',
    category: TECHNOLOGIES_CATEGORIES.Management,
  },
} satisfies { [technologyId: string]: Technology };

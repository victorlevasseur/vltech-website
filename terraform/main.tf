terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.88"
    }
  }

  required_version = ">= 1.2.0"

  backend "s3" {
    bucket = "vltech-terraform"
    key    = "vltech-website/state"
    region = "eu-central-1"
  }
}

provider "aws" {
  region = "eu-central-1"

  default_tags {
    tags = {
      Service = "Website"
    }
  }
}

provider "aws" {
  alias  = "global"
  region = "us-east-1"

  default_tags {
    tags = {
      Service = "Website"
    }
  }
}

data "aws_caller_identity" "current" {}

module "single_zone" {
  providers = {
    aws.dns             = aws
    aws.iam             = aws
    aws.server_function = aws
    aws.global          = aws.global
  }

  source  = "RJPearson94/open-next/aws//modules/tf-aws-open-next-zone"
  version = "3.3.0"

  prefix      = "vltech-website"
  folder_path = "../.open-next"

  domain_config = {
    sub_domain = "www"
    hosted_zones = [
      {
        name = "victorlevasseur.tech"
      }
    ]
    viewer_certificate = {
      acm_certificate_arn = "arn:aws:acm:us-east-1:615299762949:certificate/4bc6397e-9ff9-4742-a1ac-041b587a0ea4"
    }
  }

  open_next_version = "v3.1.0"
}

module "http-redirect" {
  source = "neovops/http-redirect/aws"

  redirect_mapping = {
    "victorlevasseur.tech" = "https://www.victorlevasseur.tech",
  }

  dns_zone = "victorlevasseur.tech"

  providers = {
    aws           = aws
    aws.route53   = aws
    aws.us-east-1 = aws.global
  }
}

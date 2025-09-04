provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "projeto2_bucket" {
  bucket = "projeto2-deploy-bucket"
  acl    = "public-read"
}
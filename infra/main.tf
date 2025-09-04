provider "aws" {
  region = "us-east-1"
}

# Criação do bucket privado (padrão)
resource "aws_s3_bucket" "projeto2-deploy-bucket" {
  bucket = "projeto2-deploy-bucket" # nome único no mundo
}
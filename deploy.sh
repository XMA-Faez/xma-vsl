#!/bin/bash

# Title: GitHub and Vercel Deployment Script
# Description: Automates creating a GitHub repo and deploying to Vercel
# Author: Claude
# Date: 2025-05-16

# Colors for better output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Print with colors and prefix
info() {
  echo -e "${BLUE}[INFO]${NC} $1"
}

success() {
  echo -e "${GREEN}[SUCCESS]${NC} $1"
}

warning() {
  echo -e "${YELLOW}[WARNING]${NC} $1"
}

error() {
  echo -e "${RED}[ERROR]${NC} $1"
  exit 1
}

# Ask for repository name if not provided
ask_repo_name() {
  local current_dir=$(basename "$PWD")
  read -p "Enter repository name (default: $current_dir): " repo_name
  repo_name=${repo_name:-$current_dir}
  echo $repo_name
}

# Check dependencies
check_dependencies() {
  info "Checking required dependencies..."
  
  if ! command -v git &> /dev/null; then
    error "Git not found. Please install Git."
  fi
  
  if ! command -v gh &> /dev/null; then
    error "GitHub CLI not found. Please install GitHub CLI."
  fi
  
  if ! command -v vercel &> /dev/null; then
    error "Vercel CLI not found. Please install Vercel CLI."
  fi
  
  success "All required dependencies are installed."
}

# Check GitHub authentication status
check_github_auth() {
  info "Checking GitHub authentication..."
  
  if ! gh auth status &> /dev/null; then
    warning "Not authenticated with GitHub. Please login."
    gh auth login || error "GitHub authentication failed."
  else
    success "Already authenticated with GitHub."
  fi
}

# Check Vercel authentication status
check_vercel_auth() {
  info "Checking Vercel authentication..."
  
  if ! vercel whoami &> /dev/null; then
    warning "Not authenticated with Vercel. Please login."
    vercel login || error "Vercel authentication failed."
  else
    success "Already authenticated with Vercel."
  fi
}

# Initialize Git if not already initialized
init_git() {
  info "Checking Git repository..."
  
  if [ -d .git ]; then
    success "Git repository already initialized."
  else
    info "Initializing Git repository..."
    git init
    success "Git repository initialized."
  fi
}

# Create GitHub repository
create_github_repo() {
  local repo_name=$1
  local visibility=$2
  
  info "Creating GitHub repository: $repo_name"
  
  if git remote get-url origin &> /dev/null; then
    warning "Remote 'origin' already exists. Skipping GitHub repository creation."
    return 0
  fi
  
  # Create repository on GitHub
  gh repo create "$repo_name" --$visibility --source=. --remote=origin || error "Failed to create GitHub repository."
  
  success "GitHub repository created and set as remote 'origin'."
}

# Commit and push changes
commit_and_push() {
  local commit_message=$1
  
  info "Committing and pushing to GitHub..."
  
  # Check if there are changes to commit
  if git status --porcelain | grep -q .; then
    git add .
    git commit -m "$commit_message" || error "Failed to commit changes."
    success "Changes committed."
  else
    warning "No changes to commit."
  fi
  
  # Get default branch name
  local default_branch=$(git symbolic-ref --short HEAD 2>/dev/null)
  if [ -z "$default_branch" ]; then
    default_branch="main"
  fi
  
  # Push to GitHub
  info "Pushing to $default_branch branch..."
  git push -u origin "$default_branch" || error "Failed to push to GitHub."
  
  success "Changes pushed to GitHub."
}

# Deploy to Vercel
deploy_to_vercel() {
  local production=$1
  
  info "Deploying to Vercel..."
  
  if [ "$production" = "production" ]; then
    vercel --prod || error "Failed to deploy to Vercel production."
    success "Deployed to Vercel production."
  else
    vercel || error "Failed to deploy to Vercel."
    success "Deployed to Vercel preview environment."
  fi
}

# Main script execution
main() {
  local repo_name=$(ask_repo_name)
  local commit_message="Initial commit"
  local visibility="public"
  local deploy_env="preview"
  
  # Parse arguments
  while [[ $# -gt 0 ]]; do
    case $1 in
      --private)
        visibility="private"
        shift
        ;;
      --message|-m)
        commit_message="$2"
        shift 2
        ;;
      --prod|-p)
        deploy_env="production"
        shift
        ;;
      *)
        warning "Unknown option: $1"
        shift
        ;;
    esac
  done
  
  # Run the steps
  check_dependencies
  check_github_auth
  check_vercel_auth
  init_git
  create_github_repo "$repo_name" "$visibility"
  commit_and_push "$commit_message"
  deploy_to_vercel "$deploy_env"
  
  # Print summary
  echo
  echo -e "${GREEN}==== Deployment Summary ====${NC}"
  echo "Repository: $repo_name"
  echo "Visibility: $visibility"
  echo "Commit message: $commit_message"
  echo "Deployment environment: $deploy_env"
  echo
  echo -e "${GREEN}Deployment completed successfully!${NC}"
}

# Run the script with all arguments passed
main "$@"
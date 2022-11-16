pipeline {
  
  agent {
    docker {
      image 'node'
      // https://stackoverflow.com/questions/67163194/jenkins-build-issue-npm-err-your-cache-folder-contains-root-owned-files
      args '-u root:root'
    }
  }
  stages {
    stage('Information') {
      steps {
        sh 'node -v'
        sh 'npm -v'
      }
    }
    stage('Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Unit Test') {
      steps {
        sh 'run unit test'
        // sh 'npm run unit'
      }
    }
    stage('Eslint') {
      steps {
        sh 'npm run lint:fix'
      }
    }
    stage('Build') {
      steps {
        sh 'export NODE_OPTIONS=--openssl-legacy-provider'
        sh 'npm run build'
      }
    }
  }
}
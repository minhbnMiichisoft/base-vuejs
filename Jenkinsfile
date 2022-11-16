pipeline {
  
  agent {
    docker {
      image 'node'
    }
  }
  stages {
    stage('Clone Sources') {
      steps {
        git 'https://gitlab.com/chiminyau/ci-test.git'
      }
    }
    stage('Information') {
      steps {
        sh 'node -v'
        sh 'npm -v'
      }
    }
    stage('Config') {
      steps {
        sh 'npm set registry https://registry.npm.taobao.org'
        sh 'npm set disturl https://npm.taobao.org/dist'
        sh 'npm set chromedriver_cdnurl http://cdn.npm.taobao.org/dist/chromedriver'
        sh 'npm set operadriver_cdnurl http://cdn.npm.taobao.org/dist/operadriver'
        sh 'npm set phantomjs_cdnurl http://cdn.npm.taobao.org/dist/phantomjs'
        sh 'npm set fse_binary_host_mirror https://npm.taobao.org/mirrors/fsevents'
        sh 'npm set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass'
        sh 'npm set electron_mirror http://cdn.npm.taobao.org/dist/electron/'
      }
    }
    stage('Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Unit Test') {
      steps {
        sh 'npm run unit'
      }
    }
    stage('E2E Test') {
      steps {
        sh 'npm run e2e'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Artifacts') {
      steps {
        sh 'tar -czf dist.tar.gz ./dist'
        stash 'dist.tar.gz'
        stash 'Dockerfile'
        stash 'nginx.conf'
        archiveArtifacts artifacts: 'dist.tar.gz', fingerprint: true
      }
    }
    stage('Docker Image') {
      agent {
        docker {
          image 'docker:dind'
        }
      }
      steps {
        sh 'docker -v'
        unstash 'dist.tar.gz'
        unstash 'Dockerfile'
        unstash 'nginx.conf'
        sh 'docker build -t registry.gitlab.com/chiminyau/ci-test:jenkins .'
      }
    }
    
  }
}
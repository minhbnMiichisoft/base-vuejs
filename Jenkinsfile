pipeline {
  
  agent {
    docker {
      image 'node'
      // https://stackoverflow.com/questions/67163194/jenkins-build-issue-npm-err-your-cache-folder-contains-root-owned-files
      args '-u root:root'
    }
  }
  stages {
    // stage('Clone Sources') {
    //   steps {
    //     git 'https://gitlab.com/chiminyau/ci-test.git'
    //   }
    // }
    stage('Information') {
      steps {
        sh 'node -v'
        sh 'npm -v'
      }
    }
    stage('Dependencies') {
      steps {
        // Your cache folder contains root-owned files, due to a bug in
        // npm ERR! previous versions of npm which has since been addressed.
        // sh 'sudo chown -R 129:137 "/.npm"'
        sh 'npm install'
      }
    }
    // stage('Unit Test') {
    //   steps {
    //     sh 'npm run unit'
    //   }
    // }
    stage('Eslint') {
      steps {
        sh 'npm run lint:fix'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    // stage('Artifacts') {
    //   steps {
    //     sh 'tar -czf dist.tar.gz ./dist'
    //     stash 'dist.tar.gz'
    //     stash 'Dockerfile'
    //     stash 'nginx.conf'
    //     archiveArtifacts artifacts: 'dist.tar.gz', fingerprint: true
    //   }
    // }
    // stage('Docker Image') {
    //   agent {
    //     docker {
    //       image 'docker:dind'
    //     }
    //   }
    //   steps {
    //     sh 'docker -v'
    //     unstash 'dist.tar.gz'
    //     unstash 'Dockerfile'
    //     unstash 'nginx.conf'
    //     sh 'docker build -t registry.gitlab.com/chiminyau/ci-test:jenkins .'
    //   }
    // }
    
  }
}
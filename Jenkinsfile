/* Jenkinsfile (Declarative Pipeline) */
 /* Requires the Docker Pipeline plugin */
pipeline {
    agent { docker { image 'node:16.17.1-alpine' } }
    stages {
        stage('Test'){
            // env.NODE_ENV = "test"
            // print "Environment will be : ${env.NODE_ENV}"
            steps {
                sh 'node -v'
                // sh 'npm prune'
                sh 'npm install'
                sh 'npm lint:fix'
            }
        }
        stage('build') {
            steps {
                sh 'node --version'
            }
        }
        stage('Cleanup') {
            steps {
                echo 'prune and cleanup'
                sh 'npm prune'
                sh 'rm node_modules -rf'
            }
        }
    }
 }

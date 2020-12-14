pipeline {
    agent any
    triggers {
        pollSCM '* * * * *'
    }

    stages {
        stage('Build FrontEnd') {
            steps {
                sh 'mvn build'
            }
        }
        stage('Test'){
            steps {
                echo 'Test'
            }
        }
    }
}
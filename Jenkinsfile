pipeline {
    agent any

    environment {
        DOCKERHUB_USERNAME = 'sakit333'
        DOCKER_IMAGE = 'zepto-brocode'
        VERSION = '$BUILD_ID'
    }
    stages {
        stage("docker version") {
            steps {
                sh "sudo docker --version"
            }
        }
        stage("Build Docker Image") {
            steps {
                sh "sudo docker build -t ${DOCKERHUB_USERNAME}/${DOCKER_IMAGE}:${VERSION} ."
            }
        }
        stage("Docker Images"){
            steps {
                sh "sudo docker images"
            }
        }
    }
}
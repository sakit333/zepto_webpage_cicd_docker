pipeline {
    agent any

    environment {
        DOCKERHUB_USERNAME = 'sakit333'
        DOCKER_IMAGE = 'webapp'
        DOCKERHUB_REPO = 'zepto-brocode'
        VERSION = '$BUILD_ID'
    }
    stages {
        stage("docker version") {
            steps {
                sh "sudo docker --version"
            }
        }
        stage("Build Docker Image"){
            steps {
                sh "sudo docker build -t ${DOCKER_IMAGE} ."
            }
        }
        stage("Docker tag") {
            steps {
                sh """
                sudo docker tag ${DOCKER_IMAGE} ${DOCKERHUB_USERNAME}/${DOCKERHUB_REPO}:${VERSION}
                sudo docker tag ${DOCKER_IMAGE} ${DOCKERHUB_USERNAME}/${DOCKERHUB_REPO}:latest
                """
            }
        }
        stage("Docker Images"){
            steps {
                sh "sudo docker images"
            }
        }
    }
}
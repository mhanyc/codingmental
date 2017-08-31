pipeline{
    node{
        stage('Clone source'){
            steps{
                git url: 'http://github.com/mhanyc/codingmental.git'
            }
        }
        stage('Build blog'){
            steps{
                sh 'make'
                sh 'hugo'
            }
        }
        stage('Deploy blog'){
            steps{
                withAWS(credentials:'')
            }
        }
    }
}
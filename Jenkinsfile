node{
    stage('Clone source'){
        git url: 'http://github.com/mhanyc/codingmental.git'
    }
    stage('Build blog'){
        sh 'make'
        sh 'hugo'
    }
    stage('Deploy blog'){
        withAWS(credentials:'mha-jenkins', region:'us-east-1'){
            s3Upload(file:'public', bucket:'codingmental', path:'blog/')
        }
    }
}

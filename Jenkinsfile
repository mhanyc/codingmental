def notifySlack(String buildStatus = 'STARTED') {
    // Build status of null means success.
    buildStatus = buildStatus ?: 'SUCCESS'

    def color

    if (buildStatus == 'STARTED') {
        color = '#D4DADF'
    } else if (buildStatus == 'SUCCESS') {
        color = '#BDFFC3'
    } else if (buildStatus == 'UNSTABLE') {
        color = '#FFFE89'
    } else {
        color = '#FF9FA1'
    }

    def msg = "${buildStatus}: `${env.JOB_NAME}` #${env.BUILD_NUMBER}:\n${env.BUILD_URL}"

    slackSend(color: color, message: msg)
}

node{
    try {
        notifySlack()
        
        stage('Remove old workspace data'){
            deleteDir()
        }
        stage('Clone source'){
            git(url: 'http://github.com/mhanyc/codingmental.git', branch: 'nhess')
        }
        stage('Build blog'){
            sh 'make'
            sh 'hugo'
        }
        stage('Empty old s3 bucket'){
            withAWS(credentials:'mha-jenkins_AWS', region:'us-east-1'){
                s3Delete(bucket:'codingmental', path:'/')
            }
        }
        stage('Deploy blog'){
            withAWS(credentials:'mha-jenkins_AWS', region:'us-east-1'){
                s3Upload(file:'public', bucket:'codingmental', path:'')
            }
        }
    } catch (Throwable e) {
        currentBuild.result = 'FAILURE'
        throw e
    } finally {
        notifySlack(currentBuild.result)
    }
    
}

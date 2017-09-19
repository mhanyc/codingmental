def notifySlack(String buildStatus = 'STARTED', String currentStage = '') {
    // Build status of null means success.
    buildStatus = buildStatus ?: 'SUCCESS'

    def color
    def msg

    if (buildStatus == 'STARTED') {
        color = '#D4DADF'
    } else if (buildStatus == 'SUCCESS') {
        color = '#BDFFC3'
    } else if (buildStatus == 'UNSTABLE') {
        color = '#FFFE89'
    } else {
        color = '#FF9FA1'
    }

    if (buildStatus == 'FAILURE'){
        msg = "${buildStatus}: `${env.JOB_NAME}` #${env.BUILD_NUMBER}:\n The build failed at stage: ${currentStage} \n Build URL: ${env.BUILD_URL}\n Console Output: ${env.BUILD_URL}console"
    } else {
        msg = "${buildStatus}: `${env.JOB_NAME}` #${env.BUILD_NUMBER}:\n Build URL: ${env.BUILD_URL}\n Console Output: ${env.BUILD_URL}console"
    }

    slackSend(color: color, message: msg)
}

node{
    try {
        // Initialize curentStage, then set currentStage in each stage, so if the build fails,
        // we can post to slack which step caused the build failure
        def currentStage = ''

        notifySlack()
        
        stage('Remove any old workspace data'){
            currentStage = 'Remove any old workspace data'
            deleteDir()
        }
        stage('Clone source'){
            currentStage = 'Clone source'
            git(url: 'http://github.com/mhanyc/codingmental.git', branch: 'nhess')
        }
        stage('Build blog'){
            currentStage = 'Build blog'
            sh 'make'
            sh 'hugo'
        }
        stage('Empty old s3 bucket'){
            currentStage = 'Empty old s3 bucket'
            withAWS(credentials:'mha-jenkins_AWS', region:'us-east-1'){
                s3Delete(bucket:'codingmental', path:'/')
            }
        }
        stage('Deploy blog'){
            currentStage = 'Deploy blog'
            withAWS(credentials:'mha-jenkins_AWS', region:'us-east-1'){
                s3Upload(file:'public', bucket:'codingmental', path:'')
            }
        }
        stage('Cleanup workspace'){
            currentStage = 'Cleanup workspace'
            deleteDir()
        }

        currentStage = ''
    } catch (Throwable e) {
        currentBuild.result = 'FAILURE'
        throw e
    } finally {
        notifySlack(currentBuild.result, currentStage)
    }
    
}

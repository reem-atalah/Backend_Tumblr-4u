pipeline
{
    agent any
    
    environment{
        dockerImage=''
        registery='minalabib07/back_image'
        registerycredentials='docker_hub_cred'
    }
    
    stages{
        stage('clean'){
            steps{
                script{
                    sh'docker rmi minalabib07/back_image'
                    }
                }
            }
        

        stage('build Docker image'){
            steps{
                script{
                    dockerImage= docker.build registery
                }
            }
        }
        
        stage('uploading image'){
            steps{
                script{
                    docker.withRegistry( '', registerycredentials ) {
                    dockerImage.push()
                    }
                }
            }
        }
    }
    
post {
    success {
        mail to: 'ahmed.ayman.1420@gmail.com',
             subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
             body: "Something is wrong with ${env.BUILD_URL}"
            }
    
    failure {
        mail to: 'mina.labib00@eng-st.cu.edu.eg ,mohamed.ahmedmoreb@gmail.com ,ahmed.ayman.1420@gmail.com',
             subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
             body: "Something is wrong with ${env.BUILD_URL}"
            }
    }
}


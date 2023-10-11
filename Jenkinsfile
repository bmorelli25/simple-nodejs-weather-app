pipeline {
         agent any
         stages {
                 stage('One') {
                 steps {
                     echo 'Hi, this is Zulaikha from edureka'
                 }
                 }
                 stage('Two') {
                 steps {
                    input('Do you want to proceed?')
                 }
                 }
                 stage('Three') {
                 when {
                       not {
                            branch "master"
                       }
                 }
                 steps {
                       echo "Hello"
                 }
                 }
                 stage('Four') {
                 parallel { 
                            stage('Unit Test') {
                           steps {
                                echo "Running the unit test..."
                           }
                           }
                           }
                           }
              }
}









// pipeline {
//     agent any
    
//     stages {
//         stage('Checkout') {
//             steps {
//                 // Checkout code from Git repository
//                 script {
//                     git 'https://github.com/DeepthiVarmaSagi/simple-nodejs-weather-app.git'
//                 }
//             }
//         }
        
//         stage('Build and Test') {
//             steps {
//                 // Build and test the Node.js application
//                 script {
//                     sh 'npm install'
//                     sh 'npm test'
//                 }
//             }
//         }
        
//         stage('Deploy') {
//             steps {
//                 // Deploy the application (example: copying files to a server)
//                 script {
//                     sh 'rsync -avz --delete ./ your-server:/path/to/deployment/directory'
//                 }
//             }
//         }
//     }
    
//     post {
//         success {
//             echo 'Deployment successful!'
//         }
//         failure {
//             echo 'Deployment failed.'
//         }
//     }
// }

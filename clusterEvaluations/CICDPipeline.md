For React : -

Node.js APP —-> Build Docker Image —> Push to Nexus Repo —> Deploy in DigitalOcean Server


For JAVA :- 

PipeLine = Java App with Maven —> Integration Test Windows —> Build Docker Image —-> Push to AWS repo  —> Deploy to AWS EKS

We can also use
  (JAVA app with Gradle  —> Build Docker Image —> Push to Private Repo)


1. Github Action has Both Node.js And Docker Available with specific version we wanna work with . We just simply connect to Target and Deploy



// WHole Syntax of it is like 

file type .yaml
Name -- Java CI/CD with gradle

On : is event Explainer
    Push : 
        branch: [master]
    Pull_request : 
        branch : [master]

jobs : (name of the orbitrary)

    build : 
         
         runs-on : (type of system)

    steps: 
        uses : action/checkout@v2
        name : action/setup-java@v1       // This is a huge afvantage that we dont need to extra configure our version or plugins. We just neeed to mention our version to be installed

            With : 
                java-version : 1.8
    -name : 

    
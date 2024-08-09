FROM openjdk:22
EXPOSE 8080
ADD target/dockerit_support.jar support.jar
ENTRYPOINT ["java", "-jar", "/support.jar"]

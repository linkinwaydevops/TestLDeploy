# Utilisez une image de base Java
FROM openjdk:11

  # Définissez le répertoire de travail dans le conteneur
WORKDIR /app

  # Copiez le fichier JAR de votre application dans le conteneur
COPY target/spring-boot-starter-parent-2.7.11.jar spring-boot-starter-parent-2.7.11.jar

  # Exposez le port sur lequel votre application Spring Boot écoute
EXPOSE 8089
  # Commande pour exécuter votre application Spring Boot
CMD ["java", "-jar", "spring-boot-starter-parent-2.7.11.jar"]

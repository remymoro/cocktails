// Importation des modules nécessaires de NestJS
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { JwtGuard } from './auth/guards/jwt.guard';

// Fonction principale pour démarrer l'application
async function bootstrap() {
  // Création d'une instance de l'application Nest en utilisant le module principal (AppModule)
  const app = await NestFactory.create(AppModule);

  // Configuration du CORS pour permettre les requêtes inter-domaines depuis le frontend spécifique
  app.enableCors({
    origin: 'http://localhost:4200', // URL autorisée pour les requêtes croisées
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Méthodes HTTP autorisées
    preflightContinue: false, // Indique si les requêtes de pré-vérification doivent passer à la prochaine règle sinon arrêtées
    optionsSuccessStatus: 204, // Statut à renvoyer pour les requêtes de pré-vérification réussies
    credentials: true, // Autorise les requêtes avec des informations d'identification comme les cookies
  });

  // Application globale d'un garde de sécurité JWT pour protéger les routes
  app.useGlobalGuards(new JwtGuard(app.get(Reflector)));

  // Détermination du port à utiliser pour le serveur, avec une valeur par défaut si non spécifié
  const PORT = process.env.PORT || 3000;

  // Démarrage de l'écoute du serveur sur le port spécifié
  await app.listen(PORT, () => {
    console.log(`Running on port ${process.env.NODE_ENV} ${PORT}`);
  });
}

// Appel de la fonction de démarrage pour lancer l'application
bootstrap();

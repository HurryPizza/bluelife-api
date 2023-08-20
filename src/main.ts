import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as firebase from 'firebase-admin';
import * as serviceAccount from '../firebaseSDK.json';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const firebase_params = {
    type: serviceAccount.type,
    projectId: serviceAccount.project_id,
    privateKeyId: serviceAccount.private_key_id,
    privateKey: serviceAccount.private_key_id,
    clientEmail: serviceAccount.client_email,
    clientId: serviceAccount.client_id,
    authUri: serviceAccount.auth_uri,
    tokenUri: serviceAccount.token_uri,
    authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
    clientX509CertUrl: serviceAccount.client_x509_cert_url,
    universeDomain: serviceAccount.universe_domain,
  };

  firebase.initializeApp({
    credential: firebase.credential.cert(firebase_params),
  });

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();

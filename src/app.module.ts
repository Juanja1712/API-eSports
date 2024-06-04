import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './Global/config/config';
import { PlayerModule } from './player/module/player.module';
import { ResultModule } from './Result/module/result.module';
import { TournamentModule } from './Tournament/module/tournament.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,  
      extra: {
        ssl: true, 
      },
    
    }),
    PlayerModule,
    ResultModule,
    TournamentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}


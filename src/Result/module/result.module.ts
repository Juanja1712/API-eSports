import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Result } from '../entities/resul.entity';
import { Player } from 'src/player/entities/payer.entity';
import { PlayerModule } from 'src/player/module/player.module';
import { ResultController } from '../controller/result.controller';
import { ResultService } from '../service/result.service';
import { Tournament } from 'src/Tournament/entities/tournament.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Result, Player, Tournament]),
        PlayerModule,
    ],
    exports: [TypeOrmModule],
    controllers: [ResultController],
    providers: [ResultService],
})
export class ResultModule {}

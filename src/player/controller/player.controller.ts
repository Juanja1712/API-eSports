import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { PlayersService } from '../service/player.service';
import { CreatePlayerDto, UpdatePlayerDto } from '../dtos/exportDto';

@ApiTags('players')
@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new player' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({ type: CreatePlayerDto })
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playersService.create(createPlayerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all players' })
  @ApiResponse({ status: 200, description: 'List of players.' })
  findAll() {
    return this.playersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a player by ID' })
  @ApiResponse({ status: 200, description: 'Player found.' })
  @ApiResponse({ status: 404, description: 'Player not found.' })
  @ApiParam({ name: 'id', type: String })
  findOne(@Param('id') id: string) {
    return this.playersService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a player' })
  @ApiResponse({ status: 200, description: 'Player updated.' })
  @ApiResponse({ status: 404, description: 'Player not found.' })
  @ApiBody({ type: UpdatePlayerDto })
  @ApiParam({ name: 'id', type: String })
  update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    return this.playersService.update(+id, updatePlayerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a player' })
  @ApiResponse({ status: 200, description: 'Player deleted.' })
  @ApiResponse({ status: 404, description: 'Player not found.' })
  @ApiParam({ name: 'id', type: String })
  remove(@Param('id') id: string) {
    return this.playersService.remove(+id);
  }
}

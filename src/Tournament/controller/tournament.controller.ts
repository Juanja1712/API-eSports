import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam, ApiQuery, ApiBearerAuth } from '@nestjs/swagger';
import { TournamentsService } from '../service/tournament.service';
import { CreateTournamentDto, UpdateTournamentDto } from '../dtos/exportDto';
import { ApiKeyGuard } from '../../Global/GUard/x-Api-Key.guard';

@ApiTags('tournaments')
@Controller('tournaments')
export class TournamentsController {
  constructor(private readonly tournamentsService: TournamentsService) {}

  @Post()
  @UseGuards(ApiKeyGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new tournament' })
  @ApiResponse({ status: 201, description: 'Tournament created.' })
  @ApiBody({ type: CreateTournamentDto })
  create(@Body() createTournamentDto: CreateTournamentDto) {
    return this.tournamentsService.create(createTournamentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tournaments' })
  @ApiResponse({ status: 200, description: 'List of tournaments.' })
  findAll() {
    return this.tournamentsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a tournament by ID' })
  @ApiResponse({ status: 200, description: 'Tournament found.' })
  @ApiResponse({ status: 404, description: 'Tournament not found.' })
  @ApiParam({ name: 'id', type: String })
  findOne(@Param('id') id: string) {
    return this.tournamentsService.findOne(+id);
  }

  @Put(':id')
  @UseGuards(ApiKeyGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a tournament' })
  @ApiResponse({ status: 200, description: 'Tournament updated.' })
  @ApiResponse({ status: 404, description: 'Tournament not found.' })
  @ApiBody({ type: UpdateTournamentDto })
  @ApiParam({ name: 'id', type: String })
  update(@Param('id') id: string, @Body() updateTournamentDto: UpdateTournamentDto) {
    return this.tournamentsService.update(+id, updateTournamentDto);
  }

  @Delete(':id')
  @UseGuards(ApiKeyGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a tournament' })
  @ApiResponse({ status: 200, description: 'Tournament deleted.' })
  @ApiResponse({ status: 404, description: 'Tournament not found.' })
  @ApiParam({ name: 'id', type: String })
  remove(@Param('id') id: string) {
    return this.tournamentsService.remove(+id);
  }

  @Post(':id/participants')
  @UseGuards(ApiKeyGuard)
  @ApiOperation({ summary: 'Add participants to a tournament' })
  @ApiResponse({ status: 200, description: 'Participants added.' })
  @ApiResponse({ status: 404, description: 'Tournament not found.' })
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: [Number], isArray: true })
  addParticipants(@Param('id') id: string, @Body('playerIds') playerIds: number[]) {
    return this.tournamentsService.addParticipants(+id, playerIds);
  }

  @Post(':id/generate-matchups')
  @UseGuards(ApiKeyGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Generate matchups for a tournament' })
  @ApiResponse({ status: 200, description: 'Matchups generated.' })
  @ApiResponse({ status: 404, description: 'Tournament not found.' })
  @ApiParam({ name: 'id', type: String })
  generateMatchups(@Param('id') id: string) {
    return this.tournamentsService.generateMatchups(+id);
  }

  @Get(':id/results')
  @ApiOperation({ summary: 'Get tournament results' })
  @ApiResponse({ status: 200, description: 'Results obtained.' })
  @ApiResponse({ status: 404, description: 'Tournament not found.' })
  @ApiParam({ name: 'id', type: String })
  @ApiQuery({ name: 'minScore', type: Number, required: false })
  @ApiQuery({ name: 'page', type: Number, required: false })
  @ApiQuery({ name: 'limit', type: Number, required: false })
  @ApiQuery({ name: 'order', type: String, enum: ['ASC', 'DESC'], required: false })
  getMatchResults(
    @Param('id') id: string,
    @Query('minScore') minScore: number,
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('order') order: 'ASC' | 'DESC',
  ) {
    return this.tournamentsService.getMatchResults(+id, minScore, page, limit, order);
  }
}


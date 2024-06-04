import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam, ApiQuery } from '@nestjs/swagger';
import { ResultService } from '../service/result.service';
import { CreateResultDto, UpdateMatchResultDto } from '../dtos/exportDto';

@ApiTags('results')
@Controller('results')
export class ResultController {
  constructor(private readonly matchResultsService: ResultService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new match result' })
  @ApiResponse({ status: 201, description: 'Match result created.' })
  @ApiBody({ type: CreateResultDto })
  create(@Body() createMatchResultDto: CreateResultDto) {
    return this.matchResultsService.create(createMatchResultDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all match results' })
  @ApiResponse({ status: 200, description: 'List of match results.' })
  @ApiQuery({ name: 'tournamentId', type: Number, required: false })
  @ApiQuery({ name: 'minScore', type: Number, required: false })
  @ApiQuery({ name: 'page', type: Number, required: false })
  @ApiQuery({ name: 'limit', type: Number, required: false })
  @ApiQuery({ name: 'order', type: String, enum: ['ASC', 'DESC'], required: false })
  findAll(
    @Query('tournamentId') tournamentId: number,
    @Query('minScore') minScore: number,
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('order') order: 'ASC' | 'DESC',
  ) {
    return this.matchResultsService.findAll(tournamentId, minScore, page, limit, order);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a match result by ID' })
  @ApiResponse({ status: 200, description: 'Match result found.' })
  @ApiResponse({ status: 404, description: 'Match result not found.' })
  @ApiParam({ name: 'id', type: String })
  findOne(@Param('id') id: string) {
    return this.matchResultsService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a match result' })
  @ApiResponse({ status: 200, description: 'Match result updated.' })
  @ApiResponse({ status: 404, description: 'Match result not found.' })
  @ApiBody({ type: UpdateMatchResultDto })
  @ApiParam({ name: 'id', type: String })
  update(@Param('id') id: string, @Body() updateMatchResultDto: UpdateMatchResultDto) {
    return this.matchResultsService.update(+id, updateMatchResultDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a match result' })
  @ApiResponse({ status: 200, description: 'Match result deleted.' })
  @ApiResponse({ status: 404, description: 'Match result not found.' })
  @ApiParam({ name: 'id', type: String })
  remove(@Param('id') id: string) {
    return this.matchResultsService.remove(+id);
  }
}

import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Movie } from './movie.entity';
import { MovieService } from './movie.service';
import { Span } from 'nestjs-otel';

@Controller('movies')
@ApiTags('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('')
  @Span()
  list(): Promise<Movie[]> {
    return this.movieService.findAll();
  }
}

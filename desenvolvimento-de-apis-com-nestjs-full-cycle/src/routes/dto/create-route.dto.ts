interface PositionDTO {
  lat: number;
  lng: number;
}

export class CreateRouteDto {
  title: string;
  startPosition: PositionDTO;
  endPosition: PositionDTO;
}

import { ICON } from 'presentation/assets';

import {
  Container,
  Width,
  Box,
  Reserve,
  Location,
  Time,
} from './InformationStyles';

export const Information = () => {
  return (
    <Container>
      <Width>
        <Box>
          <Reserve>
            <span>
              <ICON.IoCarSportSharp />
            </span>
            <div>
              <h2>Alugar</h2>
              <p>Diferentes preços</p>
            </div>
          </Reserve>
          <Location>
            <span>
              <ICON.GiWorld />
            </span>
            <div>
              <h2>Brazil</h2>
              <p>São Paulo, SP</p>
            </div>
          </Location>
          <Time>
            <span>
              <ICON.BiTimeFive />
            </span>
            <div>
              <h2>Horarios</h2>
              <p>10h - 19h</p>
            </div>
          </Time>
        </Box>
      </Width>
    </Container>
  );
};

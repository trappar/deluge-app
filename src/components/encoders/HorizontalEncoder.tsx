import { CenteredText } from './components/CenteredText'
import { Encoder } from './components/Encoder'
import { EncoderCircleBlack } from './components/EncoderCircle'

export const HorizontalEncoder = () => (
  <Encoder>
    <EncoderCircleBlack />
    <CenteredText fill="var(--black-encoder-text)" y={54}>
      ◀▶
    </CenteredText>
  </Encoder>
)

export default HorizontalEncoder

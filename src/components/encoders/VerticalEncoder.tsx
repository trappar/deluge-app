import { CenteredText } from './components/CenteredText'
import { Encoder } from './components/Encoder'
import { EncoderCircleBlack } from './components/EncoderCircle'

export const VerticalEncoder = () => (
  <Encoder>
    <EncoderCircleBlack />
    <CenteredText fill="var(--black-encoder-text)" y={52}>
      ▲▼
    </CenteredText>
  </Encoder>
)

export default VerticalEncoder

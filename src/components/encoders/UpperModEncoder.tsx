import { CenteredText } from './components/CenteredText'
import { Encoder } from './components/Encoder'
import { EncoderCircleGold } from './components/EncoderCircle'

export const UpperModEncoder = () => (
  <Encoder>
    <EncoderCircleGold />
    <CenteredText fill="var(--gold-encoder-text)" y={52}>
      ▲
    </CenteredText>
  </Encoder>
)

export default UpperModEncoder

import { CenteredText } from './components/CenteredText'
import { Encoder } from './components/Encoder'
import { EncoderCircleGold } from './components/EncoderCircle'

export const LowerModEncoder = () => (
  <Encoder>
    <EncoderCircleGold />
    <CenteredText fill="var(--gold-encoder-text)" y={56}>
      ▼
    </CenteredText>
  </Encoder>
)

export default LowerModEncoder

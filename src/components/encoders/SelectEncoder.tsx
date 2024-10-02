import { CenteredText } from './components/CenteredText'
import { Encoder } from './components/Encoder'
import { EncoderCircleBlack } from './components/EncoderCircle'

export const SelectEncoder = () => (
  <Encoder>
    <EncoderCircleBlack />
    <CenteredText fill="var(--black-encoder-text)" fontWeight="bold">
      SEL
    </CenteredText>
  </Encoder>
)

export default SelectEncoder

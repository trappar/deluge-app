export const EncoderCircle = (props: React.SVGProps<SVGCircleElement>) => (
  <circle cx="50" cy="50" r="45" strokeWidth={5} {...props} />
)

export const EncoderCircleBlack = (props: React.SVGProps<SVGCircleElement>) => (
  <EncoderCircle stroke="var(--black-encoder-line)" fill="var(--black-encoder-fill)" {...props} />
)

export const EncoderCircleGold = (props: React.SVGProps<SVGCircleElement>) => (
  <EncoderCircle stroke="var(--gold-encoder-line)" fill="var(--gold-encoder-fill)" {...props} />
)

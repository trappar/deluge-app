export const CenteredText = (props: { children: React.ReactNode } & React.SVGProps<SVGTextElement>) => (
  <text x={50} y={52} dominantBaseline="middle" textAnchor="middle" fontSize={32} {...props} />
)

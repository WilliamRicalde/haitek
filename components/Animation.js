import Lottie from 'react-lottie'

export default function Animation ({ lotti, height, width }) {
  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <>
      <Lottie options={defaultOption} height={height} width={width} />
    </>
  )
}

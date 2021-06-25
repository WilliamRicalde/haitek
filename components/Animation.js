import Lottie from 'react-lottie'

export default function Animation ({ lotti }) {
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
      <Lottie options={defaultOption} height='90%' width='90%' />
    </>
  )
}

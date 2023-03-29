export const Progress = ({valueProgress}) => {
  return (
    <progress className="progress progress-primary w-56" value={valueProgress} max="100"></progress>
  )
}

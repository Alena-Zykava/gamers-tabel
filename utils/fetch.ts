export const getScore = async () => {
  const score = await fetch('https://gamers-tabel.vercel.app/api/score')
  debugger
  if (!score.ok) {
    throw new Error()
  }

  return score.json()
}

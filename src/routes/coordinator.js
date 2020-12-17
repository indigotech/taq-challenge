export const goToDetails = (history, id) => {
  history.push(`/characterDetails/${id}`)
}
export const goToHome = (history) => {
  history.push('/home')
}

export const goBack = (history) => {
  history.goBack()
}
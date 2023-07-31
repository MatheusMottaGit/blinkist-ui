export interface User {
  token: string
  name: string
}

export default function SignIn() {
  return new Promise<User>(resolve => {
    setTimeout(() => {
      resolve({
        token: 'nfwnuiofenjriefnkmrot5849r0eojfnhtu4ri2ekwfmdnghturio2elwdfmgjt',
        name: 'Matheus'
      })
    }, 3000)
  })
}
'use client'
import SignIn, { User } from "@/services/api";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
import { ReactNode, createContext, useState } from "react";

interface Auth {
  user: User
  isLoading: boolean
  signIn: () => Promise<void>
  signOut: () => void
}

export const AuthContext = createContext({} as Auth)

export const AuthProvider = ({ children }: { children: ReactNode }) => {

  const { push } = useRouter()

  const [user, setUser] = useState({} as User)
  const [isLoading, setIsLoading] = useState(false)

  async function signIn() {
    setIsLoading(true)

    const response = await SignIn()
    setUser(response)

    Cookie.set('token', response.token)

    push('/private/home')
    setIsLoading(false)
  }

  function signOut() {
    Cookie.remove('token')
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}
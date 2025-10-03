import { createContext, useContext, useState } from 'react'

type Lang = 'en' | 'my'

type LangProviderProps = {
  children: React.ReactNode
  defaultLang?: Lang
  storageKey?: string
}

type LangProviderState = {
  lang: Lang
  setLang: (lang: Lang) => void
}

const initialState: LangProviderState = {
  lang: 'en',
  setLang: () => null,
}

const LangProviderContext = createContext<LangProviderState>(initialState)

export function LangProvider({
  children,
  defaultLang = 'en',
  storageKey = 'amt-lang',
  ...props
}: LangProviderProps) {
  const [lang, setLang] = useState<Lang>(
    () => (localStorage.getItem(storageKey) as Lang) || defaultLang,
  )

  const value = {
    lang,
    setLang: (lang: Lang) => {
      localStorage.setItem(storageKey, lang)
      setLang(lang)
    },
  }

  return (
    <LangProviderContext.Provider {...props} value={value}>
      {children}
    </LangProviderContext.Provider>
  )
}

export const useLang = () => {
  const context = useContext(LangProviderContext)

  if (context === undefined)
    throw new Error('useLang must be used within a LangProvider')

  return context
}

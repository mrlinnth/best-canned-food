import { useLang } from '@/components/lang-provider'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import React from 'react'

export function LangToggle() {
  const { lang, setLang } = useLang()
  const [langChecked, setLangChecked] = React.useState(lang === 'my')

  function handleSwitch(v: boolean) {
    setLangChecked(v)
    setLang(v ? 'my' : 'en')
  }
  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="lang-mode"
        checked={langChecked}
        onCheckedChange={handleSwitch}
      />
      <Label htmlFor="lang-mode" className="w-10">
        {langChecked ? 'English' : 'မြန်မာ'}
      </Label>
    </div>
  )
}

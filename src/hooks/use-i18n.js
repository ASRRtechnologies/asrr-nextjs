import {useContext} from 'react'
import {I18nContext} from '../context/lib/i18n'

export default function useI18n() {
  return useContext(I18nContext)
}

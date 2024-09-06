'use client'
import React, { useState } from 'react'

import Checkbox from '../checkbox/Checkbox'
import Tooltip from '../tooltip/Tooltip'

import styles from './AutoSignInCheckbox.module.scss'

interface IAutoSignInCheckboxProps {
  label?: string
  disabled?: boolean
  orientation?: 'top' | 'bottom' | 'left' | 'right'
  message?: string
}

const AutoSignInCheckbox = ({
  label = '자동 로그인',
  disabled,
  orientation = 'top',
  message = '개인 정보 보호를 위해 본인 기기에서만 이용해주세요.',
  ...restProps
}: IAutoSignInCheckboxProps) => {
  const [isAutoLogin, setIsAutoLogin] = useState(false)

  return (
    <div className={styles.wrapper}>
      <Checkbox
        label={label}
        checked={isAutoLogin}
        disabled={disabled}
        onChange={(e) => setIsAutoLogin(e.target.checked)}
        {...restProps}
      />
      {isAutoLogin && <Tooltip left={-5} top={24} orientation={orientation} message={message} />}
    </div>
  )
}

export default AutoSignInCheckbox

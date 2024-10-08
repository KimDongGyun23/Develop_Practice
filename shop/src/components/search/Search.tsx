import type { ChangeEvent } from 'react'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

import styles from './Search.module.scss'

interface ISearchProps {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Search = ({ value, onChange }: ISearchProps) => {
  return (
    <div className={styles.search}>
      <BiSearch size={18} className={styles.icon} />
      <input
        type="text"
        placeholder="찾고 싶은 상품을 검색해보세요."
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Search

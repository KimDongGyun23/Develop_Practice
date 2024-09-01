'use client'

import React, { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { BottomSheet, Label, SubHeader, Tag } from '@/components'

type TagBottomSheetProps = {
  section: string
  isShowing: boolean
  onClickScrim: () => void
}

type ToggledTagListProps = {
  selectedTags: string[]
  onClick: (tag: string) => void
}

const CLINIC_TAGS = [
  '건강검진',
  '멍',
  '속쓰림',
  '기침',
  '콧물',
  '알레르기',
  '피부염',
  '열',
  '어지러움',
]

const ToggledTagList = ({ selectedTags, onClick }: ToggledTagListProps) => {
  return (
    <>
      {CLINIC_TAGS.map((tag) => {
        const isSelected = selectedTags.includes(tag)
        const TagComponent = isSelected ? Tag.Minus : Tag.Plus

        return (
          <TagComponent key={tag} handleClick={() => onClick(tag)}>
            {tag}
          </TagComponent>
        )
      })}
    </>
  )
}

const TagBottomSheet = ({ section, isShowing, onClickScrim }: TagBottomSheetProps) => {
  const { getValues, setValue } = useFormContext()
  const [selectedTags, setSelectedTags] = useState<string[]>(getValues(section) || [])

  const handleClickTag = (tag: string) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter((selectedTag) => selectedTag !== tag)
        : [...prevSelectedTags, tag],
    )
  }

  const handleClickComplete = () => {
    setValue(section, selectedTags)
    onClickScrim()
  }

  useEffect(() => {
    setSelectedTags(getValues(section))
  }, [getValues, isShowing, section])

  return (
    <BottomSheet isShowing={isShowing} onClickScrim={onClickScrim}>
      <SubHeader.Complete onClickCancle={onClickScrim} onClickComplete={handleClickComplete}>
        진료 과목
      </SubHeader.Complete>

      <div className="mt-10">
        <Label icon="check-label">진료 과목을 선택해주세요.</Label>

        <div className="mt-3 flex flex-wrap gap-2">
          <ToggledTagList selectedTags={selectedTags} onClick={handleClickTag} />
        </div>
      </div>
    </BottomSheet>
  )
}

export default TagBottomSheet

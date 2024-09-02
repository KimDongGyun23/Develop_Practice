'use client'

import { FormProvider } from 'react-hook-form'

import { Button, MainHeader, Modal } from '@/components'
import { useToggle } from '@/hooks'
import { useBoolean } from '@/hooks/useBoolean'
import { useClinicForm } from '@/schema/useClinicForm'

import ClinicForm from './ClinicForm'

const data = {
  medicalId: 2,
  hospitalName: '서울대학교병원',
  hospitalDate: '2024-09-28 13:00:00',
  medicalPart: ['멍', '속쓰림'],
  medicalMemo: '메모',
  medicalAlarm: '없음',
}

const ClinicInfoClientPage = () => {
  const formMethod = useClinicForm(data)
  const [isEdit, toggleIsEdit] = useToggle(false)
  const [modalState, openModal, closeModal] = useBoolean(false)

  const handleClickConfirm = () => {
    // 서버로 폼 전송
    toggleIsEdit()
  }

  return (
    <>
      {isEdit ? (
        <MainHeader.Confirm
          title={`의사에게 전달할
특이사항을 기입해주세요.`}
          onCancel={toggleIsEdit}
          onConfirm={handleClickConfirm}
        />
      ) : (
        <MainHeader.Modify
          title={`의사에게 전달할
특이사항을 기입해주세요.`}
          onDelete={openModal}
          onModify={toggleIsEdit}
        />
      )}
      <FormProvider {...formMethod}>
        <form className="flex-column gap-8 px-5 py-8">
          <ClinicForm isReadOnly={!isEdit} />
        </form>
      </FormProvider>

      <Modal isOpen={modalState} onClose={closeModal}>
        <h4 className="subtitle-B">삭제하시겠습니까?</h4>
        <p className="headline-M mt-2">삭제하실 경우 복원이 불가능합니다.</p>
        <div className="mt-6 flex w-full gap-[15px] px-4">
          <Button handleClick={closeModal}>취소</Button>
          <Button primary handleClick={() => {}}>
            삭제
          </Button>
        </div>
      </Modal>
    </>
  )
}

export default ClinicInfoClientPage

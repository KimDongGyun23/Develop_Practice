import React from 'react'

interface IMainHeader {
  firstLine: string
  secondLine: string
  children: React.ReactNode
}

const MainHeader = ({ firstLine, secondLine, children }: IMainHeader) => {
  return (
    <div className="bg-mint-3 px-5 pb-6">
      {children}
      <div className="title-B">
        <p>{firstLine}</p>
        <p>{secondLine}</p>
      </div>
    </div>
  )
}

export default MainHeader

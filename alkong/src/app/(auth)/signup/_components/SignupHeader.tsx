'use client'

interface IHeader {
  currentTab: number
}

const SignupHeader = ({ currentTab }: IHeader) => {
  return (
    <div className="mb-10">
      <p className="subtitle-M mb-3 text-center">회원가입</p>
      <div className="flex-align gap-[6px]">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className={`h-[6px] grow 
              ${currentTab === index ? 'bg-mint-4' : 'bg-green-1'}
            `}
          />
        ))}
      </div>
    </div>
  )
}

export default SignupHeader

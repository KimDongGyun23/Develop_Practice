import Label, { LabelMinus, LabelPlus } from '@/components/Label'

export default function Home() {
  return (
    <>
      <div className="flexBetween">
        <p className="text-logo">color</p>
        <p className="title-B">color</p>
      </div>
      <p>color</p>
      <div>
        <Label>Labels</Label>
        <span>color</span>
      </div>
      <div>
        <LabelPlus>Labels</LabelPlus>
        <span>color</span>
      </div>
      <div>
        <LabelMinus>Labels</LabelMinus>
        <span>color</span>
      </div>
      <div>
        <Label>Labels</Label>
        <LabelPlus>Labels</LabelPlus>
        <LabelPlus primary>Labels</LabelPlus>
        <LabelMinus>Labels</LabelMinus>
      </div>
    </>
  )
}

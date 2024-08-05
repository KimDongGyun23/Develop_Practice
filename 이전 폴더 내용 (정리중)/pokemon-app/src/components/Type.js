import styled from 'styled-components'

const TypeBox = styled.div`
  height : 1.5rem;
  padding : 0.7rem 3rem;
  border-radius : 3rem;
  font-weight : 700;
  color : #2a3544;
  background-color : var(--${props => props._color});
  display : flex;
  gap : 1rem;
  justify-content : center;
  align-items : center;
`;

function Type({type, damageValue}) {
  return (
    <TypeBox _color={type}>
      <span>{type}</span>
      {damageValue && (
        <span>
          {damageValue}
        </span>
      )}
    </TypeBox>
  )
}

export default Type
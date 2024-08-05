import { useEffect, useState } from "react"
import Type from './Type'
import styled from "styled-components";

const Label = styled.h3`
  font-weight : 700;
  color : gray;
  text-align : center;
  margin : 1rem;
`;

const TypeList = styled.div`
  display : flex;
  flex-wrap : wrap;
  gap : 1rem;
  justify-content : center;
`;


const DamageRelations = ({damages}) => {
  const [damagesPokemonForm, setDamagePokemonForm] = useState();

  useEffect(()=>{
    const arrayDamage = damages.map((damage)=> separateObjectBetweenToAndFrom(damage));

    if (arrayDamage.length === 2){
      const obj = joinDamageRelations(arrayDamage);
      setDamagePokemonForm(reduceDuplicateValues(postDamageValue(obj.from)));
    } else{
      setDamagePokemonForm(postDamageValue(arrayDamage[0].from));
    }
  }, [damages])

  const joinDamageRelations = (props) => {
    return {
      to : joinObjects(props, 'to'),
      from : joinObjects(props, 'from')
    }
  }

  function joinObjects( props, string ){
    const key = string;
    const firstArrayValue = props[0][key];
    const secondArrayValue = props[1][key];

    return Object.entries(secondArrayValue).reduce(
      (acc, [keyName, value]) => {
        const key = keyName;
        const result = firstArrayValue[key]?.concat(value)

        return (acc = { [key]: result, ...acc})
      }, {}) 
  }

  function reduceDuplicateValues(props){
    const DuplicateValues = {
      double_damage : '4x',
      half_damage : '1/4x',
      no_damage : '0x'
    }

    return Object.entries(props).reduce(
      (acc, [keyName, value]) => {
        const key = keyName;
        const verifiedValue = filterForUniqueValues(
          value,
          DuplicateValues[key],
        )

        return (acc = {[keyName] : verifiedValue, ...acc})
      }, {})
  }

  function filterForUniqueValues(valueForFiltering, damageValue){
    return valueForFiltering.reduce((acc, currentValue) => {
      const {url, name} = currentValue;
      const filterACC = acc.filter((v)=> v.name !== name);

      return filterACC.length === acc.length
        ? (acc= [currentValue, ...acc])
        : (acc= [{damageValue: damageValue, name, url}, ...filterACC])
    }, [])
  }

  function postDamageValue(props){
    return Object.entries(props).reduce((acc, [keyName, value]) => {
      const key = keyName;

      const ValuesOfKeyName = {
        double_damage : '2x',
        half_damage : '1/2x',
        no_damage : '0x',
      }

      return (acc = {
        [keyName] : value.map((i)=>({
          damageValue : ValuesOfKeyName[key],
          ...i,
        })),
        ...acc,
      })
    }, {})
  }

  function separateObjectBetweenToAndFrom(relations) {
    const from = filterDamageRelations('_from', relations);

    const to = filterDamageRelations('_to', relations);

    return { from, to }
  }

  function filterDamageRelations(valueFilter, relations){
    const result = Object.entries(relations)
      .filter(([keyName, value]) => {
        return keyName.includes(valueFilter)
      })
      .reduce((acc, [keyName, value])=>{
        const KeyWithValueFilterRemove = keyName.replace(
          valueFilter, ''
        )
        return ( acc = { [KeyWithValueFilterRemove] : value, ...acc})
      }, {});
    return result;
  }


  return (
    <div>
      {
        damagesPokemonForm ? (
          <>
            {
              Object.entries(damagesPokemonForm).map(
                ([keyName, value]) => {
                  const key = keyName;
                  const ValuesOfKeyName = {
                    double_damage: 'Weak',
                    half_damage: 'Resistant',
                    no_damage: 'Inmmune'
                  }

                  return(
                    <div key={key}>
                      <Label>{ValuesOfKeyName[key]}</Label>
                      <TypeList>
                        {
                          value.length > 0 ? (
                            value.map(({name, url, damageValue})=>{
                              return(
                                <Type
                                  type={name}
                                  key={url}
                                  damageValue={damageValue}
                                />
                              )
                            })
                          ):(
                            <Type type={'none'} key={'none'} />
                          )
                      }
                      </TypeList>
                    </div>
                  )
                }
              )
            }
          </>
        ): <div></div>
      }
    </div>
  )
}

export default DamageRelations
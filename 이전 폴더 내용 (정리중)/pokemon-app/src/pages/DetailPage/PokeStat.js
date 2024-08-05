import { BaseStat } from "../../components/BaseStat";

const PokeStat = ({pokemon}) => {
  return (
    <table>
      <tbody>
        {pokemon.stats.map((stat)=>(
          <BaseStat
            key = {stat.name}
            valueStat = {stat.baseStat}
            nameStat = {stat.name}
            type = {pokemon.types[0]}
          />
        ))}
      </tbody>
    </table>
  )
}

export default PokeStat
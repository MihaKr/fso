import StatisticLine from "./StatisticLine"

const Statistics = (props) => {
  if (props.good === 0 && props.bad === 0 && props.neutral === 0) {
    return (
      <div>
        No Feedback given
      </div>
    )
  }
  return(
    <div>
      <table>
        <tbody>
          <tr><StatisticLine name="good" value = {props.good}/></tr>
          <tr><StatisticLine name="neutral" value = {props.neutral}/></tr>
          <tr><StatisticLine name="bad" value = {props.bad}/></tr>
          <tr><StatisticLine name="all" value = {props.good + props.bad + props.neutral}/></tr>
          <tr><StatisticLine name="average" value = {(props.good * 1 + props.bad * -1) / (props.good + props.bad + props.neutral)}/></tr>
          <tr><StatisticLine name="positve" value = {props.good / (props.good + props.bad + props.neutral)}/></tr>
        </tbody>
      </table>
    </div>
  )
}

export default Statistics
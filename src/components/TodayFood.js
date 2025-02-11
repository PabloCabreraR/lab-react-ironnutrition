import React from 'react'

class TodayFood extends React.Component {
  render(){
    const foodToday = this.props.todayFoods.map((food, index)=>{
      const {quantity, name, calories} = food
      if(quantity > 0){
        return <li>{quantity} {name} = {quantity*calories} cal  <button onClick={()=>this.props.deleteItem(index)}>Del</button></li>
      }
    })

    const total = this.props.todayFoods.reduce((acc, food)=>{
      const {quantity, calories} = food
      return acc + (quantity*calories)
    }, 0)
    return (
        <div className="TodayFood">
            <h3>Today's foods</h3>
            <ul>
                {foodToday}
            </ul>
            <p>Total: {total} cal</p>
        </div>
    )
  }
}

export default TodayFood
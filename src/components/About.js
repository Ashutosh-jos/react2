import React from 'react'

class About extends React.Component{
  constructor(props){
    super(props)
  
  this.state={
    count:1

  }
  }
render()
{
  const {name}=this.props
  const{count}=this.state


  return(
    <>
    <h1>{name}</h1>
    <h1>{count}</h1>
    <button onClick={(()=>{
      this.setState({count:this.state.count+1})
    })}>count++</button>
    </>
  )
}

}




export default About
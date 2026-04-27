const Header = ( props ) => {
  return <h1>{props.course}</h1>
}


const Content = ({ parts }) => {
  return (
    <>
      {parts.map((element, index) => (
        <p key={index}>
          {element.name} {element.exercises}
        </p>
      ))}
    </>
  )
}

const Total = ({ parts }) => {
  let sum = 0
  parts.forEach((element) => {
    sum += element.exercises
  })

  return <p>Number of exercises {sum}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App
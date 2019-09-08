import React from 'react'
import ReactDOM from 'react-dom'
const Part = (props) => {
    console.log(props)
    return (
        <div>
            <p>
                {props.part1} {props.exercises1}
                {props.part2} {props.exercises2}
                {props.part3} {props.exercises3}

            </p>
        </div>
    )
}
const Content = (props) => {
    console.log(props.part1.exercises)
    return (
        <div>
            <Part part1={props.part1.name} exercises1={props.part1.exercises} />
            <Part part2={props.part2.name} exercises2={props.part2.exercises} />
            <Part part3={props.part3.name} exercises3={props.part3.exercises} />

        </div>
    )
}
const Header = (props) => {
    return <h1>{props.course}</h1>
}
const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }
    return (
        <div>
            <Header course={course} />
            <Content
                part1={part1}
                part2={part2}
                part3={part3}
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
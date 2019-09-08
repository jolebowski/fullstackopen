import React from 'react'
import ReactDOM from 'react-dom'
const Part = (props) => {
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
    return (
        <div>
            <Part part1={props.parts[0].name} exercises1={props.parts[0].exercises} />
            <Part part2={props.parts[1].name} exercises2={props.parts[1].exercises} />
            <Part part3={props.parts[2].name} exercises3={props.parts[2].exercises} />

        </div>
    )
}
const Header = (props) => {
    return <h1>{props.course}</h1>
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
    console.log()
    return (
        <div>
            <Header course={course.name} />
            <Content
                parts={course.parts}
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
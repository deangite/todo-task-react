import React from 'react';
import TodoCreate from './todo-create';
import TodosList from './todos-list';

const todos = [
    {
        task: 'make React tutorial',
        isCompleted: false
    },
    {
        task: 'eat dinner',
        isCompleted: true
    }
];

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            todos
        }
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Todo App React!</h1>
                        <div className="well">
                            
                            <TodoCreate createTask={this.createTask.bind(this)} />
                        </div>
                        <TodosList 
                            toggleTask={this.toggleTask.bind(this)}
                            saveTask={this.saveTask.bind(this)}
                            deleteTask={this.deleteTask.bind(this)}
                            todos={this.state.todos}
                        />
                    </div>    
                </div>
            </div>
        )
    }

    createTask(task){
        this.state.todos.push({
            task,
            isCompleted: false
        })

        this.setState({todos: this.state.todos});
    }

    toggleTask(task){
        let foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todos: this.state.todos });
    }

    saveTask(oldTask, newTask){
        let foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({ todos: this.state.todos });
    }

    deleteTask(task){
       var deletedTask = _.remove(this.state.todos, todo => todo.task === task);
        this.setState({todos: this.state.todos});
    }
}

export default App;
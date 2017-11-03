import React from 'react';


class TodoCreate extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            errors: null
        }
    }

    renderErrors(){
        if(!this.state.errors) return false;

        return (
            <div className="alert alert-danger">
                { this.state.errors }
            </div>    
        );
    }

    render(){
        return (
            <form onSubmit={this.handleCreate.bind(this)} className="form-inline">
                 <div className="form-group">
                    <input placeholder="what do i need to do" ref="createInput" className="form-control"/>
                 </div>
                 <button className="btn btn-default">Create</button>
                 {this.renderErrors()}
            </form>
        )
    }

    handleCreate(event){
        event.preventDefault();
        // console.log(this.props.createTask.state);
        let task = this.refs.createInput.value;
        if(this.isEmptyStr(task) || _.find(this.state.todos, todo => todo.task === task)){
            this.setState({errors: 'Some error occured'});
            return false;
        }
        this.props.createTask(task);
        this.refs.createInput.value = '';
        this.setState({ errors: null });
        
    }

    isEmptyStr(str){
        return str.replace(/^\s+|\s+$/g, '').length == 0;
    }
}

export default TodoCreate;
class App extends React.Component {
    state = {
        name: "",
        comment: "",
        comments: [],
    }
    updateName = (event) => {
        this.setState({name : event.target.value});   
    }
    updateComment = (event) => {
        this.setState({comment: event.target.value});  
    }
    validateForm = (event) => {
        event.preventDefault();
        const tmp = this.state.comments.concat(`name: ${this.state.name}, message : ${this.state.comment}`);
        this.setState({comments : tmp});
        console.log(this.state.comments);
    }
    render() {
        return(
                <form className="formulaire" onSubmit={this.validateForm} >
                    <h1 className="formulaire__title">Say Something</h1>
                    <div className="input__containers">
                        <input className="input__name --border" type="text" placeholder="Your Name" value={this.state.name} onChange={this.updateName}/>
                    </div>
                    <div className="input__containers">
                        <textarea className="input__comment --border" rows="5" cols="22" placeholder="Your Comment" value={this.state.comment} onChange={this.updateComment}/>
                    </div>
                    <div className="input__containers">
                        <input className="input__btn --border" type="submit" value="Comment"/>
                    </div>
                </form>
        )}
}

ReactDOM.render(<App />,document.getElementById('app'));
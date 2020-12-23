import React, { Component } from 'react';
import axios from 'axios';

export default class form extends Component {

    state={
        name:"",
        lastname:"",
        email:"",
        message:"",
        sent:false
    }

// handle inputs
handleName=(e)=>{
    this.setState({
        name:e.target.value
    })
}

handleLastname=(e)=>{
    this.setState({
        lastname:e.target.value
    })
}

handleEmail=(e)=>{
    this.setState({
        email:e.target.value
    })
}

handleMessage=(e)=>{
    this.setState({
        message:e.target.value
    })
}
// end of handle inputs

formSubmit=(e)=>{
    e.preventDefault();

    let data = {
        name:this.state.name,
        lastname:this.state.lastname,
        email:this.state.email,
        message:this.state.message
    }

axios.post("/api/forma",data)
.then(res=>{
    this.setState({
        sent:true,
    },this.resetForm())
}).catch(()=>{
    console.log("message à été envoyé");
})

}

// for reseting initial data
resetForm=()=>{
    this.setState({
        name:"",
        lastname:"",
        email:"",
        message:""
    })

    setTimeout(()=>{
        this.setState({
            sent:false,
        })
    },3000)
}

    render() {
        return (
            <div className="container">
                <form onSubmit={this.formSubmit}>
                    {/* single item */}
                    <div className="singleItem">
                        <label htmlFor="name">Nom</label>
                        <input type="text" 
                        name="name"
                        className="name" 
                        placeholder="votre nom..." 
                        value={this.state.name}
                        onChange={this.handleName}
                        />
                    </div>
                    {/* end of single item */}

                    {/* single item */}
                    <div className="singleItem">
                        <label htmlFor="Lastname">Non de famille</label>
                        <input type="text" 
                        name="Lastname"
                        className="Lastname" 
                        placeholder="votre nom de famille..." 
                        value={this.state.lastname}
                        onChange={this.handleLastname}
                        />
                    </div>
                    {/* end of single item */}

                    {/* single item */}
                    <div className="singleItem">
                        <label htmlFor="email">Email</label>
                        <input type="text" 
                        name="email"
                        className="email" 
                        placeholder="votre email..." 
                        value={this.state.email}
                        onChange={this.handleEmail}
                        />
                    </div>
                    {/* end of single item */}

                    {/* single item */}
                    <div className="teaxtArea singleItem">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" 
                        id="" cols="30" rows="5" 
                        placeholder="Votre message..."
                        value={this.state.message}
                        onChange={this.handleMessage}
                        ></ textarea>
                    </div>
                    {/* end of single item */}
                    <div className={this.state.sent ?'msg msgAppear':'msg'}>Message a été envoyé</div>
                    <div className="btn">
                        <button type="submit" >Envoyer</button>
                    </div>
                </form>
            </div>
        )
    }
}
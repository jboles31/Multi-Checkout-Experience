let FirstPage = ({increaseCounter}) => {
    return(
            <div> 
                <button onClick={() => increaseCounter()}>Checkout</button>
            </div>
        )
}

let F1 = ({increaseCounter, updateData}) => {
    return(
        <div>
            <form id="personalInfo">
                Name:<br></br>
                <input type="text" name="name" onChange={(e) => updateData('name', e.target.value)}></input><br></br>Email:<br></br>
                <input type="text" name="email"  onChange={(e) => updateData('email', e.target.value)}></input><br></br>Password:<br></br>
                <input type="text" name="password" onChange={(e) => updateData('password', e.target.value)}></input><br></br>
                <button onClick={() => increaseCounter()}>Next</button>
            </form>
        </div>
    )
}

let F2 = ({increaseCounter, updateData}) => {
    return(
        <div>
            <form id="personalInfo">
                Address Line 1:<br></br>
                <input type="text" name="line 1" onChange={(e) => updateData('line1', e.target.value)}></input><br></br>Address Line 2:<br></br>
                <input type="text" name="line 2" onChange={(e) => updateData('line2', e.target.value)}></input><br></br>City:<br></br>
                <input type="text" name="city" onChange={(e) => updateData('city', e.target.value)}></input><br></br>State:<br></br>
                <input type="text" name="State" onChange={(e) => updateData('state', e.target.value)}></input><br></br>Zip Code:<br></br>
                <input type="text" name="zipcode" onChange={(e) => updateData('zipCode', e.target.value)}></input><br></br><br></br>
                <button onClick={() => increaseCounter()}>Next</button>
            </form>
        </div>
    )
}
    
let F3 = ({increaseCounter, updateData}) => {
    return(
        <div>
            <form id="personalInfo">
                Credit Card Number:<br></br>
                <input type="text" name="CC" onChange={(e) => updateData('CC', e.target.value)}></input><br></br>Expiration Date:<br></br>
                <input type="text" name="expDate" onChange={(e) => updateData('expDate', e.target.value)}></input><br></br>CVV:<br></br>
                <input type="text" name="cvv" onChange={(e) => updateData('cvv', e.target.value)}></input><br></br>Billing Zip Code:<br></br>
                <input type="text" name="billingZipCode" onChange={(e) => updateData('billingZip', e.target.value)}></input><br></br><br></br>
                <button onClick={() => increaseCounter()}>Next</button>
            </form>
        </div>
    )
}

let FinalData= ({increaseCounter, deleteData}) => {
    return(
        <div>
            <button onClick={() => {deleteData(); increaseCounter()}}>Purchase</button>
        </div>
    )
}



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            data: {}

        }
        this._onButtonClick = this._onButtonClick.bind(this)
        this.updateData = this.updateData.bind(this)
        this.deleteData = this.deleteData.bind(this)
    }

    _onButtonClick() {
        if(this.state.counter === 4){
            this.setState({
                counter: 0
            })
        } else {
            this.setState({
                counter: this.state.counter + 1
            })
        }
    }

    updateData(key, value) {
        let copyState = Object.create(this.state);
        copyState.data[key] = value;
        this.setState({
            copyState
        })
 
    }

    deleteData() {
        let copyState = Object.create(this.state.data);
        copyState = {
            name: null,
            email: null,
            password: null,
            line1: null,
            line2: null,
            city: null,
            state: null,
            zipCode: null,
            CC: null,
            expDate: null,
            cvv: null,
            billingZip: null 
        }
        this.setState({
            data: copyState
        })
    }
    
    render() {
        if(this.state.counter !== 4){
            return (
                <div>
                    <div>
                        {this.state.counter === 0 ? <FirstPage increaseCounter={this._onButtonClick} /> : undefined}
                        {this.state.counter === 1 ? <F1 increaseCounter={this._onButtonClick} updateData={this.updateData}/> : undefined}
                        {this.state.counter === 2 ? <F2 increaseCounter={this._onButtonClick} updateData={this.updateData}/> : undefined}
                        {this.state.counter === 3 ? <F3 increaseCounter={this._onButtonClick} updateData={this.updateData}/> : undefined}
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    Review Information: <br></br><br></br>
                    <tb>
                        <td>Name:  {this.state.data.name}</td><br></br>
                        <td>Password:  {this.state.data.password}</td><br></br>
                        <td>Email:  {this.state.data.email}</td><br></br>
                        <td>Address Line 1:  {this.state.data.line1}</td><br></br>
                        <td>Address Line 2:  {this.state.data.line2}</td><br></br>
                        <td>City:  {this.state.data.city}</td><br></br>
                        <td>State:  {this.state.data.state}</td><br></br>
                        <td>Zip Code:  {this.state.data.zipCode}</td><br></br>
                        <td>Credit Card #:  {this.state.data.CC}</td><br></br>
                        <td>Expiration Date:  {this.state.data.expDate}</td><br></br>
                        <td>CVV:  {this.state.data.cvv}</td><br></br>
                        <td>Billing Zip Code:  {this.state.data.billingZip}</td><br></br>
                    </tb>
                    <FinalData increaseCounter={this._onButtonClick} deleteData={this.deleteData} />
                </div>
            )
        }
        
    }

}



ReactDOM.render(<App />, document.getElementById('App'))
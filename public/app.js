let FirstPage = ({ increaseCounter }) => {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: () => increaseCounter() },
            "Checkout"
        )
    );
};

let F1 = ({ increaseCounter, updateData }) => {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "form",
            { id: "personalInfo" },
            "Name:",
            React.createElement("br", null),
            React.createElement("input", { type: "text", name: "name", onChange: e => updateData('name', e.target.value) }),
            React.createElement("br", null),
            "Email:",
            React.createElement("br", null),
            React.createElement("input", { type: "text", name: "email", onChange: e => updateData('email', e.target.value) }),
            React.createElement("br", null),
            "Password:",
            React.createElement("br", null),
            React.createElement("input", { type: "text", name: "password", onChange: e => updateData('password', e.target.value) }),
            React.createElement("br", null),
            React.createElement(
                "button",
                { onClick: () => increaseCounter() },
                "Next"
            )
        )
    );
};

let F2 = ({ increaseCounter, updateData }) => {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "form",
            { id: "personalInfo" },
            "Address Line 1:",
            React.createElement("br", null),
            React.createElement("input", { type: "text", name: "line 1", onChange: e => updateData('line1', e.target.value) }),
            React.createElement("br", null),
            "Address Line 2:",
            React.createElement("br", null),
            React.createElement("input", { type: "text", name: "line 2", onChange: e => updateData('line2', e.target.value) }),
            React.createElement("br", null),
            "City:",
            React.createElement("br", null),
            React.createElement("input", { type: "text", name: "city", onChange: e => updateData('city', e.target.value) }),
            React.createElement("br", null),
            "State:",
            React.createElement("br", null),
            React.createElement("input", { type: "text", name: "State", onChange: e => updateData('state', e.target.value) }),
            React.createElement("br", null),
            "Zip Code:",
            React.createElement("br", null),
            React.createElement("input", { type: "text", name: "zipcode", onChange: e => updateData('zipCode', e.target.value) }),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(
                "button",
                { onClick: () => increaseCounter() },
                "Next"
            )
        )
    );
};

let F3 = ({ increaseCounter, updateData }) => {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "form",
            { id: "personalInfo" },
            "Credit Card Number:",
            React.createElement("br", null),
            React.createElement("input", { type: "text", name: "CC", onChange: e => updateData('CC', e.target.value) }),
            React.createElement("br", null),
            "Expiration Date:",
            React.createElement("br", null),
            React.createElement("input", { type: "text", name: "expDate", onChange: e => updateData('expDate', e.target.value) }),
            React.createElement("br", null),
            "CVV:",
            React.createElement("br", null),
            React.createElement("input", { type: "text", name: "cvv", onChange: e => updateData('cvv', e.target.value) }),
            React.createElement("br", null),
            "Billing Zip Code:",
            React.createElement("br", null),
            React.createElement("input", { type: "text", name: "billingZipCode", onChange: e => updateData('billingZip', e.target.value) }),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(
                "button",
                { onClick: () => increaseCounter() },
                "Next"
            )
        )
    );
};

let FinalData = ({ increaseCounter, deleteData }) => {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: () => {
                    deleteData();increaseCounter();
                } },
            "Purchase"
        )
    );
};

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            data: {}

        };
        this._onButtonClick = this._onButtonClick.bind(this);
        this.updateData = this.updateData.bind(this);
        this.deleteData = this.deleteData.bind(this);
    }

    _onButtonClick() {
        if (this.state.counter === 4) {
            this.setState({
                counter: 0
            });
        } else {
            this.setState({
                counter: this.state.counter + 1
            });
        }
    }

    updateData(key, value) {
        let copyState = Object.create(this.state);
        copyState.data[key] = value;
        this.setState({
            copyState
        });
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
        };
        this.setState({
            data: copyState
        });
    }

    render() {
        if (this.state.counter !== 4) {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    null,
                    this.state.counter === 0 ? React.createElement(FirstPage, { increaseCounter: this._onButtonClick }) : undefined,
                    this.state.counter === 1 ? React.createElement(F1, { increaseCounter: this._onButtonClick, updateData: this.updateData }) : undefined,
                    this.state.counter === 2 ? React.createElement(F2, { increaseCounter: this._onButtonClick, updateData: this.updateData }) : undefined,
                    this.state.counter === 3 ? React.createElement(F3, { increaseCounter: this._onButtonClick, updateData: this.updateData }) : undefined
                )
            );
        } else {
            return React.createElement(
                "div",
                null,
                "Review Information: ",
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(
                    "tb",
                    null,
                    React.createElement(
                        "td",
                        null,
                        "Name:  ",
                        this.state.data.name
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "td",
                        null,
                        "Password:  ",
                        this.state.data.password
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "td",
                        null,
                        "Email:  ",
                        this.state.data.email
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "td",
                        null,
                        "Address Line 1:  ",
                        this.state.data.line1
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "td",
                        null,
                        "Address Line 2:  ",
                        this.state.data.line2
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "td",
                        null,
                        "City:  ",
                        this.state.data.city
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "td",
                        null,
                        "State:  ",
                        this.state.data.state
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "td",
                        null,
                        "Zip Code:  ",
                        this.state.data.zipCode
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "td",
                        null,
                        "Credit Card #:  ",
                        this.state.data.CC
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "td",
                        null,
                        "Expiration Date:  ",
                        this.state.data.expDate
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "td",
                        null,
                        "CVV:  ",
                        this.state.data.cvv
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "td",
                        null,
                        "Billing Zip Code:  ",
                        this.state.data.billingZip
                    ),
                    React.createElement("br", null)
                ),
                React.createElement(FinalData, { increaseCounter: this._onButtonClick, deleteData: this.deleteData })
            );
        }
    }

}

ReactDOM.render(React.createElement(App, null), document.getElementById('App'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkZpcnN0UGFnZSIsImluY3JlYXNlQ291bnRlciIsIkYxIiwidXBkYXRlRGF0YSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkYyIiwiRjMiLCJGaW5hbERhdGEiLCJkZWxldGVEYXRhIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJjb3VudGVyIiwiZGF0YSIsIl9vbkJ1dHRvbkNsaWNrIiwiYmluZCIsInNldFN0YXRlIiwia2V5IiwiY29weVN0YXRlIiwiT2JqZWN0IiwiY3JlYXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJsaW5lMSIsImxpbmUyIiwiY2l0eSIsInppcENvZGUiLCJDQyIsImV4cERhdGUiLCJjdnYiLCJiaWxsaW5nWmlwIiwicmVuZGVyIiwidW5kZWZpbmVkIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxZQUFZLENBQUMsRUFBQ0MsZUFBRCxFQUFELEtBQXVCO0FBQ25DLFdBQ1E7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLGNBQVEsU0FBUyxNQUFNQSxpQkFBdkI7QUFBQTtBQUFBO0FBREosS0FEUjtBQUtILENBTkQ7O0FBUUEsSUFBSUMsS0FBSyxDQUFDLEVBQUNELGVBQUQsRUFBa0JFLFVBQWxCLEVBQUQsS0FBbUM7QUFDeEMsV0FDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsY0FBTSxJQUFHLGNBQVQ7QUFBQTtBQUNTLDJDQURUO0FBRUksMkNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssTUFBeEIsRUFBK0IsVUFBV0MsQ0FBRCxJQUFPRCxXQUFXLE1BQVgsRUFBbUJDLEVBQUVDLE1BQUYsQ0FBU0MsS0FBNUIsQ0FBaEQsR0FGSjtBQUVnRywyQ0FGaEc7QUFBQTtBQUUrRywyQ0FGL0c7QUFHSSwyQ0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxPQUF4QixFQUFpQyxVQUFXRixDQUFELElBQU9ELFdBQVcsT0FBWCxFQUFvQkMsRUFBRUMsTUFBRixDQUFTQyxLQUE3QixDQUFsRCxHQUhKO0FBR21HLDJDQUhuRztBQUFBO0FBR3FILDJDQUhySDtBQUlJLDJDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLFVBQXhCLEVBQW1DLFVBQVdGLENBQUQsSUFBT0QsV0FBVyxVQUFYLEVBQXVCQyxFQUFFQyxNQUFGLENBQVNDLEtBQWhDLENBQXBELEdBSko7QUFJd0csMkNBSnhHO0FBS0k7QUFBQTtBQUFBLGtCQUFRLFNBQVMsTUFBTUwsaUJBQXZCO0FBQUE7QUFBQTtBQUxKO0FBREosS0FESjtBQVdILENBWkQ7O0FBY0EsSUFBSU0sS0FBSyxDQUFDLEVBQUNOLGVBQUQsRUFBa0JFLFVBQWxCLEVBQUQsS0FBbUM7QUFDeEMsV0FDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsY0FBTSxJQUFHLGNBQVQ7QUFBQTtBQUNtQiwyQ0FEbkI7QUFFSSwyQ0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxRQUF4QixFQUFpQyxVQUFXQyxDQUFELElBQU9ELFdBQVcsT0FBWCxFQUFvQkMsRUFBRUMsTUFBRixDQUFTQyxLQUE3QixDQUFsRCxHQUZKO0FBRW1HLDJDQUZuRztBQUFBO0FBRTJILDJDQUYzSDtBQUdJLDJDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLFFBQXhCLEVBQWlDLFVBQVdGLENBQUQsSUFBT0QsV0FBVyxPQUFYLEVBQW9CQyxFQUFFQyxNQUFGLENBQVNDLEtBQTdCLENBQWxELEdBSEo7QUFHbUcsMkNBSG5HO0FBQUE7QUFHaUgsMkNBSGpIO0FBSUksMkNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssTUFBeEIsRUFBK0IsVUFBV0YsQ0FBRCxJQUFPRCxXQUFXLE1BQVgsRUFBbUJDLEVBQUVDLE1BQUYsQ0FBU0MsS0FBNUIsQ0FBaEQsR0FKSjtBQUlnRywyQ0FKaEc7QUFBQTtBQUkrRywyQ0FKL0c7QUFLSSwyQ0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxPQUF4QixFQUFnQyxVQUFXRixDQUFELElBQU9ELFdBQVcsT0FBWCxFQUFvQkMsRUFBRUMsTUFBRixDQUFTQyxLQUE3QixDQUFqRCxHQUxKO0FBS2tHLDJDQUxsRztBQUFBO0FBS29ILDJDQUxwSDtBQU1JLDJDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLFNBQXhCLEVBQWtDLFVBQVdGLENBQUQsSUFBT0QsV0FBVyxTQUFYLEVBQXNCQyxFQUFFQyxNQUFGLENBQVNDLEtBQS9CLENBQW5ELEdBTko7QUFNc0csMkNBTnRHO0FBTStHLDJDQU4vRztBQU9JO0FBQUE7QUFBQSxrQkFBUSxTQUFTLE1BQU1MLGlCQUF2QjtBQUFBO0FBQUE7QUFQSjtBQURKLEtBREo7QUFhSCxDQWREOztBQWdCQSxJQUFJTyxLQUFLLENBQUMsRUFBQ1AsZUFBRCxFQUFrQkUsVUFBbEIsRUFBRCxLQUFtQztBQUN4QyxXQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxjQUFNLElBQUcsY0FBVDtBQUFBO0FBQ3VCLDJDQUR2QjtBQUVJLDJDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLElBQXhCLEVBQTZCLFVBQVdDLENBQUQsSUFBT0QsV0FBVyxJQUFYLEVBQWlCQyxFQUFFQyxNQUFGLENBQVNDLEtBQTFCLENBQTlDLEdBRko7QUFFNEYsMkNBRjVGO0FBQUE7QUFFcUgsMkNBRnJIO0FBR0ksMkNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssU0FBeEIsRUFBa0MsVUFBV0YsQ0FBRCxJQUFPRCxXQUFXLFNBQVgsRUFBc0JDLEVBQUVDLE1BQUYsQ0FBU0MsS0FBL0IsQ0FBbkQsR0FISjtBQUdzRywyQ0FIdEc7QUFBQTtBQUdtSCwyQ0FIbkg7QUFJSSwyQ0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxLQUF4QixFQUE4QixVQUFXRixDQUFELElBQU9ELFdBQVcsS0FBWCxFQUFrQkMsRUFBRUMsTUFBRixDQUFTQyxLQUEzQixDQUEvQyxHQUpKO0FBSThGLDJDQUo5RjtBQUFBO0FBSXdILDJDQUp4SDtBQUtJLDJDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLGdCQUF4QixFQUF5QyxVQUFXRixDQUFELElBQU9ELFdBQVcsWUFBWCxFQUF5QkMsRUFBRUMsTUFBRixDQUFTQyxLQUFsQyxDQUExRCxHQUxKO0FBS2dILDJDQUxoSDtBQUt5SCwyQ0FMekg7QUFNSTtBQUFBO0FBQUEsa0JBQVEsU0FBUyxNQUFNTCxpQkFBdkI7QUFBQTtBQUFBO0FBTko7QUFESixLQURKO0FBWUgsQ0FiRDs7QUFlQSxJQUFJUSxZQUFXLENBQUMsRUFBQ1IsZUFBRCxFQUFrQlMsVUFBbEIsRUFBRCxLQUFtQztBQUM5QyxXQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxjQUFRLFNBQVMsTUFBTTtBQUFDQSxpQ0FBY1Q7QUFBa0IsaUJBQXhEO0FBQUE7QUFBQTtBQURKLEtBREo7QUFLSCxDQU5EOztBQVVBLE1BQU1VLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQzlCQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47O0FBRUEsYUFBS0MsS0FBTCxHQUFhO0FBQ1RDLHFCQUFTLENBREE7QUFFVEMsa0JBQU07O0FBRkcsU0FBYjtBQUtBLGFBQUtDLGNBQUwsR0FBc0IsS0FBS0EsY0FBTCxDQUFvQkMsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBdEI7QUFDQSxhQUFLakIsVUFBTCxHQUFrQixLQUFLQSxVQUFMLENBQWdCaUIsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBbEI7QUFDQSxhQUFLVixVQUFMLEdBQWtCLEtBQUtBLFVBQUwsQ0FBZ0JVLElBQWhCLENBQXFCLElBQXJCLENBQWxCO0FBQ0g7O0FBRURELHFCQUFpQjtBQUNiLFlBQUcsS0FBS0gsS0FBTCxDQUFXQyxPQUFYLEtBQXVCLENBQTFCLEVBQTRCO0FBQ3hCLGlCQUFLSSxRQUFMLENBQWM7QUFDVkoseUJBQVM7QUFEQyxhQUFkO0FBR0gsU0FKRCxNQUlPO0FBQ0gsaUJBQUtJLFFBQUwsQ0FBYztBQUNWSix5QkFBUyxLQUFLRCxLQUFMLENBQVdDLE9BQVgsR0FBcUI7QUFEcEIsYUFBZDtBQUdIO0FBQ0o7O0FBRURkLGVBQVdtQixHQUFYLEVBQWdCaEIsS0FBaEIsRUFBdUI7QUFDbkIsWUFBSWlCLFlBQVlDLE9BQU9DLE1BQVAsQ0FBYyxLQUFLVCxLQUFuQixDQUFoQjtBQUNBTyxrQkFBVUwsSUFBVixDQUFlSSxHQUFmLElBQXNCaEIsS0FBdEI7QUFDQSxhQUFLZSxRQUFMLENBQWM7QUFDVkU7QUFEVSxTQUFkO0FBSUg7O0FBRURiLGlCQUFhO0FBQ1QsWUFBSWEsWUFBWUMsT0FBT0MsTUFBUCxDQUFjLEtBQUtULEtBQUwsQ0FBV0UsSUFBekIsQ0FBaEI7QUFDQUssb0JBQVk7QUFDUkcsa0JBQU0sSUFERTtBQUVSQyxtQkFBTyxJQUZDO0FBR1JDLHNCQUFVLElBSEY7QUFJUkMsbUJBQU8sSUFKQztBQUtSQyxtQkFBTyxJQUxDO0FBTVJDLGtCQUFNLElBTkU7QUFPUmYsbUJBQU8sSUFQQztBQVFSZ0IscUJBQVMsSUFSRDtBQVNSQyxnQkFBSSxJQVRJO0FBVVJDLHFCQUFTLElBVkQ7QUFXUkMsaUJBQUssSUFYRztBQVlSQyx3QkFBWTtBQVpKLFNBQVo7QUFjQSxhQUFLZixRQUFMLENBQWM7QUFDVkgsa0JBQU1LO0FBREksU0FBZDtBQUdIOztBQUVEYyxhQUFTO0FBQ0wsWUFBRyxLQUFLckIsS0FBTCxDQUFXQyxPQUFYLEtBQXVCLENBQTFCLEVBQTRCO0FBQ3hCLG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUNLLHlCQUFLRCxLQUFMLENBQVdDLE9BQVgsS0FBdUIsQ0FBdkIsR0FBMkIsb0JBQUMsU0FBRCxJQUFXLGlCQUFpQixLQUFLRSxjQUFqQyxHQUEzQixHQUFpRm1CLFNBRHRGO0FBRUsseUJBQUt0QixLQUFMLENBQVdDLE9BQVgsS0FBdUIsQ0FBdkIsR0FBMkIsb0JBQUMsRUFBRCxJQUFJLGlCQUFpQixLQUFLRSxjQUExQixFQUEwQyxZQUFZLEtBQUtoQixVQUEzRCxHQUEzQixHQUFzR21DLFNBRjNHO0FBR0sseUJBQUt0QixLQUFMLENBQVdDLE9BQVgsS0FBdUIsQ0FBdkIsR0FBMkIsb0JBQUMsRUFBRCxJQUFJLGlCQUFpQixLQUFLRSxjQUExQixFQUEwQyxZQUFZLEtBQUtoQixVQUEzRCxHQUEzQixHQUFzR21DLFNBSDNHO0FBSUsseUJBQUt0QixLQUFMLENBQVdDLE9BQVgsS0FBdUIsQ0FBdkIsR0FBMkIsb0JBQUMsRUFBRCxJQUFJLGlCQUFpQixLQUFLRSxjQUExQixFQUEwQyxZQUFZLEtBQUtoQixVQUEzRCxHQUEzQixHQUFzR21DO0FBSjNHO0FBREosYUFESjtBQVVILFNBWEQsTUFXTztBQUNILG1CQUNJO0FBQUE7QUFBQTtBQUFBO0FBQ3dCLCtDQUR4QjtBQUNpQywrQ0FEakM7QUFFSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFZLDZCQUFLdEIsS0FBTCxDQUFXRSxJQUFYLENBQWdCUTtBQUE1QixxQkFESjtBQUMwQyxtREFEMUM7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFnQiw2QkFBS1YsS0FBTCxDQUFXRSxJQUFYLENBQWdCVTtBQUFoQyxxQkFGSjtBQUVrRCxtREFGbEQ7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFhLDZCQUFLWixLQUFMLENBQVdFLElBQVgsQ0FBZ0JTO0FBQTdCLHFCQUhKO0FBRzRDLG1EQUg1QztBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQXNCLDZCQUFLWCxLQUFMLENBQVdFLElBQVgsQ0FBZ0JXO0FBQXRDLHFCQUpKO0FBSXFELG1EQUpyRDtBQUtJO0FBQUE7QUFBQTtBQUFBO0FBQXNCLDZCQUFLYixLQUFMLENBQVdFLElBQVgsQ0FBZ0JZO0FBQXRDLHFCQUxKO0FBS3FELG1EQUxyRDtBQU1JO0FBQUE7QUFBQTtBQUFBO0FBQVksNkJBQUtkLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQmE7QUFBNUIscUJBTko7QUFNMEMsbURBTjFDO0FBT0k7QUFBQTtBQUFBO0FBQUE7QUFBYSw2QkFBS2YsS0FBTCxDQUFXRSxJQUFYLENBQWdCRjtBQUE3QixxQkFQSjtBQU80QyxtREFQNUM7QUFRSTtBQUFBO0FBQUE7QUFBQTtBQUFnQiw2QkFBS0EsS0FBTCxDQUFXRSxJQUFYLENBQWdCYztBQUFoQyxxQkFSSjtBQVFpRCxtREFSakQ7QUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFxQiw2QkFBS2hCLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQmU7QUFBckMscUJBVEo7QUFTaUQsbURBVGpEO0FBVUk7QUFBQTtBQUFBO0FBQUE7QUFBdUIsNkJBQUtqQixLQUFMLENBQVdFLElBQVgsQ0FBZ0JnQjtBQUF2QyxxQkFWSjtBQVV3RCxtREFWeEQ7QUFXSTtBQUFBO0FBQUE7QUFBQTtBQUFXLDZCQUFLbEIsS0FBTCxDQUFXRSxJQUFYLENBQWdCaUI7QUFBM0IscUJBWEo7QUFXd0MsbURBWHhDO0FBWUk7QUFBQTtBQUFBO0FBQUE7QUFBd0IsNkJBQUtuQixLQUFMLENBQVdFLElBQVgsQ0FBZ0JrQjtBQUF4QyxxQkFaSjtBQVk0RDtBQVo1RCxpQkFGSjtBQWdCSSxvQ0FBQyxTQUFELElBQVcsaUJBQWlCLEtBQUtqQixjQUFqQyxFQUFpRCxZQUFZLEtBQUtULFVBQWxFO0FBaEJKLGFBREo7QUFvQkg7QUFFSjs7QUEzRjZCOztBQWlHbEM2QixTQUFTRixNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJHLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IEZpcnN0UGFnZSA9ICh7aW5jcmVhc2VDb3VudGVyfSkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+IFxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaW5jcmVhc2VDb3VudGVyKCl9PkNoZWNrb3V0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxufVxuXG5sZXQgRjEgPSAoe2luY3JlYXNlQ291bnRlciwgdXBkYXRlRGF0YX0pID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Zm9ybSBpZD1cInBlcnNvbmFsSW5mb1wiPlxuICAgICAgICAgICAgICAgIE5hbWU6PGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZURhdGEoJ25hbWUnLCBlLnRhcmdldC52YWx1ZSl9PjwvaW5wdXQ+PGJyPjwvYnI+RW1haWw6PGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlRGF0YSgnZW1haWwnLCBlLnRhcmdldC52YWx1ZSl9PjwvaW5wdXQ+PGJyPjwvYnI+UGFzc3dvcmQ6PGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVEYXRhKCdwYXNzd29yZCcsIGUudGFyZ2V0LnZhbHVlKX0+PC9pbnB1dD48YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGluY3JlYXNlQ291bnRlcigpfT5OZXh0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxubGV0IEYyID0gKHtpbmNyZWFzZUNvdW50ZXIsIHVwZGF0ZURhdGF9KSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGZvcm0gaWQ9XCJwZXJzb25hbEluZm9cIj5cbiAgICAgICAgICAgICAgICBBZGRyZXNzIExpbmUgMTo8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibGluZSAxXCIgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVEYXRhKCdsaW5lMScsIGUudGFyZ2V0LnZhbHVlKX0+PC9pbnB1dD48YnI+PC9icj5BZGRyZXNzIExpbmUgMjo8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibGluZSAyXCIgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVEYXRhKCdsaW5lMicsIGUudGFyZ2V0LnZhbHVlKX0+PC9pbnB1dD48YnI+PC9icj5DaXR5Ojxicj48L2JyPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVEYXRhKCdjaXR5JywgZS50YXJnZXQudmFsdWUpfT48L2lucHV0Pjxicj48L2JyPlN0YXRlOjxicj48L2JyPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJTdGF0ZVwiIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlRGF0YSgnc3RhdGUnLCBlLnRhcmdldC52YWx1ZSl9PjwvaW5wdXQ+PGJyPjwvYnI+WmlwIENvZGU6PGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInppcGNvZGVcIiBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZURhdGEoJ3ppcENvZGUnLCBlLnRhcmdldC52YWx1ZSl9PjwvaW5wdXQ+PGJyPjwvYnI+PGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBpbmNyZWFzZUNvdW50ZXIoKX0+TmV4dDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4gICAgXG5sZXQgRjMgPSAoe2luY3JlYXNlQ291bnRlciwgdXBkYXRlRGF0YX0pID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Zm9ybSBpZD1cInBlcnNvbmFsSW5mb1wiPlxuICAgICAgICAgICAgICAgIENyZWRpdCBDYXJkIE51bWJlcjo8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiQ0NcIiBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZURhdGEoJ0NDJywgZS50YXJnZXQudmFsdWUpfT48L2lucHV0Pjxicj48L2JyPkV4cGlyYXRpb24gRGF0ZTo8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZXhwRGF0ZVwiIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlRGF0YSgnZXhwRGF0ZScsIGUudGFyZ2V0LnZhbHVlKX0+PC9pbnB1dD48YnI+PC9icj5DVlY6PGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImN2dlwiIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlRGF0YSgnY3Z2JywgZS50YXJnZXQudmFsdWUpfT48L2lucHV0Pjxicj48L2JyPkJpbGxpbmcgWmlwIENvZGU6PGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImJpbGxpbmdaaXBDb2RlXCIgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVEYXRhKCdiaWxsaW5nWmlwJywgZS50YXJnZXQudmFsdWUpfT48L2lucHV0Pjxicj48L2JyPjxicj48L2JyPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaW5jcmVhc2VDb3VudGVyKCl9Pk5leHQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5sZXQgRmluYWxEYXRhPSAoe2luY3JlYXNlQ291bnRlciwgZGVsZXRlRGF0YX0pID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtkZWxldGVEYXRhKCk7IGluY3JlYXNlQ291bnRlcigpfX0+UHVyY2hhc2U8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNvdW50ZXI6IDAsXG4gICAgICAgICAgICBkYXRhOiB7fVxuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fb25CdXR0b25DbGljayA9IHRoaXMuX29uQnV0dG9uQ2xpY2suYmluZCh0aGlzKVxuICAgICAgICB0aGlzLnVwZGF0ZURhdGEgPSB0aGlzLnVwZGF0ZURhdGEuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmRlbGV0ZURhdGEgPSB0aGlzLmRlbGV0ZURhdGEuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIF9vbkJ1dHRvbkNsaWNrKCkge1xuICAgICAgICBpZih0aGlzLnN0YXRlLmNvdW50ZXIgPT09IDQpe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY291bnRlcjogMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGNvdW50ZXI6IHRoaXMuc3RhdGUuY291bnRlciArIDFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVEYXRhKGtleSwgdmFsdWUpIHtcbiAgICAgICAgbGV0IGNvcHlTdGF0ZSA9IE9iamVjdC5jcmVhdGUodGhpcy5zdGF0ZSk7XG4gICAgICAgIGNvcHlTdGF0ZS5kYXRhW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb3B5U3RhdGVcbiAgICAgICAgfSlcbiBcbiAgICB9XG5cbiAgICBkZWxldGVEYXRhKCkge1xuICAgICAgICBsZXQgY29weVN0YXRlID0gT2JqZWN0LmNyZWF0ZSh0aGlzLnN0YXRlLmRhdGEpO1xuICAgICAgICBjb3B5U3RhdGUgPSB7XG4gICAgICAgICAgICBuYW1lOiBudWxsLFxuICAgICAgICAgICAgZW1haWw6IG51bGwsXG4gICAgICAgICAgICBwYXNzd29yZDogbnVsbCxcbiAgICAgICAgICAgIGxpbmUxOiBudWxsLFxuICAgICAgICAgICAgbGluZTI6IG51bGwsXG4gICAgICAgICAgICBjaXR5OiBudWxsLFxuICAgICAgICAgICAgc3RhdGU6IG51bGwsXG4gICAgICAgICAgICB6aXBDb2RlOiBudWxsLFxuICAgICAgICAgICAgQ0M6IG51bGwsXG4gICAgICAgICAgICBleHBEYXRlOiBudWxsLFxuICAgICAgICAgICAgY3Z2OiBudWxsLFxuICAgICAgICAgICAgYmlsbGluZ1ppcDogbnVsbCBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGRhdGE6IGNvcHlTdGF0ZVxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUuY291bnRlciAhPT0gNCl7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3VudGVyID09PSAwID8gPEZpcnN0UGFnZSBpbmNyZWFzZUNvdW50ZXI9e3RoaXMuX29uQnV0dG9uQ2xpY2t9IC8+IDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY291bnRlciA9PT0gMSA/IDxGMSBpbmNyZWFzZUNvdW50ZXI9e3RoaXMuX29uQnV0dG9uQ2xpY2t9IHVwZGF0ZURhdGE9e3RoaXMudXBkYXRlRGF0YX0vPiA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvdW50ZXIgPT09IDIgPyA8RjIgaW5jcmVhc2VDb3VudGVyPXt0aGlzLl9vbkJ1dHRvbkNsaWNrfSB1cGRhdGVEYXRhPXt0aGlzLnVwZGF0ZURhdGF9Lz4gOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3VudGVyID09PSAzID8gPEYzIGluY3JlYXNlQ291bnRlcj17dGhpcy5fb25CdXR0b25DbGlja30gdXBkYXRlRGF0YT17dGhpcy51cGRhdGVEYXRhfS8+IDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgUmV2aWV3IEluZm9ybWF0aW9uOiA8YnI+PC9icj48YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgPHRiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPk5hbWU6ICB7dGhpcy5zdGF0ZS5kYXRhLm5hbWV9PC90ZD48YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5QYXNzd29yZDogIHt0aGlzLnN0YXRlLmRhdGEucGFzc3dvcmR9PC90ZD48YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5FbWFpbDogIHt0aGlzLnN0YXRlLmRhdGEuZW1haWx9PC90ZD48YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5BZGRyZXNzIExpbmUgMTogIHt0aGlzLnN0YXRlLmRhdGEubGluZTF9PC90ZD48YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5BZGRyZXNzIExpbmUgMjogIHt0aGlzLnN0YXRlLmRhdGEubGluZTJ9PC90ZD48YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5DaXR5OiAge3RoaXMuc3RhdGUuZGF0YS5jaXR5fTwvdGQ+PGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+U3RhdGU6ICB7dGhpcy5zdGF0ZS5kYXRhLnN0YXRlfTwvdGQ+PGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+WmlwIENvZGU6ICB7dGhpcy5zdGF0ZS5kYXRhLnppcENvZGV9PC90ZD48YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5DcmVkaXQgQ2FyZCAjOiAge3RoaXMuc3RhdGUuZGF0YS5DQ308L3RkPjxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkV4cGlyYXRpb24gRGF0ZTogIHt0aGlzLnN0YXRlLmRhdGEuZXhwRGF0ZX08L3RkPjxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkNWVjogIHt0aGlzLnN0YXRlLmRhdGEuY3Z2fTwvdGQ+PGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+QmlsbGluZyBaaXAgQ29kZTogIHt0aGlzLnN0YXRlLmRhdGEuYmlsbGluZ1ppcH08L3RkPjxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICA8L3RiPlxuICAgICAgICAgICAgICAgICAgICA8RmluYWxEYXRhIGluY3JlYXNlQ291bnRlcj17dGhpcy5fb25CdXR0b25DbGlja30gZGVsZXRlRGF0YT17dGhpcy5kZWxldGVEYXRhfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxufVxuXG5cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBcHAnKSkiXX0=
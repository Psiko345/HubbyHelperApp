import React, { Component } from 'react';

class BudgetSelection extends Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    onValueChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
    }

    formSubmit(event) {
        event.preventDefault();
        console.log(this.state.selectedOption)
    }

    render() {
        return (
            <div className="budgetSelector">
                <h1 className="selectorHeader"> What's our budget? </h1>

                <form onSubmit={this.formSubmit}>
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                value="CheapAndCheerful"
                                checked={this.state.selectedOption === "CheapAndCheerful"}
                                onChange={this.onValueChange}
                            />
                            Cheap and Cheerful (Under $100)
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                value="OhYouShouldntHave"
                                checked={this.state.selectedOption === "OhYouShouldntHave"}
                                onChange={this.onValueChange}
                            />
                            Oh You Shouldn't Have ($100-$500)
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                value="OhBaby!"
                                checked={this.state.selectedOption === "OhBaby!"}
                                onChange={this.onValueChange}
                            />
                            Oh Baby! ($500-$1,000)
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                value="BigTicketItem"
                                checked={this.state.selectedOption === "BigTicketItem"}
                                onChange={this.onValueChange}
                            />
                            Big Ticket Item ($1000+)
                        </label>
                    </div>
                </form>
            </div >
        )
    }
}

export default BudgetSelection; 
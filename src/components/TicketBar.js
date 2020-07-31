import React from 'react'

export default class TicketBar extends React.Component{
    render(){
        return(
            <div>
            <div className="row">
            Your selected tickets
            </div>
              
                <div className="row">
                <div className="tickets">
                   <div className="ticket"> Ticket #1</div> 
                    <div>1 2 3 4 5</div>
                </div>
                <div className="tickets">
                  <div className="ticket">Ticket #2</div>
                  <div>1 2 3 4 5</div>  
                </div>
                </div>
            </div>
        )
    }
}
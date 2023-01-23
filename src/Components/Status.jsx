import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './Data';
import Card from 'react-bootstrap/Card';



function Status() {
//** nombre total des agents  */
    const totalAgents = Data.results;
    const total = totalAgents.length;
//** nombre total des agents actives  */
    const activeAgents = Data.results.filter(agent => agent.status === "active");
    const active = activeAgents.length;
//** nombre total des agents déconnectés  */
    const NeverConnectedAgent = Data.results.filter(agent => agent.status === "never_connected");
    const NeverConnected = NeverConnectedAgent.length;
//** nombre total des agents en attente  */
    const PendingAgent = Data.results.filter(agent => agent.status === "pending");
    const Pending = PendingAgent.length;
//** nombre total des agents agents jamais connectés  */
    const DisconnectedAgent = Data.results.filter(agent => agent.status === "disconnected");
    const Disconnected = DisconnectedAgent.length;
    return (
    <div className="allCards">
{/***  Total Agents ****/}
        <div className='card'>
                <Card.Body>
                    <Card.Title className='cardTitle'>Total agents</Card.Title>
                    <Card.Text className='totalAgent'>{total}</Card.Text>
                </Card.Body>
        </div>
{/***  Active Agents ****/}
        <div className='card'>
                <Card.Body>
                    <Card.Title className='cardTitle'>Active agents</Card.Title>
                    <Card.Text className='activeAgent'>{active}</Card.Text>
                </Card.Body>
        </div>
{/***  Disconnected Agents ****/}
        <div className='card'>
            <Card.Body>
                <Card.Title className='cardTitle'>Disconnected agents</Card.Title>
                <Card.Text className='disconnectedAgent'>{Disconnected}</Card.Text>
            </Card.Body>
        </div>
{/***  Pending Agents ****/}
        <div className='card'>
            <Card.Body>
                <Card.Title className='cardTitle' >Pending agents</Card.Title>
                <Card.Text className='pendingAgent'>{Pending}</Card.Text>
            </Card.Body>
        </div>
{/***  connected Agents ****/}
        <div className='card'>
            <Card.Body>
                <Card.Title className='cardTitle'>Never connected agents</Card.Title>
                <Card.Text className='neverConnected'>{NeverConnected}</Card.Text>
            </Card.Body>
        </div>
    </div>
);
}
export default Status;
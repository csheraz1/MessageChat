import { Client } from '@stomp/stompjs';

function Example(){
    const handleEvent = () => {
        const client = new Client({
            brokerURL: "ws://localhost:8080/gs-guide-websocket"
        })
        client.onConnect =() =>{
            client.subscribe('chatroom/user',(Message) => {
                console.log("hello");
                console.log(Message);
            })
        }
       
    }
    return (
        <div>
            
            <form> 
                <label htmlFor='name'></label>
                <input placeholder="name" name='name'/>  
                <button onClick={handleEvent}>Submit</button>
            </form>
        </div>
    )
}
export default Example
export default function AddTodoList()
{
    const config:any = { ip: '192.0.2.1', port: 3000 };

    return (
        <div>
            <h1>IP Address : {config["ip"]}</h1>
            <h1>Port No : {config["port"]}</h1>

        </div>
    )
       
}
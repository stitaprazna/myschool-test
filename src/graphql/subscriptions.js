<Connect
    query={graphqlOperation(queries.listTodos)}
    subscription={graphqlOperation(subscriptions.onCreateTodo)}
    onSubscriptionMsg={(prev, { onCreateTodo }) => {
        console.log ( onCreateTodo );
        return prev; 
    }}
>
    {({ data: { listTodos }, loading, error }) => {
        if (error) return (<h3>Error</h3>);
        if (loading || !listTodos) return (<h3>Loading...</h3>);
        return (<ListView todos={listTodos ? listTodos.items : []} />);
    }}
 </Connect>
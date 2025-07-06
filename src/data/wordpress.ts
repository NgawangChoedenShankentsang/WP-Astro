interface WPGraphQLParams {
    query: string;
    variables?: object;
}
export async function wpquery({query, variables = {}}: WPGraphQLParams) {
    const res = await fetch('http://wp-astro.local/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query, 
            variables
        }),
    });
    
    if (!res.ok) {
        console.error(res);
        return {};
    }
    
    const { data } = await res.json();
    return data;
}
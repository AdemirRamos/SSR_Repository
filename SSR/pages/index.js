import React from 'react'
import 'isomorphic-fetch'
import Link from 'next/link'

const Nome = ({repositories}) => (
    <div>
        
        <Link href="./blog">
            
            <a>Blog</a>
            
        </Link>

        <h1>Hello, world!</h1>

        {repositories.map(repo => (
            <h1 key={repo.id}>{repo.name}</h1>
        ))}
        
    </div>
)

/*Esse conteúdo (acima) está sendo renderizado do lado do servidor.*/
/*Mesmo que o JS da página seja desativado, o conteúdo ainda funcionará.*/

Nome.getInitialProps = async() => {
    const response = await fetch('https://api.github.com/orgs/rocketseat/repos')
    const repositories = await response.json();

    console.log(repositories);

    return {repositories};
}

export default Nome;

import { ReactNode } from 'react'


interface SocialProps{
    url:string;
    children: ReactNode;
}

export function Social({ url, children}: SocialProps){
return(
    <a
    href={url}
    rel='noopener noreferrer' //falando pro React que vaamos abrir um link externo
    target='_blank' //para abrir em uma nova aba
    >
        {children}
    </a>
)
}
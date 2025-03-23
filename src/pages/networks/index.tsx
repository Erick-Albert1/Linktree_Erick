import { Header } from "../../components/Header/Index"
import { Input } from "../../components/input"
import { FormEvent, useEffect, useState } from "react"

import { db } from "../../services/firebaseConnections"
import { setDoc, doc, getDoc } from "firebase/firestore"

export function Networks(){

    const [facebook, setFacebook] = useState("")
    const [instagram, setInstagram] = useState("")
    const [youtube, setYoutube] = useState("")

 useEffect(()=>{
    function loadLinks(){
        const docRef = doc(db, "social", "link")
        getDoc(docRef)
        .then((snapshot)=>{
            if(snapshot.data() !== undefined){
                setFacebook(snapshot.data()?.facebook)
                setInstagram(snapshot.data()?.instagram)
                setYoutube(snapshot.data()?.youtube)
            }
        })
    }
    loadLinks();
 }, [])

    function handleRegister(e: FormEvent){
          e.preventDefault();
        setDoc(doc(db, "social", "link"),{
            facebook: facebook,
            instagram: instagram,
            youtube:youtube
        })
        .then(()=>{
            console.log("CADASTRADOS COM SUCESSO!")
        })
        .catch((error)=>{
            console.log("ERRO AO SALVAR" + error)
        })
    }

    return(
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
           <Header/>
            <h1 className="text-white text-2xl font-medium mt-8 mb-4">Minhas redes sociais</h1>
        
            <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
                <label className="text-white font-medium mt-2 mb-2">
                    Link do facebook
                </label>
                <Input
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
                type="url"
                placeholder="Digite a url do facebook..."
                />

            <label className="text-white font-medium mt-2 mb-2">
                        Link do Instagram
                    </label>
                    <Input
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    type="url"
                    placeholder="Digite a url do instagram..."
                    />

<label className="text-white font-medium mt-2 mb-2">
                    Link do Youtube
                </label>
                <Input
                value={youtube}
                onChange={(e) => setYoutube(e.target.value)}
                type="url"
                placeholder="Digite a url do youtube..."
                />

                <button 
                className=" mb-7 font-medium text-white bg-blue-600 h-9 rounded-md flex justify-center items-center "
                type="submit">
                    Salvar Links
                </button>
            </form>

        </div>
    )
}
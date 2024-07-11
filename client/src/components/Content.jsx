import { Routes, Route } from "react-router-dom"
import Hero from "./Content/Hero"
import Dictionary from "./Content/Dictionary"
import Practice from "./Content/Practice"

export default function Content(){
    return(
        <section>
            <Routes>
                <Route path='/' element={<Hero/>}/>
                <Route path='/dictionary' element={<Dictionary/>}/>
                <Route path='/practice' element={<Practice/>}/>
            </Routes>
        </section>
    )
}
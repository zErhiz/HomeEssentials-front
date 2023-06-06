import  { useRef, useState } from "react"
import { uploadFile } from "../../firebase";
import Grid from "react-loading-icons/dist/esm/components/grid";
import { Form } from "react-router-dom";

export default function FormCV() {

let [img, setImg] = useState(null)
let [buttonSend, setButtonSend] = useState(true)
let [loading, setLoading] = useState(false)
console.log("img", img);


const handleSubmit = async (img) => {
    try {
        setLoading(true)
        const result = await uploadFile(img)
        setImg(result)
        if(result) {
            setButtonSend(false)
        }
        setLoading(false) 
    } catch (error) {
        console.log(error);
    }
}
const handleForm = () => {
    console.log("enviado");
}

let name = useRef()
console.log(name);
let lastName = useRef()
let age = useRef()
const [nameInput, setNameInput] = useState("Curriculum Vitae")

return (
    <>
    <section className="h-screen w-screen flex p-10 justify-center text-slate-300 bg-[#dfe1e6]">
        <Form onSubmit={(e)=>handleForm(e)} className="w-[80%] flex flex-col items-center space-y-6 border-2 border-black p-10 bg-white max-w-[800px]">
            <div>
                <input
                    type="text"
                    disabled
                    placeholder="Curriculum Vitae"
                    value={nameInput}
                    className="w-full p-2 px-4 bg-transparent text-center text-4xl mb-3 text-[#403d56] border-b-2 border-[#403d56] font-bold"/>
            </div>
            <div className="w-full flex justify-between">
                <div className="flex flex-col w-2/5">
                    <h2 className="text-2xl border-[#403d56] border-b-2 px-3 text-[#403d56] font-bold">Personal information</h2>
                    <div className="border-[#403d56] border-2 w-full border-t-0 flex flex-col items-center">
                        <input type="name" id="name" name="name"
                                placeholder="Insert your name"
                                onChange={e => setNameInput(e.target.value)}
                                className="w-[90%] appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-black"
                                ref = {name}/>
                        <input type="lastName" id="lastName" name="lastName"
                                placeholder="Insert your last name"
                                className="w-[90%] appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-black"
                                ref = {lastName}/>
                        <input type="name" id="name" name="name"
                                placeholder="Insert how old are you"
                                className="w-[90%] appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-black mb-2"
                                ref = {age}/>
                    </div>
                </div>
                {!img ? (
                    <div className="flex items-center justify-center w-2/5">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full rounded-lg cursor-pointer">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG</p>
                            </div>
                            <input id="dropzone-file" 
                                    type="file" 
                                    onChange={e => handleSubmit(e.target.files[0])} 
                                    className="hidden" />
                        </label>
                    </div>) 
                : (
                    <>
                        <img src={img} className="w-40 h-full object-cover"/>
                    </>
                )}
            </div>
            <div className="w-full text-black">
                <div className="pb-2 mb-5 border-[#403d56] border-b-4 border-dashed flex flex-col items-start">
                    <h2 className="text-2xl border-[#403d56] border-b-2 mb-3 px-3 text-[#403d56] font-bold">Studies</h2>
                    <button className="rounded-full bg-[#403d56] px-6 py-1 text-white t-10 text-lg font-bold">Append one</button>
                </div>
                <div className="pb-2 mb-5 border-[#403d56] border-b-4 border-dashed flex flex-col items-start">
                    <h2 className="text-2xl border-[#403d56] border-b-2 mb-3 px-3 text-[#403d56] font-bold">Work experience</h2>
                    <button className="rounded-full bg-[#403d56] px-6 py-1 text-white t-10 text-lg font-bold">Append one</button>
                </div>
                <div className="pb-2 mb-5 border-[#403d56] border-b-4 border-dashed flex flex-col items-start">
                    <h2 className="text-2xl border-[#403d56] border-b-2 mb-3 px-3 text-[#403d56] font-bold">Employment References</h2>
                    <button className="rounded-full bg-[#403d56] px-6 py-1 text-white t-10 text-lg font-bold">Append one</button>
                </div>
            </div>
            <button disabled={buttonSend} 
                    className="rounded-full bg-[#403d56] p-2 px-16 py-2 text-white t-10 text-lg font-bold mt-5  disabled:opacity-50" 
                    type="submit" value={"send"}>Send
            </button>
            {!loading ? (<></>) : (<Grid className="absolute bg-[#00000073] p-2 rounded-lg"/>)}
        </Form>
        </section>
    </>
    )
}

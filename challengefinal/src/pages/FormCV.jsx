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
        const result = await uploadFile(img, "imgCV/")
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
let lastName = useRef()
let age = useRef()
let Studies1 = useRef()
let Studies2 = useRef()
let Studies3 = useRef()
let Experience1 = useRef()
let Experience2 = useRef()
let Experience3 = useRef()
let References1 = useRef()
let References2 = useRef()
let References3 = useRef()

const [nameInput, setNameInput] = useState("Curriculum Vitae")

const [countStudies , setCountStudies] = useState(0)
const [countExperience , setCountExperience] = useState(0)
const [countReferences , setCountReferences] = useState(0)
console.log("countStudies", countStudies);

const handleStudies = (res) => {
    if(res){countStudies !== 3 ? setCountStudies(countStudies + 1) : setCountStudies(countStudies)}
    else{countStudies !== 0 ? setCountStudies(countStudies - 1) : setCountStudies(countStudies)}
}
const handleExperience = (res) => {
    if(res){countExperience !== 3 ? setCountExperience(countExperience + 1) : setCountExperience(countExperience)}
    else{countExperience !== 0 ? setCountExperience(countExperience - 1) : setCountExperience(countExperience)}
}
const handleReferences = (res) => {
    if(res){countReferences !== 3 ? setCountReferences(countReferences + 1) : setCountReferences(countReferences)}
    else{countReferences !== 0 ? setCountReferences(countReferences - 1) : setCountReferences(countReferences)}
}


return (
    <>
    <section className="h-full w-full flex p-10 justify-center text-slate-300 bg-[#dfe1e6]">
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
                <div className="flex flex-col w-full items-start">
                    <h2 className="text-2xl border-[#403d56] border-b-2 mb-3 px-3 text-[#403d56] font-bold">Personal information</h2>
                        <div className="flex border-[#403d56] border-b-4 border-dashed w-full pt-1">
                            <div className="w-4/6 flex flex-col items-start">
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
                                <div className="flex w-2/5 justify-end mr-5 mb-2 ">
                                    <img src={img} className="w-1/2 object-cover"/>
                                </div>
                                </>
                            )}
                        </div>
                </div>
            </div>
            <div className="w-full text-black">
                <div className="pb-2 mb-5 border-[#403d56] border-b-4 border-dashed flex flex-col items-start">
                    <h2 className="text-2xl border-[#403d56] border-b-2 mb-3 px-3 text-[#403d56] font-bold">Studies</h2>
                    <button className="rounded-full bg-[#403d56] mb-1 px-6 py-1 text-white t-10 text-lg font-bold hover:bg-[#6474a3]"
                            onClick={() => handleStudies(true)}>Append one</button>
                    {countStudies > 0 ? (
                        <input type="text" id="Studies1" name="Studies1"
                        placeholder="Insert Studies"
                        className="w-[90%] appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-black mb-2"
                        ref = {Studies1}/>
                    ) : (<></>)}
                    {countStudies > 1 ? (
                        <input type="text" id="Studies2" name="Studies2"
                        placeholder="Insert Studies"
                        className="w-[90%] appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-black mb-2"
                        ref = {Studies2}/>
                    ) : (<></>)}
                    {countStudies > 2 ? (
                        <input type="text" id="Studies3" name="Studies3"
                        placeholder="Insert Studies"
                        className="w-[90%] appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-black mb-2"
                        ref = {Studies3}/>
                    ) : (<></>)}
                    {countStudies > 0 ? (<button className="rounded-full bg-[#ba2727] mb-1 px-6 py-1 text-white t-10 text-lg font-bold hover:bg-[#dc7878]"
                            onClick={() => handleStudies(false)}>Delete one option</button>) : (<></>)}
                </div>
                <div className="pb-2 mb-5 border-[#403d56] border-b-4 border-dashed flex flex-col items-start">
                    <h2 className="text-2xl border-[#403d56] border-b-2 mb-3 px-3 text-[#403d56] font-bold">Work experience</h2>
                    <button className="rounded-full bg-[#403d56] px-6 py-1 text-white t-10 text-lg font-bold hover:bg-[#6474a3]"
                            onClick={() => handleExperience(true)}>Append one</button>
                    {countExperience > 0 ? (
                        <input type="text" id="Experience1" name="Experience1"
                        placeholder="Insert Work experience"
                        className="w-[90%] appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-black mb-2"
                        ref = {Experience1}/>
                    ) : (<></>)}
                    {countExperience > 1 ? (
                        <input type="text" id="Experience2" name="Experience2"
                        placeholder="Insert Work experience"
                        className="w-[90%] appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-black mb-2"
                        ref = {Experience2}/>
                    ) : (<></>)}
                    {countExperience > 2 ? (
                        <input type="text" id="Experience3" name="Experience3"
                        placeholder="Insert Work experience"
                        className="w-[90%] appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-black mb-2"
                        ref = {Experience3}/>
                    ) : (<></>)}
                    {countExperience > 0 ? (<button className="rounded-full bg-[#ba2727] mb-1 px-6 py-1 text-white t-10 text-lg font-bold hover:bg-[#dc7878]"
                            onClick={() => handleExperience(false)}>Delete one option</button>) : (<></>)}
                </div>
                <div className="pb-2 mb-5 border-[#403d56] border-b-4 border-dashed flex flex-col items-start">
                    <h2 className="text-2xl border-[#403d56] border-b-2 mb-3 px-3 text-[#403d56] font-bold">Employment References</h2>
                    <button className="rounded-full bg-[#403d56] px-6 py-1 text-white t-10 text-lg font-bold hover:bg-[#6474a3]"
                            onClick={() => handleReferences(true)}>Append one</button>
                    {countReferences > 0 ? (
                        <input type="text" id="References1" name="References1"
                        placeholder="Insert Employment References"
                        className="w-[90%] appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-black mb-2"
                        ref = {References1}/>
                    ) : (<></>)}
                    {countReferences > 1 ? (
                        <input type="text" id="References2" name="References2"
                        placeholder="Insert Employment References"
                        className="w-[90%] appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-black mb-2"
                        ref = {References2}/>
                    ) : (<></>)}
                    {countReferences > 2 ? (
                        <input type="text" id="References3" name="References3"
                        placeholder="Insert Employment References"
                        className="w-[90%] appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-black mb-2"
                        ref = {References3}/>
                    ) : (<></>)}
                    {countReferences > 0 ? (
                        <button className="rounded-full bg-[#ba2727] mb-1 px-6 py-1 text-white t-10 text-lg font-bold hover:bg-[#dc7878]"
                        onClick={() => handleReferences(false)}>Delete one option</button>
                    ) : (<></>)}
                </div>
            </div>
            <div className="flex justify-start w-full">
                <label className="flex flex-col text-2xl text-[#403d56] font-bold w-full">Send the file:
                <input type="file" className="
                text-sm text-grey-500 file:mr-5 
                file:rounded-full file:bg-[#403d56] file:px-6 file:py-1 file:text-white file:t-10 file:text-lg file:font-bold 
                hover:file:bg-[#6474a3]" 
                onChange={e => handleSubmit(e.target.files[0])}/>
            </label>
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

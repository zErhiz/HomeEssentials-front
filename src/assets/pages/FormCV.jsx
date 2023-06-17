import  { useRef, useState } from "react"
import { uploadFile } from "../../../firebase";
import Grid from "react-loading-icons/dist/esm/components/grid";
import axios from "axios";
import apiUrl from "../../../api"
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


export default function FormCV() {
    let navigate=useNavigate()

let name = useRef()
let email = useRef()
let lastName = useRef()
let age = useRef()
const [Studies1, setStudies1] = useState("nothing")
const [Studies2, setStudies2] = useState("nothing")
const [Studies3, setStudies3] = useState("nothing")
const [Experience1, setExperience1] = useState("nothing")
const [Experience2, setExperience2] = useState("nothing")
const [Experience3, setExperience3] = useState("nothing")
const [References1, setReferences1] = useState("nothing")
const [References2, setReferences2] = useState("nothing")
const [References3, setReferences3] = useState("nothing")
let [img, setImg] = useState(null)
let [cvLink, setCvLink] = useState(null)
let [buttonSend, setButtonSend] = useState(true)
let [loading, setLoading] = useState(false)

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

const handleSubmitCV = async (cv) => {
    try {
        setLoading(true)
        const resultCv = await uploadFile(cv, "imgCV/")
        setCvLink(resultCv)
        setLoading(false) 
    } catch (error) {
        console.log(error);
    }
}


const handleForm = (e) => {
    e.preventDefault()
    const data = {
        name: name.current.value,
        img: img,
        cv: cvLink,
        email: email.current.value,
        lastName: lastName.current.value,
        age: age.current.value,
        studies: [{
            studies1: Studies1,
            studies2: Studies2,
            studies3: Studies3
        }],
        experience: [{
            experience1: Experience1,
            experience2: Experience2,
            experience3: Experience3
        }],
        references: [{
            references1: References1,
            references2: References2,
            references3: References3
        }]
    }
    console.log("data", data);
    axios.post(apiUrl+"curriculums", data)
    .then(res =>{
        console.log(res)
        toast.success(`${res.data.Curriculums.name}, your cv was successfully saved`, {
                theme: "colored",
                })
        setTimeout(function(){
            e.target.reset()
            navigate("/")
        }, 2000);
    }) 
    .catch(err => {
        console.error(err.response.data.message)
    })
}

const [nameInput, setNameInput] = useState("Curriculum Vitae")

const [countStudies , setCountStudies] = useState(0)
const [countExperience , setCountExperience] = useState(0)
const [countReferences , setCountReferences] = useState(0)

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
    <section className="h-full w-full flex md:p-10 justify-center text-slate-300 bg-[#dfe1e6]">
        <form onSubmit={(e)=>handleForm(e)} className="  w-[100%] md:w-[80%] flex flex-col items-center space-y-6 border-2 border-black  md:p-10 bg-white lg:max-w-[800px]">
            <div>
                <input
                    type="text"
                    disabled
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
                                        onChange={e => e.target.value.length > 0 ? setNameInput(e.target.value) : setNameInput("Curriculum Vitae")}
                                        className="w-[90%] appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-black focus:bg-transparent"
                                        ref = {name}/>
                                <input type="lastName" id="lastName" name="lastName"
                                        placeholder="Insert your last name"
                                        className="w-[90%] appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-black"
                                        ref = {lastName}/>
                                <input type="email" id="email" name="email"
                                        placeholder="Insert your email"
                                        className="w-[90%] appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-black focus:bg-transparent"
                                        ref = {email}/>
                                <input type="number" id="name" name="name"
                                        placeholder="Insert how old are you"
                                        className="w-[90%] appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-black mb-2 focus:bg-transparent"
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
                            onClick={(e) => {e.preventDefault()
                                            handleStudies(true)}}>Append one</button>
                    {countStudies > 0 ? (
                        <input type="text" id="Studies1" name="Studies1"
                        placeholder="Insert Studies"
                        className="w-[90%] appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-black mb-2"
                        onChange={e => e.target.value.length > 0 ? setStudies1(e.target.value) : setNameInput("nothing")}/>
                    ) : (<></>)}
                    {countStudies > 1 ? (
                        <input type="text" id="Studies2" name="Studies2"
                        placeholder="Insert Studies"
                        className="w-[90%] appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-black mb-2"
                        onChange={e => e.target.value.length > 0 ? setStudies2(e.target.value) : setNameInput("nothing")}/>
                    ) : (<></>)}
                    {countStudies > 2 ? (
                        <input type="text" id="Studies3" name="Studies3"
                        placeholder="Insert Studies"
                        className="w-[90%] appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-black mb-2"
                        onChange={e => e.target.value.length > 0 ? setStudies3(e.target.value) : setNameInput("nothing")}/>
                    ) : (<></>)}
                    {countStudies > 0 ? (<button className="flex items-end rounded-full border-b-2 border-red-700 text-black mb-1 px-6 py-1 t-10 text-lg font-bold hover:text-red-700"
                            onClick={(e) => {
                                e.preventDefault()
                                handleStudies(false)}}><b className="mr-2 text-red-700">X </b> Delete one option</button>) : (<></>)}
                </div>
                <div className="pb-2 mb-5 border-[#403d56] border-b-4 border-dashed flex flex-col items-start">
                    <h2 className="text-2xl border-[#403d56] border-b-2 mb-3 px-3 text-[#403d56] font-bold">Work experience</h2>
                    <button className="rounded-full bg-[#403d56] px-6 py-1 text-white t-10 text-lg font-bold hover:bg-[#6474a3]"
                            onClick={(e) => {e.preventDefault()
                                            handleExperience(true)}}>Append one</button>
                    {countExperience > 0 ? (
                        <input type="text" id="Experience1" name="Experience1"
                        placeholder="Insert Work experience"
                        className="w-[90%] appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-black mb-2"
                        onChange={e => e.target.value.length > 0 ? setExperience1(e.target.value) : setNameInput("nothing")}/>
                    ) : (<></>)}
                    {countExperience > 1 ? (
                        <input type="text" id="Experience2" name="Experience2"
                        placeholder="Insert Work experience"
                        className="w-[90%] appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-black mb-2"
                        onChange={e => e.target.value.length > 0 ? setExperience2(e.target.value) : setNameInput("nothing")}/>
                    ) : (<></>)}
                    {countExperience > 2 ? (
                        <input type="text" id="Experience3" name="Experience3"
                        placeholder="Insert Work experience"
                        className="w-[90%] appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-black mb-2"
                        onChange={e => e.target.value.length > 0 ? setExperience3(e.target.value) : setNameInput("nothing")}/>
                    ) : (<></>)}
                    {countExperience > 0 ? (<button className="flex items-end rounded-full border-b-2 border-red-700 text-black mb-1 px-6 py-1 t-10 text-lg font-bold hover:text-red-700"
                            onClick={(e) => {
                                e.preventDefault()
                                handleExperience(false)}}><b className="mr-2 text-red-700">X </b> Delete one option</button>) : (<></>)}
                </div>
                <div className="pb-2 mb-5 border-[#403d56] border-b-4 border-dashed flex flex-col items-start">
                    <h2 className="text-2xl border-[#403d56] border-b-2 mb-3 px-3 text-[#403d56] font-bold">Employment References</h2>
                    <button className="rounded-full bg-[#403d56] px-6 py-1 text-white t-10 text-lg font-bold hover:bg-[#6474a3]"
                            onClick={(e) => {e.preventDefault()
                                            handleReferences(true)}}>Append one</button>
                    {countReferences > 0 ? (
                        <input type="text" id="References1" name="References1"
                        placeholder="Insert Employment References"
                        className="w-[90%] appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-black mb-2"
                        onChange={e => e.target.value.length > 0 ? setReferences1(e.target.value) : setNameInput("nothing")}/>
                    ) : (<></>)}
                    {countReferences > 1 ? (
                        <input type="text" id="References2" name="References2"
                        placeholder="Insert Employment References"
                        className="w-[90%] appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-black mb-2"
                        onChange={e => e.target.value.length > 0 ? setReferences2(e.target.value) : setNameInput("nothing")}/>
                    ) : (<></>)}
                    {countReferences > 2 ? (
                        <input type="text" id="References3" name="References3"
                        placeholder="Insert Employment References"
                        className="w-[90%] appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-black mb-2"
                        onChange={e => e.target.value.length > 0 ? setReferences3(e.target.value) : setNameInput("nothing")}/>
                    ) : (<></>)}
                    {countReferences > 0 ? (
                        <button className="flex items-end rounded-full border-b-2 border-red-700 text-black mb-1 px-6 py-1 t-10 text-lg font-bold hover:text-red-700"
                            onClick={(e) => {
                                e.preventDefault()
                                handleExperience(false)}}><b className="mr-2 text-red-700">X </b> Delete one option</button>
                    ) : (<></>)}
                </div>
            </div>
            <div className="flex justify-start w-full">
                <label className="flex flex-col text-2xl text-[#403d56] font-bold w-full">Send the file:
                <input type="file" className="
                text-sm text-grey-500 file:mr-5 
                file:rounded-full file:bg-[#403d56] file:px-6 file:py-1 file:text-white file:t-10 file:text-lg file:font-bold 
                hover:file:bg-[#6474a3]" 
                onChange={e => handleSubmitCV(e.target.files[0])}/>
            </label>
            </div>
            <button disabled={buttonSend} 
                    className="rounded-full bg-[#403d56] p-2 px-16 py-2 text-white t-10 text-lg font-bold mt-5  disabled:opacity-50" 
                    type="submit" value={"send"}>Send 
            </button>
            {!loading ? (<></>) : (<Grid className="fixed bg-[#00000073] p-2 rounded-lg"/>)}
        </form>
        
        <ToastContainer
            transition={Flip}
            position="bottom-right"
            autoClose={2000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"/>
        </section>
    </>
    )
}

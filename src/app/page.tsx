import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-200 h-screen flex items-center justify-center">

{/* Left side */}

      <div className="text-3xl w-1/2 px-10">
<img src="\pictures\facebook.svg" alt="Facebook Logo" width={300} height={100}/>
<p className="ml-8 -mt-2">Facebook helps you connect and share with the people in your life.</p>
      </div>

{/* right Side */}
      <div className="flex flex-col bg-white p-6 rounded-lg w-1/3 ">
<input className= "my-2 border border-1 border-blue-300 p-3" type="text" placeholder="Email address or phone number" />
<input className= "my-2 border border-1 border-blue-300 p-3" type="password" placeholder="Password" />
<button className="bg-blue-600 p-3 text-white font-bold"> Log in </button>
<p className="text-center justify-center text-blue-600 p-3 ">Forgotten Password</p>
<span className="my-2"><hr /></span>
<button className="bg-green-500 p-3 scroll-px-4 my-4 text-white">Create new account</button>
      </div>
      
    </div>
  )
}

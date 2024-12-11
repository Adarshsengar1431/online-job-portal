import NavBar from "./components/Navbar/Index"
import Header from "./components/Header/Index"
import SearchBar from "./components/SearchBar"
import JobCard from "./components/JobCard/Index"
// import JobData from "./JobDummyData"
import { useEffect, useState } from "react"
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import {db} from "./firebase.config"


function App() {
  const [Jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async() => {
    setCustomSearch(false);
    const tempJobs = []
    const JobsRef = query(collection(db, "Jobs"));
    const q = query(JobsRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);

req.forEach((Job) => {
  // console.log(doc.id, " => ", doc.data());
  tempJobs.push({
    ...Job.data(),
    id: Job.id,
    postedOn: Job.data().postedOn ? Job.data().postedOn.toDate() : null,
  })
});
setJobs(tempJobs);
  }

  const fetchJobsCustom = async(jobCriteria) => {
    setCustomSearch(true);
    const tempJobs = []
    const JobsRef = query(collection(db, "Jobs"));
    const q = query(JobsRef, where("type", "==", jobCriteria.type), where("title", "==", jobCriteria.title), where("experience", "==", jobCriteria.experience), where("location", "==", jobCriteria.location), orderBy("postedOn", "desc"));
    const req = await getDocs(q);

req.forEach((Job) => {
  // console.log(doc.id, " => ", doc.data());
  tempJobs.push({
    ...Job.data(),
    id: Job.id,
    postedOn: Job.data().postedOn ? Job.data().postedOn.toDate() : null,
  })
});
setJobs(tempJobs);
  }

  useEffect(() => {
    fetchJobs()
  },[])

  return (
   <div>
    <NavBar />
    <Header />
    <SearchBar fetchJobsCustom={fetchJobsCustom}/>
    {customSearch &&
    <button onClick={fetchJobs} className="flex pl-[1250px mb-2]">
      <p className="text-blue-500  px-10 py-2 rounded-md text-white">Clear Filters</p>
    </button>
    }
    {Jobs.map((Job)=> (
       <JobCard key={Job.id} {...Job}/>
     ))}
   </div>
  )
}

export default App

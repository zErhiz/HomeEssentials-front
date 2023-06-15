import React from 'react';
import fondo from '../../public/images/Logos/hoe-b.png'
import { Link as Anchor } from 'react-router-dom';
import NavigationComponent from './AdminComponents/NavigationComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import action from "../store/actions/curriculums"
const AdminPanel = () => {
  let curriculums = useSelector((store) => store.curriculumsget.curriculums);
  let { curriculums_read } = action;
  const dispatch = useDispatch();

  useEffect(() => {
    if (curriculums.length === 0) {
      dispatch(curriculums_read());
    }
  }, []);

console.log(curriculums)


  return (
    <div className="h-fit flex bg-gray-100">
      {/* Barra de al lado */}
    <NavigationComponent/>
      {/* Content */}
      <div > 
        <h2 className="text-2xl font-bold relative top-5 p-2 ">Curriculums</h2>
        </div>
      <div className="flex flex-wrap p-8 overflow-scroll gap-2">
        {curriculums.map((curriculum) => (
          <div key={curriculum._id} className="bg-white w-[49%] p-4 rounded-lg shadow mb-4">
            <div className='flex flex-row justify-between'> 
            <div> 
            <h3 className="text-xl font-bold">{curriculum.name} {curriculum.lastName}</h3>
            <p className="text-gray-500">Age: {curriculum.age}</p>
            <p className="text-gray-500">Email: {curriculum.email}</p>
            <ul className="list-disc list-inside"> Experience
              {curriculum.experience.map((exp, index) => (
                <li key={index}>{exp.experience1}, {exp.experience2}, {exp.experience3}</li>
              ))}
            </ul>
            <ul className="list-disc list-inside"> References
              {curriculum.references.map((ref, index) => (
                <li key={index}>{ref.references1}, {ref.references2}, {ref.references3}</li>
              ))}
            </ul>
            <ul className="list-disc list-inside"> Studies
              {curriculum.studies.map((stud, index) => (
                <li key={index}>{stud.studies1}, {stud.studies2}, {stud.studies3}</li>
                ))}
            </ul>
            </div>
            <div className='flex  items-center'>
                <img src={curriculum.img} alt="Curriculum Image" className="rounded w-40 h-40" />
            </div>
          </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
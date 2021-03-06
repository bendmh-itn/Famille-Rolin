import React, { useEffect, useState } from 'react';
import TrombinoscopeFlex from '../Components/trombinoscopeFlex';
import fireBase from '../firebase';
import { MyFilter, DataInOptions, copyData } from '../Functions/FilterData';
import SelectPerson from '../Components/selectPerson';
import {ACTUAL_GENERATION} from "../constant";
import { useHistory } from "react-router-dom";


const Family = ({match}) => {
	const [famillyFiltred, setFamillyFiltred] = useState([]);
	const [generation, setGeneration] = useState("");
	const [options, setOptions] = useState([]);
	const history = useHistory();
	
    useEffect(() => {
		if(options.length === 0){
			fireBase.findAll()
			.then(querySnapshot => {
				var numberFamilly = match.params.numberFamilly;
				var generation = match.params.generation;
				setGeneration(match.params.generation);
				if(generation === undefined || numberFamilly === undefined){
					numberFamilly = 0;
					generation = "1";
					setGeneration("1")
				}
				const data = querySnapshot.docs.map(doc => doc.data());
				copyData(data);
				const FilterData = MyFilter(numberFamilly, generation);
				setFamillyFiltred([]);
				setFamillyFiltred(FilterData);
        		setOptions(DataInOptions());
				window.scroll(0, 0);
			})
		}else {
			var numberFamilly = match.params.numberFamilly;
			var generation = match.params.generation;
			setGeneration(match.params.generation);
			if(generation === undefined || numberFamilly === undefined){
				numberFamilly = 0;
				generation = "1";
				setGeneration("1")
			}
			const FilterData = MyFilter(numberFamilly, generation);
			setFamillyFiltred([]);
			setFamillyFiltred(FilterData);
			window.scroll(0, 0);
		}
    }, [match.params.generation, match.params.numberFamilly]);
    return ( 
        <>
			<SelectPerson
				data={options}
			/>
			{famillyFiltred[0] !== undefined && 
					<div>
						<h1 className='mb-0'>{famillyFiltred[0].famillyName}</h1>
						{
							famillyFiltred[0].dateMariage !== undefined &&
							<h4 className='text-center'>{famillyFiltred[0].dateMariage}</h4>
						}
						{
							famillyFiltred[0].dateMariage === undefined &&
							<p></p>
						}
					</div>
					
			}
			<button type="button" className="btn btn-info goBack" onClick={() => history.goBack()}>Go back</button>
			<div className="containerFlexible">
			{
				famillyFiltred
					.filter(person => person.generation === generation)
					.map((person) => {
					return <TrombinoscopeFlex
						key={person.firstName + "" + person.famillyName}
						lienImage={person.pictureName}
						prenomNom={person.firstName + " " + person.lastName}
						dateDeNaissance= {person.birthDate}
						dateDeces={person.deathDate}
						link="#"
						generation={person.generation}
					/>
					}
				
			)}
			</div>
			<div className="containerFlexible">
			{
				famillyFiltred
				.filter(person => person.generation !== generation)
				.map((person) => {
					return <TrombinoscopeFlex
						key={person.firstName + "" + person.famillyName}
						lienImage={person.pictureName}
						prenomNom={person.firstName + " " + person.lastName}
						dateDeNaissance= {person.birthDate}
						dateDeces={person.deathDate}
						link={person.generation === ACTUAL_GENERATION || person.generation === "1" ? "#" :  "/" + person.generation + "/" + person.numberFamilly }
						generation={person.generation}  
					/>
				}
			)}
			</div>
        </>
     );
}
 
export default Family;
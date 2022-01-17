import React, { useEffect, useState } from 'react';
import fireBase from '../firebase';
import { storage } from '../firebase';
import { DataInOptions, FindOnePerson } from '../Functions/FilterData';
import SelectPerson from '../Components/selectModifyPerson';

const Users = () => {
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [numberFamilly, setNumberFamilly] = useState(0);
    const [generation, setGeneration] = useState("");
    const [famillyName, setFamillyName] = useState("");
    const [picture, setPicture] = useState("");
    const [password, setPassword] = useState("");
    const [options, setOptions] = useState([]);
    const [message, setMessage] = useState("");
    const [create, setCreate] = useState(true);
    const [pictureChanged, setPictureChanged] = useState(false);
    const [id, setId] = useState("");

    useEffect(() => {
        setOptions(DataInOptions());
    }, []);

    function CreateUser() {
        if(picture === ""){
            fireBase.CreateUserFireBase(lastName, firstName, birthDate, numberFamilly, generation, "", famillyName).then(() => {
                setMessage("Document successfully written!");
                RefreshField();
              })
              .catch((error) => {
                setMessage("Error writing document: " + error);
              });
        }else{
            const uploadTask = storage.ref(`images/${picture.name}`).put(picture);
            uploadTask.on(
                "state_changed",
                snapshot => {},
                error => {
                    console.log(error);
                },
                () => {
                    storage
                        .ref("images")
                        .child(picture.name)
                        .getDownloadURL()
                        .then(pictureName => {
                            fireBase.CreateUserFireBase(lastName, firstName, birthDate, numberFamilly, generation, pictureName, famillyName).then(() => {
                                setMessage("Document successfully written!");
                                RefreshField();
                                })
                                .catch((error) => {
                                setMessage("Error writing document: " + error);
                                });
                        });
                }
            )
        }
    }

    const modifyPersonSelect = (e) => {
        if(e !== null){
            let numberFamilly = e.split('/')[1];
            const person = FindOnePerson(numberFamilly);
            fireBase.FindIdPerson(numberFamilly)
            .then(querySnapshot => {
				const data = querySnapshot.docs.map(doc => doc.id);
				setId(data[0]);
                setLastName(person.lastName);
                setFirstName(person.firstName);
                setGeneration(person.generation);
                setNumberFamilly(person.numberFamilly);
                setBirthDate(person.birthDate);
                setCreate(false);
                setFamillyName(person.famillyName);
                setPicture(person.pictureName);
			});
        }else{
            RefreshField();
        }
    }

    function RefreshField (){
        setId("");
        setLastName("");
        setFirstName("");
        setGeneration("");
        setNumberFamilly("");
        setBirthDate("");
        setFamillyName("");
        setCreate(true);
        setFamillyName("");
    }

    function ModifyUser() {
        if(!pictureChanged){
            fireBase.ModifyUserFireBase(id, lastName, firstName, birthDate, numberFamilly, generation, picture, famillyName).then(() => {
                setMessage("Document successfully written!");
                RefreshField();
              })
              .catch((error) => {
                setMessage("Error writing document: " + error);
              });
        }else{
            const uploadTask = storage.ref(`images/${picture.name}`).put(picture);
            uploadTask.on(
                "state_changed",
                snapshot => {},
                error => {
                    console.log(error);
                },
                () => {
                    storage
                        .ref("images")
                        .child(picture.name)
                        .getDownloadURL()
                        .then(pictureName => {
                            fireBase.ModifyUserFireBase(id, lastName, firstName, birthDate, numberFamilly, generation, pictureName, famillyName).then(() => {
                                setMessage("Document successfully written!");
                                RefreshField();
                                })
                                .catch((error) => {
                                setMessage("Error writing document: " + error);
                                });
                        });
                }
            )
        }
        
    } 

    const onChangePicture = e => {
        setPicture(e.target.files[0]);
        setPictureChanged(true);
    };

    return (
        <>
            {password !== "FamilleRolin" &&
            <div>
                <div>
                    <input type="password" placeholder='le mot de passe' onChange={e => setPassword(e.target.value)}/>
                </div>
            </div>
            }
            {password === "FamilleRolin" && 
            <div>
                <h3>Pour modifier une personne, sélectionne la dans la liste ci-dessous</h3>
                <SelectPerson
                    data={options}
                    modifyPerson={modifyPersonSelect}
                />
                <div className="form-group">
                    <label>Nom de famille (souvent nom mari - épouse)</label>
                    <input className="form-control" value={famillyName} placeholder="Nom de famille..." onChange={e => setFamillyName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Nom</label>
                    <input className="form-control" value={lastName} placeholder="Nom..." onChange={e => setLastName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Prénom</label>
                    <input className="form-control" value={firstName} placeholder="Prénom..." onChange={e => setFirstName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Date de naissance</label>
                    <input className="form-control" value={birthDate} placeholder="date de naissance..." onChange={e => setBirthDate(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Numéro de famille (important)</label>
                    <input className="form-control" value={numberFamilly} type="number" placeholder="numéro de famille..." onChange={e => setNumberFamilly(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Génération (important)</label>
                    <input className="form-control" value={generation} placeholder="génération..." onChange={e => setGeneration(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Image profil</label>
                    <input className="form-control" type="file" onChange={onChangePicture}/>
                </div>
                {create &&
                    <button className="btn btn-primary m-4" onClick={CreateUser}>
                        créer
                    </button>
                }
                {!create &&
                    <button className="btn btn-secondary m-4" onClick={ModifyUser}>
                        Modifier
                    </button>
                }
                <p>{message}</p>
            </div>
            }
        </>
    );
};

export default Users;
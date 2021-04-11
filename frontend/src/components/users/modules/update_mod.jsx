import React, { useRef, useState, useEffect } from 'react';
import './mod_two.css';
import '../../auth/auth.css';
import './update_mod.css'
import { useAuth } from '../../../contexts/auth-context';
import { useHistory } from 'react-router-dom';
import babyImg from '../../../assets/baby.png';
import phoneImg from '../../../assets/phone.png';
import emailImg from '../../../assets/email.png';
import pwdImg from '../../../assets/lock.png'
import markerImg from '../../../assets/marker.png';
import genderImg from '../../../assets/gender.png';
import { editAction, revealShowPage } from '../../../jquery/jquery-ops';


const UpdateMod = (props) => {
    const { currentUser, updateEmail, updatePassword, updateEmailAndPassword } = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();
    const phoneRef = useRef();
    const zipRef = useRef();
    const passwordConfirmRef = useRef();
    const [email, setEmail] = useState(currentUser.email);
    const [phone, setPhone] = useState(props.user.cell_phone);
    const [zip, setZip] = useState(props.user.zip_code);
    const [error, setError] = useState('');
    const [update, setUpdate] = useState(false);
    const [loading, setLoading] = useState(false)
    let btnTuple = ["edit", "update"];
    const [pI, setPI] = useState(0);
    const [eI, setEI] = useState(0);
    const [phI, setPHI] = useState(0);
    const [zI, setZI] = useState(0);
    const formBtns = { email: btnTuple, password: btnTuple, phone: btnTuple, 
                        zip: btnTuple}

    useEffect(() => {
        props.getUser(email);

    }, [update]) 

    

    const handleSubmit = (e) => {
        e.preventDefault();
        let uE = false;
        let uP = false;

        if (passwordRef.current.value !== passwordRef.current.value) {
            return setError("Passwords do not match")
        }


        const promises = [];
        setLoading(true);
        setError("");

        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
            uP = true;
        }
 
        

        Promise.all(promises)
            .then(async () => {
                await updateProfile();
            })
            .catch(() => {
                setError("Failed to update account")
            })
            .finally(() => {
                setLoading(false)
            })

        
    }

    const updateProfile = async () => {
        const user = {
            full_name: props.user.full_name,
            gender: props.user.gender,
            cell_phone: phone,
            date_of_birth: props.user.date_of_birth,
            zip_code: zip,
            email: email,
            id: props.user.id
        }


        const updateSequence = async (updateEmail) => {
            props.updateUser(user);
            await updateEmail(email);
        }
        
            
        if (emailRef.current.value !== currentUser.email) {
            updateSequence(updateEmail)
                .then( () => (update ? setUpdate(false) : setUpdate(true)))
            
        } else {
            props.updateUser(user)
                .then( () => (update ? setUpdate(false) : setUpdate(true)))
        }
        
    }
    
    return (
        <div className="mod2 update-mod-a">
            <div className="top" id="update-top">
                <div className="auth-back" id="update-back">

                    <div id="db-data">
                        <div id="db-left">
                            <div id="ud-phone">
                                <form id="phone-form">
                                    <p className="update-phone-txt"
                                    ><span><img src={phoneImg} alt="phone"/>&nbsp;&nbsp;</span>
                                    {phone}
                                    </p>
                                    <input className="update-phone-input"
                                     ref={phoneRef}
                                        onChange={(e) =>
                                            setPhone(e.target.value)}
                                    type="tel"
                                    name="phone"
                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                        defaultValue={`${props.user.cell_phone}`}
                                    />
                                    <button className="phone"
                                        onClick={(e) => {
                                            phI === 0 ? setPHI(1) : setPHI(0)
                                            editAction(e, phI);
                                        }}
                                    >{formBtns.phone[phI]}</button>
                                </form>
                            </div>
                            <div id="ud-gender"></div>
                        </div>
                        <div id="db-right">
                            <div id="ud-zip">
                                <form id="zip-form">
                                    <p className="update-zip-txt"
                                    ><span><img src={markerImg} alt="zip" />&nbsp;&nbsp;</span>
                                        {zip}
                                    </p>
                                    <input className="update-zip-input"
                                        ref={zipRef}
                                        onChange={(e) =>
                                            setZip(e.target.value)}
                                        type="text"
                                        defaultValue={`${props.user.zip_code}`}
                                    />
                                    <button className="zip"
                                        onClick={(e) => {
                                            zI === 0 ? setZI(1) : setZI(0)
                                            editAction(e, zI);
                                        }}
                                    >{formBtns.zip[zI]}</button>
                                </form>
                            </div>
                            <div id="ud-dob"></div>
                        </div>
                    </div>

                    <div className="auth-flex" id="update-flex">
                        <div>
                            <div>
                                <form className="auth-form update-form"
                                    id="auth-form">
                                    <div>
                                        <p className="update-email-txt">
                                            <img src={emailImg} alt="" />
                                            &nbsp;&nbsp;{`${email}`}</p>
                                        <input id="input"
                                            className="update-email-input"
                                            type="email" ref={emailRef}
                                            defaultValue={email}
                                            onChange={(e) => 
                                                setEmail(e.target.value)}
                                        />
                                        <button id="update-btn" className="email"
                                            onClick={(e) => {
                                                eI === 0 ? setEI(1): setEI(0)
                                                editAction(e, eI);
                                            }}
                                        >{formBtns.email[eI]}</button>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <form className="auth-form update-form"
                                    id="auth-form">
                                    <div>
                                        <p className="update-pwd-txt">
                                            <img src={pwdImg} alt="" />
                                        &nbsp;&nbsp;{`••••••••••••••`}</p>

                                        <div id="pwd-input-flex">
                                            <input id="input"
                                                className="update-pwd-input"
                                                type="password" ref={passwordRef}
                                                // defaultValue={`123456`}
                                            />
                                            <input id="input"
                                                className="update-pwd-input"
                                                type="password" ref={passwordConfirmRef}
                                                // defaultValue={`123456`}
                                            />
                                        </div>
                                        <div className="pw-btn" >
                                            <button id="update-btn"
                                                className="pwd"
                                                onClick={(e) => {
                                                    pI === 0 ? setPI(1) : setPI(0);
                                                    editAction(e, pI);
                                                    // setPassword(passwordConfirmRef.current.value)
                                                }}
                                            >{formBtns.password[pI]}</button>
                                        </div>

                                    </div>
                                </form>
                                <div id="update-save">
                                    <button 
                                     onClick={ async (e) => { 
                                         handleSubmit(e)
                                         await revealShowPage()
                                    }} >SAVE</button>&nbsp;&nbsp;&nbsp;
                                    <button
                                        onClick={async () => {
                                            await revealShowPage()

                                        }}
                                    >Cancel</button>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateMod;
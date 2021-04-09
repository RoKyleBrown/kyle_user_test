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
    const passwordConfirmRef = useRef();
    const [email, setEmail] = useState(currentUser.email);
    // const [password, setPassword] = useState(currentUser.password);
    const [error, setError] = useState('');
    const [update, setUpdate] = useState(false);
    const [loading, setLoading] = useState(false)
    const history = useHistory();
    let btnTuple = ["edit", "update"];
    const [pI, setPI] = useState(0);
    const [eI, setEI] = useState(0);
    const formBtns = { email: btnTuple, password: btnTuple}

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
            cell_phone: props.user.cell_phone,
            date_of_birth: props.user.date_of_birth,
            zip_code: props.user.zip_code,
            email: email,
            id: props.user.id
        }


        const updateSequence = async (updateEmail) => {
            props.updateUser(user);
            updateEmail(email);
        }
        
            
        if (emailRef.current.value !== currentUser.email) {
            updateSequence(updateEmail)
                .then( update ? setUpdate(false) : setUpdate(true))
            
        } else {
            props.updateUser(user)
                .then( update ? setUpdate(false) : setUpdate(true))
        }
        
    }
    
    return (
        <div className="mod2 update-mod-a">
            <div className="top">
                <div className="auth-back" id="update-back">

                    <div id="db-data">
                        <div id="db-left">
                            <div id="ud-phone">
                                <form action="">
                                    <p><span><img src={phoneImg} alt="" />&nbsp;&nbsp;</span>
                                    {props.user.cell_phone}
                                    </p>
                                    <input style={{display:"none"}} type="tel"
                                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                        placeholder={`${props.user.cell_phone}`}
                                    />
                                </form>
                            </div>
                            <div id="ud-gender"></div>
                        </div>
                        <div id="db-right">
                            <div id="ud-zip"></div>
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
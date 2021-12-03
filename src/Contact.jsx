import React from 'react'
import { useState, useEffect } from 'react'

const getitems = () => {
    let list = localStorage.getItem('option')

    if (list) {
        return JSON.parse(localStorage.getItem('option'))
    } else {
        return [];
    }
}

const Contact = () => {

    const [registration, setRegistration] = useState({
        email: '',
        password: '',
        phone: '',
        username: '',
        Radio: ''
    });

    const [allentry, setAllEntry] = useState(getitems());
    const [isEdit, setISEdit] = useState(null)
    
   const [emailErr, setEmailErr] = useState(false);
//    const [pwdError, setPwdError] = useState(false);

    const handleform = (e) => {
        const name = e.target.name
        const value = e.target.value
        setRegistration({ ...registration, [name]: value })
        if(value.length<3){
            setEmailErr(true)
        }else{
            setEmailErr(false)
        }
    }

    const entry = (e) => {
        e.preventDefault();
        if (registration.email && registration.password && registration.phone && registration.username && registration.Radio) {
            const newentry = { ...registration, id: new Date().getTime().toString() }
            setAllEntry([...allentry, newentry])
            setRegistration({ password: '', email: '', phone: '', username: '', });
        }
    }

    const editor = () => {
        setAllEntry(
            allentry.map((elem) => {
                if (elem.id === isEdit) {
                    return { ...elem, ...registration }
                } return elem;
            })
        );
        setRegistration({ password: '', email: '', phone: '', username: '', });
        setISEdit(null)
    }

    const editdata = (id) => {
        const edit = allentry.find((editelm) => editelm.id === id)
        setRegistration(edit)
        setISEdit(id)
    }

    const removedata = (id) => {
        const remove = allentry.filter((cuelm) => cuelm.id !== id)
        setAllEntry(remove)
    }

    const cleardata = () => {
        setAllEntry([])
    }

    useEffect(() => {
        localStorage.setItem('option', JSON.stringify(allentry))
    }, [allentry])

    


    return (
        <>
            <form action="" onSubmit={entry}>
                <div className='card-c'>
                    <h1>Complete form with create,read,update,delete full [CRUD] operation</h1>
                    <p>we are using usestate, useffect hooks and localstorage for storage</p>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" autoComplete='off'
                            value={registration.email} name='email'
                            onChange={handleform} 
                        /> {emailErr? <span>user not valid</span>:"" }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea2" className="form-label">password</label>
                        <input type="password" className="form-control" id="exampleFormControlInput2" autoComplete='off'
                            value={registration.password} name='password'
                            onChange={handleform} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea3" className="form-label">phone</label>
                        <input type="number" className="form-control" id="exampleFormControlInput3" autoComplete='off'
                            value={registration.phone} name='phone'
                            onChange={handleform} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea4" className="form-label">Username</label>
                        <input type="text" className="form-control" id="exampleFormControlInput4" autoComplete='off'
                            value={registration.username} name='username'
                            onChange={handleform} />
                    </div>
                    <div>
                        <label htmlFor="xampleFormControlTextarea5" >male </label>
                        <input type="Radio" autoComplete='off'
                            value="male" name='Radio'
                            onChange={handleform} checked={registration.Radio === "male"} />
                        <label htmlFor="xampleFormControlTextarea6" >female </label>
                        <input type="Radio" autoComplete='off'
                            value="female" name='Radio'
                            onChange={handleform} checked={registration.Radio === "female"} />
                        <label htmlFor="xampleFormControlTextarea7" >other </label>
                        <input type="Radio" autoComplete='off'
                            value="other" name='Radio'
                            onChange={handleform} checked={registration.Radio === "other"} />
                    </div>
                    <button type='submit' style={{ width: '10%', marginBottom: '10px', borderRadius: '5px', backgroundColor: 'gold' }} >Login</button>
                </div>
            </form>

            <button onClick={editor} style={{ width: '7%',margin:'10px 0 10px 40rem' ,borderRadius: '5px', backgroundColor: 'gold' }} >Edit</button>
            <div>
                {
                    allentry.map((ce) => {
                        return (
                            <div className='output' key={ce.id}>
                                <p>email: {ce.email}</p>
                                <p>password: {ce.password}</p>
                                <p>phone: {ce.phone}</p>
                                <p>username: {ce.username}</p>
                                <p>gender: {ce.Radio}</p>

                                <button style={{ backgroundColor: 'red', margin: '1px  3px 30px', borderRadius: '5px' }} onClick={() => editdata(ce.id)}>Edit</button>

                                <button style={{ backgroundColor: 'red', margin: '1px  3px 30px', borderRadius: '20px' }} onClick={() => removedata(ce.id)}>Remove</button>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={cleardata} style={{ width: '30%', margin: '0 0 5px 500px', borderRadius: '20px', backgroundColor: 'chartreuse' }} >Clear All</button>
        </>
    )
}

export default Contact;

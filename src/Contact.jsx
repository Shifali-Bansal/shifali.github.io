import React,{useState} from 'react';
import Footer from './Footer';
const Contact = () => {
    const[data,setData]=useState({
        name:"",
        phone:"",
        email:"",
        msg:"",
    });
    const InputEvent=(event)=>{
        const{name,value}=event.target;
        setData((preval)=>{
            return{
                ...preval,
                [name]:value,
            };
        });
    };
    const formSubmit=(e)=>{
e.preventDefault();
alert(
    `Myname is ${data.name}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.msg}`
    );
    };
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="name" value={data.name} onChange={InputEvent} placeholder="Enter your name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Mobile number" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}/>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};
export default Contact;
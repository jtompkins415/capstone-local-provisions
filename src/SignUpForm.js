import {useState} from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Col
} from 'reactstrap';
import './SignUpForm.css'

const SignUpForm = ({signup}) => {
    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: ''
    })
    
    const handleChange = (evt) => {
        const {name, value} = evt.target
        setFormData(data => ({...data,[name]:value}));
    }


    return (
        <div>
            <div className='SignupForm-title'>
                <h1> CREATE AN ACCOUNT </h1>
            </div>
        <Form className='SignupForm'>
            <FormGroup row>
                <Label className="SignupForm-label" htmlFor='firstName' sm={3}>FIRST NAME: </Label>
                <Col sm={8}>
                <Input className='SignupForm-input' id='firstName' name='firstName' type='text' value={formData.firstName} onChange={handleChange} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label className="SignupForm-label" htmlFor='lastName' sm={3}>LAST NAME: </Label>
                <Col sm={8}>
                <Input className='SignupForm-input'  id='lastName' name='lastName' type='text' value={formData.lastName} onChange={handleChange}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label className="SignupForm-label" htmlFor='email' sm={3}>EMAIL: </Label>
                <Col sm={8}>
                <Input className='SignupForm-input'  id='email' name='email' type='email' value={formData.email} onChange={handleChange}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label className="SignupForm-label" htmlFor='username' sm={3}>USERNAME: </Label>
                <Col sm={8}>
                <Input className='SignupForm-input'  id='username' name='username' type='text' value={formData.username} onChange={handleChange} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label className="SignupForm-label" htmlFor='password' sm={3}>PASSWORD: </Label>
                <Col sm={8}>
                <Input className='SignupForm-input'  id='password' name='password' type='password' value={formData.password} onChange={handleChange} />
                </Col>
            </FormGroup>
            <Button outline className="SignupForm-button" color="success">
                Submit
            </Button>
            <Button outline className="SignupForm-button" color='danger' href="/main">
                Cancel
            </Button>
        </Form>
        </div>
    )
};

export default SignUpForm;
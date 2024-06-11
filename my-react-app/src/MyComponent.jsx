//! React onChange


import {useState} from 'react'


function MyComponent() {

    const [name, setName] = useState("Guest")
    const [quantity, setQuantity] = useState(1)
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState('')
    const [shipping, setShipping] = useState('Delivery')
    
    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }

    function handleCommentChange(event) {
        setComment(event.target.value)
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value)
    }

    function handleShipping(event) {
        setShipping(event.target.value)
    }


return (
    <div>
        <input type="text" value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>

        <input type="number" value={quantity} onChange={handleQuantityChange} />
        <p>Quantity: {quantity}</p>

        <textarea name="" id="" cols="30" 
        rows="10" value={comment} onChange={handleCommentChange}
        placeholder='Enter your delivery instruction'></textarea>
        <p>Comment: {comment}</p>

        <select name="" id="" onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="AMEX">AMEX</option>
        </select>
        <p>Payment: {payment}</p>

        <label htmlFor="">
            <input type="radio" value="Pick up"
            checked={shipping === "Pick up"} 
            onChange={handleShipping} />
            Pick Up
            </label><br />
        <label htmlFor="">
        <input type="radio" value="Delivery"
            checked={shipping === "Delivery"} 
            onChange={handleShipping} />
            Delivery
            </label>
            <p>Shipping: {shipping}</p>

    </div>
)
}

export default MyComponent
import React, { useState, useEffect, useRef } from 'react';
import { useStateContext } from '../context/StateContext';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping, AiFillCreditCard } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { urlFor } from '../lib/client';
import emailjs from "@emailjs/browser";
import { useRouter } from 'next/router';
import styles from "../styles/payment.module.css";

const Payment = () => {

  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();
  const router = useRouter();

  const [step, setStep] = useState(1);

  const shippingCharges = 100;
  const [total, setTotal] = useState(0);

  // Function to calculate total amount
  const calculateTotal = () => {
    const totalAmount = totalPrice + shippingCharges;
    setTotal(totalAmount);
  };

  // Call the calculateTotal function whenever there is a change in the order or relevant data
  useEffect(() => {
    calculateTotal();
  }, [totalPrice]);

  // State for Step 1
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [mobilenumber, setMobilenumber] = useState('');
  const [anothernumber, setAnothernumber] = useState('');


  // State for Step 2
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [landmark, setLandmark] = useState('');
  const [postcode, setPostcode] = useState('');
  const [title, setTitle] = useState('');

  const [comment, setComment] = useState('');


  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const [formSubmitionStatus, setFormSubmitionStatus] = useState("notSubmitted");

  useEffect(() => {
    if (formSubmitionStatus === "submitted") {
    }
  }, [formSubmitionStatus]);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    let emailContent = "Order Details:\n\n";

    cartItems.forEach((item) => {
      emailContent += `Product: ${item.name}\n`;
      emailContent += `Price: $${item.price}\n`;
      emailContent += `Quantity: ${item.quantity}\n\n`;
    });

    emailContent += `Total Price: $${totalPrice}\n`;


    const templateParams = {
      fullname,
      email,
      mobilenumber,
      anothernumber,
      address,
      city,
      landmark,
      title,
      emailContent,
      comment,
    };

    emailjs
      .send(
        "service_jzfw6yo",
        "template_1j9rjvf",
        templateParams,
        "rPCAkT0spbuNCimo5"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setFormSubmitionStatus("submitted");
          router.push('/success');
        },
        (error) => {
          console.log(error.text);
        }
      );

    form.current.reset();
    alert("info sent successfully");
  };


  return (
    <section>
      <div className='products-heading'>
        <h2>COD</h2><p>Cash On Delivery</p>
      </div>


      <div className={styles.form}>

        <div className={styles.formdata}>


          <form className={styles.form1} ref={form} onSubmit={sendEmail}>
            <h3>This is a DELIVERY ORDER<br />
              Just a last step, please enter your details:</h3><br /><br />
            <label for="title">Title:</label><br />
            <select value={title} id="title" name="title" onChange={(e) => setTitle(e.target.value)}>
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Dr.">Dr.</option>
            </select><br /><br />
            <label>Full Name</label>
            <br />
            <input name='fullname' type="text" placeholder="Enter your full name" value={fullname} onChange={(e) => setFullname(e.target.value)} required />
            <br /><label for="mobile">Mobile Number</label>
            <br />
            <input id="mobile" name='mobilenumber' maxLength={11} placeholder='03xx-xxxxxxx' title="Please enter a valid mobile number in the format 03xx-xxxxxxx" pattern="\d{4}-\d{7}" type="text" value={mobilenumber} onChange={(e) => setMobilenumber(e.target.value)} required />
            <br /><label for="mobile2">Alternate Number</label>
            <br />
            <input id="mobile2" name='mobilenumber2' maxLength={11} placeholder='03xx-xxxxxxx' title="Please enter a valid alternate mobile number in the format 03xx-xxxxxxx" pattern="\d{4}-\d{7}" type="text" value={anothernumber} onChange={(e) => setAnothernumber(e.target.value)} required />

            <br /><label>Email</label>
            <br />
            <input name='email' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <br />
            <label>Delivery Address</label>
            <br />
            <input name='address' type="text" placeholder="House no./ Street/ Area" value={address} required onChange={(e) => setAddress(e.target.value)} />
            <br /><label>Nearest LandMark</label>
            <br />
            <input name='landmark' type="text" placeholder="Eg. Beside Train Station" value={landmark} onChange={(e) => setLandmark(e.target.value)} />
            <br /> <label>City</label>
            <br />
            <input name='city' type="text" placeholder="Enter the name of your city" value={city} onChange={(e) => setCity(e.target.value)} />

            <br />


            <label>Additional Instructions</label>
            <br />
            <textarea name='comment' type="text" placeholder="Do you have any additional instructions for us?" value={comment} required onChange={(e) => setComment(e.target.value)} />

            <br />




          </form>
        </div>


        <div className={styles.checkoutbox}>
          <div className={styles.mycheckout}>

            <h3>Pay  </h3>
            <div className={styles.cpricing}>

              <hr />
              <div className={styles.pricings}>
                {cartItems.length >= 1 && cartItems.map((item) => (
                  <div key={item._id}>
                    <div className={styles.pricetag} >
                      <h4>{item.quantity} X {item.name}</h4>
                      <div >

                        <div className={styles.box}>
                          <div style={{marginTop:"3px"}} ><button
                            type="button"
                            
                            className="remove-item"
                            onClick={() => onRemove(item)}
                          >
                            <TiDeleteOutline />
                          </button></div>
                          <div className={styles.itemprice}>
                            <h4 >${item.price} each</h4>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>
                ))}
              </div>


              <hr />

            </div>
            <div className={styles.box}>
              <div className={styles.quantity}>
                <h4>Total</h4>
              </div>
              <div className={styles.itemprice}>
                <h4 >{totalPrice}</h4>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.quantity}>
                <h4>Shipping Charges</h4>
              </div>
              <div className={styles.itemprice}>
                <h4 >100$</h4>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.quantity}>
                <h4>Subtotal:</h4>
              </div>
              <div className={styles.itemprice}>
                <h4 >{total}$</h4>
              </div>
            </div><br />
            <div className={styles.placeorder}>
              <button className={styles.btn} onClick={sendEmail} type='submit'>Place Order</button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;

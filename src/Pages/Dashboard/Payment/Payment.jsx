import { loadStripe } from "@stripe/stripe-js";
import SectionsTitle from "../../../Components/SectionsTitle/SectionsTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
//  add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div>
            <SectionsTitle heading="Payment" subHeading="Please pay to eat"></SectionsTitle>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
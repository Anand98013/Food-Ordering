import { api } from "../../Config/Api";
import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  // CREATE_ORDER_SUCCESS,
  GET_USERS_ORDERS_FAILURE,
  GET_USERS_ORDERS_REQUEST,
  GET_USERS_ORDERS_SUCCESS,
} from "./ActionTypes";

// export const createOrder = (regData) => {
//   return async (dispatch) => {
//     dispatch({ type: CREATE_ORDER_REQUEST });

//     try {
//       // Request to create an order
//       const { data } = await api.post(`/api/order`, regData.order, {
//         headers: {
//           Authorization: `Bearer ${regData.jwt}`,
//         },
//       });

//       if (data.orderId) {
//         // Razorpay options for payment
//         const options = {
//           key: data.key, // Razorpay API key from backend
//           amount: data.amount * 100, // amount in paise
//           currency: data.currency, // currency (INR in this case)
//           name: "Your Business Name", // Name of your company or product
//           description: "Order Payment", // Description of payment
//           order_id: data.orderId, // The Razorpay order ID
//           handler: async function (response) {
//             // Callback function when payment is successful
//             console.log("Payment Success:", response);
            
//             // Call backend API to confirm payment after success
//             const paymentData = {
//               razorpayPaymentId: response.razorpay_payment_id,
//               razorpayOrderId: response.razorpay_order_id,
//               razorpaySignature: response.razorpay_signature,
//             };

//             await api.post(`/api/payment/verify`, paymentData, {
//               headers: {
//                 Authorization: `Bearer ${regData.jwt}`,
//               },
//             });

//             dispatch({ type: CREATE_ORDER_SUCCESS, payload: response });
//           },
//           prefill: {
//             name: regData.name, // Customer name
//             email: regData.email, // Customer email
//             contact: regData.contact, // Customer phone number
//           },
//           theme: {
//             color: "#3399cc", // Customize the Razorpay popup theme color
//           },
//         };

//         // Initialize Razorpay
//         const rzp = new window.Razorpay(options);
        
//         // Open Razorpay payment window
//         rzp.open();

//         // Handle payment failure
//         rzp.on('payment.failed', function (response) {
//           console.error("Payment Failed:", response);
//           dispatch({ type: CREATE_ORDER_FAILURE, payload: response.error });
//         });
//       }
//     } catch (error) {
//       dispatch({ type: CREATE_ORDER_FAILURE, payload: error.response?.data || error.message });
//       console.log("error", error.response?.data || error.message);
//     }
//   };
// };


export const createOrder = (regData) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST });

    try {
      // Request to create an order
      const { data } = await api.post(`/api/order`, regData.order, {
        headers: {
          Authorization: `Bearer ${regData.jwt}`,
        },
      });

      if (data.orderId) {
        // Razorpay options for payment
        const options = {
          key: data.key, // Razorpay API key from backend
          amount: data.amount * 100, // amount in paise
          currency: data.currency, // currency (INR in this case)
          name: "Your Business Name", // Name of your company or product
          description: "Order Payment", // Description of payment
          order_id: data.orderId, // The Razorpay order ID
          handler: async function (response) {
            // Callback function when payment is successful
            console.log("Payment Success:", response);
            
            // Call backend API to confirm payment after success
            // const paymentData = {
            //   razorpayPaymentId: response.razorpay_payment_id,
            //   razorpayOrderId: response.razorpay_order_id,
            //   razorpaySignature: response.razorpay_signature,
            // };

            // await api.post(`/api/payment/verify`, paymentData, {
            //   headers: {
            //     Authorization: `Bearer ${regData.jwt}`,
            //   },
            // });

            // Redirect to success URL
            window.location.href = data.successUrl;
          },
          prefill: {
            name: regData.name, // Customer name
            email: regData.email, // Customer email
            contact: regData.contact, // Customer phone number
          },
          theme: {
            color: "#3399cc", // Customize the Razorpay popup theme color
          },
        };

        // Initialize Razorpay
        const rzp = new window.Razorpay(options);
        
        // Open Razorpay payment window
        rzp.open();

        // Handle payment failure
        rzp.on('payment.failed', function (response) {
          console.error("Payment Failed:", response);
          // Redirect to failure URL
          window.location.href = data.failureUrl;
          dispatch({ type: CREATE_ORDER_FAILURE, payload: response.error });
        });
      }
    } catch (error) {
      dispatch({ type: CREATE_ORDER_FAILURE, payload: error.response?.data || error.message });
      console.log("error", error.response?.data || error.message);
    }
  };
};



export const getUsersOrders = (jwt) => {
  return async (dispatch) => {
    dispatch({ type: GET_USERS_ORDERS_REQUEST });
    try {
      const { data } = await api.get(`api/order/user`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({
        type: GET_USERS_ORDERS_SUCCESS,
        payload: data,
      });
      console.log("users order", data);
    } catch (error) {
      dispatch({
        type: GET_USERS_ORDERS_FAILURE,
        payload: error,
      });
      console.log("error", error);
    }
  };
};

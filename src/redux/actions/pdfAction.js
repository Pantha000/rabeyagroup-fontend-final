import axios from "axios";

export const meterialPdf = (userData, id) => async (dispatch) => {
  try {
    dispatch({ type: "GetMeterialExpensesPdfRequest" });
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `https://rabyea-group-backend.vercel.app/api/v1/meterial/genarate/pdf/${id}`,
      userData,
      config
    );
    dispatch({ type: "GetMeterialExpensesPdfSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "GetMeterialExpensesPdfFail",
      payload: err.response.data.message,
    });
  }
};

export const labourPdf = (userData, id) => async (dispatch) => {
  try {
    dispatch({ type: "GetLabourExpensesPdfRequest" });
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `https://rabyea-group-backend.vercel.app/api/v1/labour/genarate/pdf/${id}`,
      userData,
      config
    );
    dispatch({ type: "GetLabourExpensesPdfSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "GetLabourExpensesPdfFail",
      payload: err.response.data.message,
    });
  }
};
//Clearing Errors
export const clearError = () => async (dispatch) => {
  dispatch({ type: "ClearErrors" });
};

//Clearing Success
export const clearSuccess = () => async (dispatch) => {
  dispatch({ type: "ClearSuccess" });
};

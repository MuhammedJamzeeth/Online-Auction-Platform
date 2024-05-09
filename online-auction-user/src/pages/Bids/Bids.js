import NavBar from "../../components/Nav/NavBar";
import * as React from "react";
import PropTypes from "prop-types";
import { NumericFormat } from "react-number-format";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const NumericFormatCustom = React.forwardRef(function NumericFormatCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      valueIsNumericString
      prefix="Rs."
    />
  );
});

NumericFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
const Bids = () => {
  const [values, setValues] = React.useState({
    numberformat: "1320",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
      <NavBar></NavBar>
      <div className="h-full">
        <div class="flex flex-row m-6 gap-4 h-2/4">
          <div class="basis-1/4 bg-gray-50 rounded-md">01</div>
          <div class="basis-2/4 bg-gray-50 rounded-md">
            <div class="flex flex-col ... m-2">
              <div className="bg-gray-200 rounded text-center font-semibold p-1">
                Category name
              </div>
              <div className="bg-gray-100 mt-1 rounded h-96 p-1">
                <div class="flex flex-col ...">
                  <span className="font-medium m-1">Description: </span>
                  <span className="font-medium m-1">Product Expiry:</span>
                  <span className="font-medium m-1">Seller's Name:</span>
                  <span className="font-medium m-1">Seller's Contact no:</span>
                  <span className="font-medium m-1">Status:</span>
                </div>
              </div>
              <div className="bg-gray-100 mt-1 font-medium rounded h-24 p-1 ">
                <div>
                  <div className="flex justify-between">
                    <div>Asking price:</div>
                    <div>Stock: 1</div>
                  </div>
                </div>
                <div className="text-center">
                  {" "}
                  <TextField
                    label="Enter the bid amount"
                    value={values.numberformat}
                    onChange={handleChange}
                    name="numberformat"
                    placeholder="Rs."
                    id="formatted-numberformat-input"
                    InputProps={{
                      inputComponent: NumericFormatCustom,
                    }}
                    variant="standard"
                  />
                  <Button
                    variant="outlined"
                    sx={{
                      marginLeft: 2,
                      background: "#5ce1e6",
                      color: "white",
                      border: "none",
                      "&:hover": {
                        background: "#069296", // Change the background color on hover
                      },
                    }}
                  >
                    Bid
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div class="basis-1/4 bg-gray-50 rounded-md">
            <div class="flex flex-col ... m-2">
              <div className="bg-gray-200 rounded text-center font-semibold p-1">
                Product Bids
              </div>
              <div
                style={{
                  overflowY: "scroll",
                  marginTop: 4,
                  height: 480,
                }}
              >
                <div className="bg-gray-100 mt-1 rounded h-24 p-1 shadow-md overflow-x\y-auto">
                  <div class="flex flex-col ... ">
                    <span className="font-medium m-1">Anonymous user:</span>
                    <span className="font-medium m-1">Rs.</span>
                  </div>
                </div>
                <div className="bg-gray-100 mt-1 rounded h-24 p-1 shadow-md overflow-x\y-auto">
                  <div class="flex flex-col ... ">
                    <span className="font-medium m-1">Anonymous user:</span>
                    <span className="font-medium m-1">Rs.</span>
                  </div>
                </div>
                <div className="bg-gray-100 mt-1 rounded h-24 p-1 shadow-md overflow-x\y-auto">
                  <div class="flex flex-col ... ">
                    <span className="font-medium m-1">Anonymous user:</span>
                    <span className="font-medium m-1">Rs.</span>
                  </div>
                </div>
                <div className="bg-gray-100 mt-1 rounded h-24 p-1 shadow-md overflow-x\y-auto">
                  <div class="flex flex-col ... ">
                    <span className="font-medium m-1">Anonymous user:</span>
                    <span className="font-medium m-1">Rs.</span>
                  </div>
                </div>
                <div className="bg-gray-100 mt-1 rounded h-24 p-1 shadow-md overflow-x\y-auto">
                  <div class="flex flex-col ... ">
                    <span className="font-medium m-1">Anonymous user:</span>
                    <span className="font-medium m-1">Rs.</span>
                  </div>
                </div>
                <div className="bg-gray-100 mt-1 rounded h-24 p-1 shadow-md overflow-x\y-auto">
                  <div class="flex flex-col ... ">
                    <span className="font-medium m-1">Anonymous user:</span>
                    <span className="font-medium m-1">Rs.</span>
                  </div>
                </div>
                <div className="bg-gray-100 mt-1 rounded h-24 p-1 shadow-md overflow-x\y-auto">
                  <div class="flex flex-col ... ">
                    <span className="font-medium m-1">Anonymous user:</span>
                    <span className="font-medium m-1">Rs.</span>
                  </div>
                </div>
                <div className="bg-gray-100 mt-1 rounded h-24 p-1 shadow-md overflow-x\y-auto">
                  <div class="flex flex-col ... ">
                    <span className="font-medium m-1">Anonymous user:</span>
                    <span className="font-medium m-1">Rs.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bids;
